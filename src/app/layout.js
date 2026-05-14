import "./globals.css";
import VantaLoader from "./VantaLoader";

export const metadata = {
  title: "Paul Fomitchev",
  description: "Paul Fomitchev's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div
          id="vanta-bg"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
          }}
        />
        {children}
        <VantaLoader />
      </body>
    </html>
  );
}
