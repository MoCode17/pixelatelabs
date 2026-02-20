import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const avanttTrial = localFont({
  src: [
    {
      path: "../public/fonts/AvanttTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AvanttTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avantt-trial",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${outfit.variable} ${spaceMono.variable} ${avanttTrial.variable} antialiased`}
      >
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
