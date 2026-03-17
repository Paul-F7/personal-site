"use client";

import { useRef, useEffect } from "react";

export default function CrystalTrailCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let destroyed = false;
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const mouse = { x: -1000, y: -1000 };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // spawn a few particles per move
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          r: Math.random() * 12 + 4,
          alpha: Math.random() * 0.5 + 0.4,
          decay: Math.random() * 0.018 + 0.012,
        });
      }
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    const animate = () => {
      if (destroyed) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grad.addColorStop(0, `rgba(210, 150, 255, ${p.alpha})`);
        grad.addColorStop(0.4, `rgba(160, 80, 255, ${p.alpha * 0.6})`);
        grad.addColorStop(1, `rgba(100, 30, 200, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        p.alpha -= p.decay;
        p.r *= 1.03;
        if (p.alpha <= 0) particles.splice(i, 1);
      }

      // main glow at cursor
      if (mouse.x > 0) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 32);
        g.addColorStop(0, "rgba(220, 170, 255, 0.35)");
        g.addColorStop(0.5, "rgba(160, 80, 255, 0.12)");
        g.addColorStop(1, "rgba(100, 30, 200, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 32, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      destroyed = true;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
