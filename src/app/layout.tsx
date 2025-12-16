import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Nagvanshi - Full Stack Developer & SaaS Product Builder",
  description: "Portfolio of Ashish Nagvanshi, a full-stack developer and SaaS product builder based in Jaipur, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-dark-bg text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}