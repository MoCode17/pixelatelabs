import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const avanttTrial = localFont({
  src: [
    {
      path: "../public/fonts/Avantt/AvanttTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Avantt/AvanttTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avantt-trial",
});

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
        className={`${geistSans.variable} ${geistMono.variable} ${avanttTrial.variable} antialiased`}
      >
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
