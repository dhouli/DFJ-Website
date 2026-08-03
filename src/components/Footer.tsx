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
            <li><Link href="/dress-code">Dress Code</Link></li>
            <li><Link href="/company">Company Team</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li><Link href="/#testimonials">Testimonials</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/danceforjoynj/"
              target="_blank"
              rel="noreferrer"
              aria-label="Dance For Joy on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-joy-cyan transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/danceforjoynj/"
              target="_blank"
              rel="noreferrer"
              aria-label="Dance For Joy on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-joy-cyan transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25A3.25 3.25 0 1 1 12 8.75a3.25 3.25 0 0 1 0 6.5ZM17.25 6.5a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34Z" />
              </svg>
            </a>
            <a
              href="https://vimeo.com/danceforjoynj"
              target="_blank"
              rel="noreferrer"
              aria-label="Dance For Joy on Vimeo"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-joy-cyan transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.322 19.16 12.928 21 10.97 21c-1.214 0-2.24-1.12-3.078-3.36-.56-2.052-1.12-4.104-1.68-6.156-.623-2.24-1.29-3.36-2.005-3.36-.156 0-.7.328-1.634.98l-.98-1.26c1.026-.902 2.038-1.804 3.036-2.706C5.94 4.026 7.155 3.14 7.965 3.06c1.867-.18 3.017 1.098 3.45 3.834.467 2.95.79 4.785.965 5.505.537 2.44 1.128 3.66 1.774 3.66.502 0 1.256-.795 2.262-2.385 1.005-1.59 1.543-2.8 1.615-3.63.144-1.374-.397-2.062-1.615-2.062-.575 0-1.167.132-1.774.394 1.178-3.86 3.428-5.736 6.75-5.63 2.464.075 3.625 1.674 3.485 4.796z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/user/DanceForJoyNJ"
              target="_blank"
              rel="noreferrer"
              aria-label="Dance For Joy on YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-joy-cyan transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.09 0 12 0 12s0 3.91.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.91 24 12 24 12s0-3.91-.5-5.81ZM9.6 15.5v-7l6.4 3.5-6.4 3.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-xs">
        © {new Date().getFullYear()} Dance For Joy. All rights reserved.
      </div>
    </footer>
  );
}
