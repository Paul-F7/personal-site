"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS2 from "vanta/dist/vanta.clouds2.min";

export default function VantaBackground() {
  const myRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!myRef.current || effectRef.current) return;

    effectRef.current = CLOUDS2({
      el: myRef.current,
      THREE: THREE,
      mouseControls: false,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      skyColor: 0xacff,
      cloudColor: 0x6088d4,
      speed: 0.85,
      texturePath: "/noise.png",
    });

    const handleResize = () => {
      if (effectRef.current?.resize) effectRef.current.resize();
    };
    const resizeTimer = window.setTimeout(handleResize, 200);
    window.addEventListener("resize", handleResize);

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={myRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100dvh",
        zIndex: -1,
      }}
    />
  );
}
