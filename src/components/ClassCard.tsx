"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  ages: string;
  desc: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export default function ClassCard({
  name,
  ages,
  desc,
  image,
  imageAlt,
  imagePosition,
}: Props) {
  const [flipped, setFlipped] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Only mouse/trackpad devices report true hover support. Touch devices
    // (including iOS/Android) never get the mouseenter/mouseleave handlers
    // wired up below — otherwise mobile browsers treat the element as
    // "hoverable" and swallow the first tap's click, requiring a second tap
    // to actually flip the card.
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const clearHoverTimeout = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearHoverTimeout();
    hoverTimeout.current = setTimeout(() => setFlipped(true), 200);
  };

  const handleMouseLeave = () => {
    clearHoverTimeout();
    setFlipped(false);
  };

  return (
    <div
      className="[perspective:1200px]"
      onMouseEnter={canHover ? handleMouseEnter : undefined}
      onMouseLeave={canHover ? handleMouseLeave : undefined}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative h-64 w-full cursor-pointer transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden rounded-xl [backface-visibility:hidden]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-joy-plum/45 via-joy-plum/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-xl text-white">{name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-joy-cyan">
              {ages}
            </p>
          </div>
          <p className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-wide text-white/80">
            Tap for details
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 overflow-y-auto rounded-xl bg-joy-plum p-6 text-left text-white [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="mb-1 font-display text-xl">{name}</h3>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-joy-cyan">
            {ages}
          </p>
          <p className="text-sm leading-relaxed text-white/90">{desc}</p>
        </div>
      </div>
    </div>
  );
}
