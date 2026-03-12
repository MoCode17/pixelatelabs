"use client";

import { useState } from "react";
import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  showUrl?: string;
  className?: string;
}

export default function BrowserMockup({
  src,
  alt,
  showUrl,
  className = "",
}: BrowserMockupProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`rounded-xl overflow-hidden bg-[#1a1a2e] ${className}`}>
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-snow border-b border-dark-lighter">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        {showUrl && (
          <div className="flex-1 ml-3">
            <div className="bg-surface/20 rounded-full px-3 py-1 text-[10px] font-space-mono text-black truncate max-w-xs">
              {showUrl}
            </div>
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="relative w-full aspect-[16/9]">
        {hasError ? (
          <div className="absolute inset-0 bg-gradient-to-br from-midnight to-surface flex items-center justify-center">
            <Image
              src="/images/PixelateLogoOrange.svg"
              alt="Pixelate"
              width={120}
              height={30}
              className="opacity-30"
            />
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}
