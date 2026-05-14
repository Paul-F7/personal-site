import "./globals.css";
import VantaBackground from "../components/VantaBackground";

export const metadata = {
  title: "Site",
  description: "Personal Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <VantaBackground />
        {children}
      </body>
    </html>
  );
}
