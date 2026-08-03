"use client";

import { useEffect, useRef, useState } from "react";
import { heroClips } from "@/data/heroClips";

export default function HeroVideo() {
  const [src, setSrc] = useState(heroClips[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const pick = heroClips[Math.floor(Math.random() * heroClips.length)];
    setSrc(pick);
  }, []);

  useEffect(() => {
    videoRef.current?.load();
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      aria-label="Dance For Joy recital highlight video"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
