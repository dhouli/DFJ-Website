import Image from "next/image";

const shows = [
  {
    label: "Saturday Afternoon",
    href: "https://mediazilla.com/tgj0c96WK1",
    image: "/images/recital-2026-sat-am.jpg",
  },
  {
    label: "Saturday Evening",
    href: "https://mediazilla.com/SM3FySiY6e",
    image: "/images/recital-2026-sat-pm.jpg",
  },
  {
    label: "Sunday Afternoon",
    href: "https://mediazilla.com/4q3D9QT3NI",
    image: "/images/recital-2026-sun-am.jpg",
  },
  {
    label: "Sunday Evening",
    href: "https://mediazilla.com/FTW3ChJ7rb",
    image: "/images/recital-2026-sun-pm.jpg",
  },
];

export default function ShowHighlight() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {shows.map((show) => (
        <a
          key={show.label}
          href={show.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-video overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src={show.image}
            alt={`Dance For Joy 2026 Spring Recital — ${show.label} performance`}
            fill
            sizes="(min-width: 768px) 450px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-joy-plum/70 via-joy-plum/10 to-transparent transition-colors group-hover:from-joy-plum/80" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 translate-x-0.5 text-joy-pink"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 p-4">
            <span className="font-display text-lg text-white">
              {show.label}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
