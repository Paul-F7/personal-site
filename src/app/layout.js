import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import SplashCursor from "./components/SplashCursor";
import FlavorFlickScreenshot from "../../assets/flavorflick-screenshot.png";
import FeelifyScreenshot from "../../assets/feelify-screenshot.png";
import HandInHandScreenshot from "../../assets/handinhand-screenshot.png";
import SudokuScreenshot from "../../assets/sudokusolver-screenshot.png";
import KinKitchenScreenshot from "../../assets/kinkitchen-screenshot.png";

export const metadata = {
  title: "Paul Fomitchev",
  description: "Paul Fomitchev's personal portfolio",
};

const projectImages = [
  FlavorFlickScreenshot.src,
  FeelifyScreenshot.src,
  HandInHandScreenshot.src,
  SudokuScreenshot.src,
  KinKitchenScreenshot.src,
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {projectImages.map((src) => (
          <link key={src} rel="prefetch" href={src} as="image" />
        ))}
      </head>
      <body className={GeistMono.className}>
        <ThemeProvider>
          <SplashCursor />
          <main className="relative flex justify-center font-extralight min-h-screen selection:bg-yellow-200 dark:selection:bg-yellow-800">
            <div className="flex flex-col gap-4 w-full md:max-w-[540px] m-6 md:m-20 text-neutral-500 dark:text-neutral-400 md:mt-[60px]">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
