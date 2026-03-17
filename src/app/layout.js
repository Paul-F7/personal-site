import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import ThemeProvider from "./components/ThemeProvider";
import SplashCursor from "./components/SplashCursor";

export const metadata = {
  title: "Paul Fomitchev",
  description: "Paul Fomitchev's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider>
          <SplashCursor />
          <main className="relative flex justify-center font-extralight min-h-screen selection:bg-yellow-200 dark:selection:bg-yellow-800">
            <div className="flex flex-col gap-4 w-full md:max-w-[500px] m-6 md:m-20 text-neutral-500 dark:text-neutral-400 md:mt-[60px]">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
