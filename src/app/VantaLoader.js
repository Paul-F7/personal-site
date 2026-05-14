"use client";

import Script from "next/script";
import { useState } from "react";

export default function VantaLoader() {
  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeReady(true)}
      />
      {threeReady && (
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.clouds.min.js"
          strategy="afterInteractive"
          onLoad={() => setVantaReady(true)}
        />
      )}
      {vantaReady && (
        <Script id="vanta-init" strategy="afterInteractive">
          {`
            (function () {
              var effect = window.VANTA.CLOUDS({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.0,
                scaleMobile: 1.0
              });

              // Force vanta to remeasure after the mobile URL bar settles
              setTimeout(function () { if (effect && effect.resize) effect.resize(); }, 200);
              window.addEventListener("resize", function () {
                if (effect && effect.resize) effect.resize();
              });
            })();
          `}
        </Script>
      )}
    </>
  );
}
