"use client";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS2 from "vanta/dist/vanta.clouds2.min";

const fallbackBackground =
  "linear-gradient(180deg, #7bc7f2 0%, #bfe0f4 48%, #fbfaf5 100%)";

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS2({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          skyColor: 0x7bc7f2,
          cloudColor: 0xc9dcf0,
          lightColor: 0xffffff,
          texturePath: "/noise.png",
        })
      );
    }

    const canvas = myRef.current?.querySelector(".vanta-canvas");
    if (canvas) {
      canvas.style.opacity = "0.72";
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: fallbackBackground,
        zIndex: -1,
      }}
    />
  );
}
