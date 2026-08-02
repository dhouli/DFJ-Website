import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/classes", label: "Classes" },
  { href: "/schedule-enrollment", label: "Schedule & Enrollment" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-joy-cream/95 backdrop-blur border-b border-joy-blush">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/FinalLogoDFJTransparent-Black-background2.jpg"
            alt="Dance For Joy"
            width={661}
            height={582}
            priority
            className="h-14 w-auto"
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

        <Link
          href="/schedule-enrollment#register"
          className="rounded-full bg-joy-pink px-5 py-2 text-sm font-semibold text-white hover:bg-joy-plum transition-colors"
        >
          Register Now
        </Link>
      </div>
    </header>
  );
}
