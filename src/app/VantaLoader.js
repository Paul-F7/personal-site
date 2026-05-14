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
            window.VANTA.CLOUDS({
              el: "#vanta-bg",
              mouseControls: false,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00
            });
          `}
        </Script>
      )}
    </>
  );
}
