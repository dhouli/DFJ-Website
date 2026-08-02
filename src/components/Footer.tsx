import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-joy-plum text-joy-cream border-t-4 border-joy-cyan">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-display text-lg mb-3">Dance For Joy</h3>
          <p>1025 NJ-70 #2, Brielle, NJ 08730</p>
          <p>(732) 223-5336</p>
          <p>danceforjoynj@gmail.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="/classes">Classes</Link></li>
            <li><Link href="/schedule-enrollment">Schedule & Enrollment</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <ul className="space-y-2">
            <li><a href="https://www.facebook.com/danceforjoynj/" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/danceforjoynj/" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-xs">
        © {new Date().getFullYear()} Dance For Joy. All rights reserved.
      </div>
    </footer>
  );
}
