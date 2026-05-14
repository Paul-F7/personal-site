import "./globals.css";

export const metadata = {
  title: "Site",
  description: "Personal Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
