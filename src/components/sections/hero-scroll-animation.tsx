"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";

const frameCount = 133;

function framePath(index: number) {
  return `/hero-animation/ezgif-frame-${String(index).padStart(3, "0")}.webp`;
}

interface HeroScrollAnimationProps {
  frame: number;
}

export function HeroScrollAnimation({ frame }: HeroScrollAnimationProps) {
  const frames = useMemo(() => Array.from({ length: frameCount }, (_, index) => framePath(index + 1)), []);

  useEffect(() => {
    // 1. Preload first 20 frames immediately for instant paint on load
    frames.slice(0, 20).forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    // 2. Preload the remaining frames in a background timeout to avoid blocking page load
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        window.requestIdleCallback(() => {
          frames.slice(20).forEach((src) => {
            const img = new window.Image();
            img.src = src;
          });
        });
      } else {
        frames.slice(20).forEach((src) => {
          const img = new window.Image();
          img.src = src;
        });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [frames]);

  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none">
      <Image
        src={frames[frame - 1]}
        alt="Animated dental clinic and aesthetic care visual background"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-top"
      />
    </div>
  );
}
