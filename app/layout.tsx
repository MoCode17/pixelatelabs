import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixelate | Melbourne Web Design & Development Agency",
  description:
    "Award-winning web design and development agency in Melbourne. We create stunning, high-performance websites that convert visitors into customers. Transform your digital presence today.",
  openGraph: {
    title: "Pixelate | Melbourne Web Design & Development",
    description:
      "Award-winning web design and development agency in Melbourne. We create stunning, high-performance websites that convert visitors into customers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gray-400">{children}</div>
      </body>
    </html>
  );
}
