"use client";
import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useTheme } from "./ThemeProvider";

gsap.registerPlugin(InertiaPlugin);

const throttle = (func, limit) => {
  let lastCall = 0;
  return function (...args) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

function hexToRgb(hex) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}

function lerpColor(a, b, t) {
  return `rgb(${Math.round(a.r + (b.r - a.r) * t)},${Math.round(a.g + (b.g - a.g) * t)},${Math.round(a.b + (b.b - a.b) * t)})`;
}

// Light mode: very faint stone lines, darker on hover
const LIGHT_LINE   = hexToRgb("#d6d3d1"); // stone-300
const LIGHT_ACTIVE = hexToRgb("#57534e"); // stone-600
// Dark mode: subtle stone lines, lighter on hover
const DARK_LINE    = hexToRgb("#44403c"); // stone-700
const DARK_ACTIVE  = hexToRgb("#a8a29e"); // stone-400

const DOT_SIZE      = 2.5;
const GAP           = 28;
const PROXIMITY     = 120;
const WARP_STRENGTH = 0.5;   // fraction of proximity to pull inward
const SPEED_TRIGGER = 100;
const SHOCK_RADIUS  = 60;
const SHOCK_STRENGTH = 5;
const MAX_SPEED     = 5000;
const RESISTANCE    = 750;
const RETURN_DUR    = 1;

