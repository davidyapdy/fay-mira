import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | UX Designer",
  description: "UX Designer crafting thoughtful digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
