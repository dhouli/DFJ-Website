"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string | null;
  bio?: string;
};

export default function InstructorCard({ name, role, image, bio }: Props) {
  const [flipped, setFlipped] = useState(false);
  const hasBio = Boolean(bio);

  return (
    <div
      className="[perspective:1200px]"
      onMouseEnter={() => hasBio && setFlipped(true)}
      onMouseLeave={() => hasBio && setFlipped(false)}
      onClick={() => hasBio && setFlipped((f) => !f)}
    >
      <div
        className={`relative h-80 w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          hasBio ? "cursor-pointer" : ""
        }`}
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-joy-blush bg-white p-6 text-center [backface-visibility:hidden]">
          <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                sizes="112px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-joy-blush">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-12 w-12 text-joy-plum/40"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-joy-charcoal/70">{role}</p>
          {!image && (
            <p className="mt-1 text-xs text-joy-pink">Photo coming soon</p>
          )}
          {hasBio && (
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-joy-cyan">
              Hover or tap to read more
            </p>
          )}
        </div>

        {/* Back */}
        {hasBio && (
          <div
            className="absolute inset-0 overflow-y-auto rounded-xl bg-joy-plum p-6 text-left text-white [backface-visibility:hidden]"
            style={{ transform: "rotateY(180deg)" }}
          >
            <h3 className="mb-1 font-semibold">{name}</h3>
            <p className="mb-2 text-xs text-joy-cyan">{role}</p>
            <p className="text-xs leading-relaxed text-white/90">{bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}