const DotGrid = () => {
  const { theme } = useTheme();
  const wrapperRef = useRef(null);
  const canvasRef  = useRef(null);
  // { grid: dot[][], flat: dot[], rows, cols }
  const gridRef    = useRef({ grid: [], flat: [], rows: 0, cols: 0 });
  const themeRef   = useRef(theme);
  const pointerRef = useRef({ x: -9999, y: -9999, vx: 0, vy: 0, speed: 0, lastTime: 0, lastX: 0, lastY: 0 });

  useEffect(() => { themeRef.current = theme; }, [theme]);

  const buildGrid = useCallback(() => {
    const wrap   = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = width  * dpr;
    canvas.height = height * dpr;
    canvas.style.width  = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cell   = DOT_SIZE + GAP;
    const cols   = Math.floor((width  + GAP) / cell);
    const rows   = Math.floor((height + GAP) / cell);
    const gridW  = cell * cols - GAP;
    const gridH  = cell * rows - GAP;
    const startX = (width  - gridW) / 2 + DOT_SIZE / 2;
    const startY = (height - gridH) / 2 + DOT_SIZE / 2;

    const grid = [];
    const flat = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        const dot = { cx: startX + c * cell, cy: startY + r * cell, xOffset: 0, yOffset: 0, _inertiaApplied: false };
        row.push(dot);
        flat.push(dot);
      }
      grid.push(row);
    }
    gridRef.current = { grid, flat, rows, cols };
  }, []);

  // Draw loop
  useEffect(() => {
    let rafId;
    const proxSq = PROXIMITY * PROXIMITY;
    const half   = DOT_SIZE / 2;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark   = themeRef.current === "dark";
      const lineRgb  = isDark ? DARK_LINE   : LIGHT_LINE;
      const activeRgb = isDark ? DARK_ACTIVE : LIGHT_ACTIVE;

      const { grid, rows, cols } = gridRef.current;
      if (!rows || !cols) { rafId = requestAnimationFrame(draw); return; }

      const { x: px, y: py } = pointerRef.current;

      // Compute warp-displaced position for every vertex
      // pos[r][c] = { x, y, t }
      const pos = [];
      for (let r = 0; r < rows; r++) {
        const rowPos = [];
        for (let c = 0; c < cols; c++) {
          const dot = grid[r][c];
          const dx  = dot.cx - px;
          const dy  = dot.cy - py;
          const dsq = dx * dx + dy * dy;
          let warpX = 0, warpY = 0, t = 0;
          if (dsq <= proxSq) {
            const dist = Math.sqrt(dsq);
            t = 1 - dist / PROXIMITY;
            const pull = t * t * WARP_STRENGTH * PROXIMITY;
            const len  = dist || 0.001;
            warpX = (-dx / len) * pull;
            warpY = (-dy / len) * pull;
          }
          rowPos.push({ x: dot.cx + dot.xOffset + warpX, y: dot.cy + dot.yOffset + warpY, t });
        }
        pos.push(rowPos);
      }

      // ── Draw grid lines in a single path per color level ──────────────────
      // For simplicity: one pass for base lines, no per-line color changes.
      // The warp shape carries the visual; vertices get the color blend.
      ctx.strokeStyle = lerpColor(lineRgb, activeRgb, 0); // base line color
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (c + 1 < cols) {
            ctx.moveTo(pos[r][c].x, pos[r][c].y);
            ctx.lineTo(pos[r][c + 1].x, pos[r][c + 1].y);
          }
          if (r + 1 < rows) {
            ctx.moveTo(pos[r][c].x, pos[r][c].y);
            ctx.lineTo(pos[r + 1][c].x, pos[r + 1][c].y);
          }
        }
      }
      ctx.stroke();

      // ── Draw vertices with proximity color blend ───────────────────────────
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const { x, y, t } = pos[r][c];
          ctx.fillStyle = lerpColor(lineRgb, activeRgb, t);
          ctx.fillRect(x - half, y - half, DOT_SIZE, DOT_SIZE);
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Resize
  useEffect(() => {
    buildGrid();
    let ro = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(buildGrid);
      if (wrapperRef.current) ro.observe(wrapperRef.current);
    } else {
      window.addEventListener("resize", buildGrid);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", buildGrid);
    };
  }, [buildGrid]);

  // Mouse interactions
  useEffect(() => {
    const onMove = (e) => {
      const now = performance.now();
      const pr  = pointerRef.current;
      const dt  = pr.lastTime ? now - pr.lastTime : 16;
      const dx  = e.clientX - pr.lastX;
      const dy  = e.clientY - pr.lastY;
      let vx    = (dx / dt) * 1000;
      let vy    = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > MAX_SPEED) { const s = MAX_SPEED / speed; vx *= s; vy *= s; speed = MAX_SPEED; }

      pr.lastTime = now; pr.lastX = e.clientX; pr.lastY = e.clientY;
      pr.vx = vx; pr.vy = vy; pr.speed = speed;

      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      if (speed > SPEED_TRIGGER) {
        for (const dot of gridRef.current.flat) {
          const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
          if (dist < PROXIMITY && !dot._inertiaApplied) {
            dot._inertiaApplied = true;
            gsap.killTweensOf(dot);
            const pushX = dot.cx - pr.x + vx * 0.005;
            const pushY = dot.cy - pr.y + vy * 0.005;
            gsap.to(dot, {
              inertia: { xOffset: pushX, yOffset: pushY, resistance: RESISTANCE },
              onComplete: () => {
                gsap.to(dot, { xOffset: 0, yOffset: 0, duration: RETURN_DUR, ease: "elastic.out(1,0.75)" });
                dot._inertiaApplied = false;
              },
            });
          }
        }
      }
    };

    const onClick = (e) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const dot of gridRef.current.flat) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < SHOCK_RADIUS && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist / SHOCK_RADIUS);
          const pushX   = (dot.cx - cx) * SHOCK_STRENGTH * falloff;
          const pushY   = (dot.cy - cy) * SHOCK_STRENGTH * falloff;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance: RESISTANCE },
            onComplete: () => {
              gsap.to(dot, { xOffset: 0, yOffset: 0, duration: RETURN_DUR, ease: "elastic.out(1,0.75)" });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 16);
    window.addEventListener("mousemove", throttledMove, { passive: true });
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("mousemove", throttledMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", pointerEvents: "none", zIndex: 0 }}
    >
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
};

export default DotGrid;
