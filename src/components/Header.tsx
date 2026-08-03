"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/classes", label: "Classes" },
  { href: "/schedule-enrollment", label: "Schedule & Enrollment" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-joy-cream/95 backdrop-blur border-b border-joy-blush">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/FinalLogoDFJTransparent-Black-background2.jpg"
            alt="Dance For Joy"
            width={661}
            height={582}
            priority
            className="h-16 w-auto md:h-20"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-body">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-joy-charcoal hover:text-joy-plum transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/schedule-enrollment#register"
            className="rounded-full bg-joy-pink px-4 py-2 text-sm font-semibold text-white hover:bg-joy-plum transition-colors whitespace-nowrap"
          >
            Register Now
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-joy-plum hover:bg-joy-blush transition-colors"
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-joy-blush bg-joy-cream px-6 py-4 flex flex-col gap-1 text-sm font-body">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-joy-charcoal hover:bg-joy-blush hover:text-joy-plum transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/schedule-enrollment#register"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-joy-pink px-5 py-3 text-center font-semibold text-white hover:bg-joy-plum transition-colors"
          >
            Register Now
          </Link>
        </nav>
      )}
    </header>
  );
}
