import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
export const metadata = {
  title: "Paul Fomitchev",
  description: "Paul Fomitchev's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistMono.className}>
        <ThemeProvider>
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
