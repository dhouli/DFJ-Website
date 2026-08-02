import Image from "next/image";
import { keyDates } from "@/data/schedule";

const galleryPhotos = [
  { src: "/images/IMG_9057.jpg", alt: "Company dancers backstage in costume" },
  { src: "/images/IMG_8244.jpg", alt: "Tap class performing in reindeer costumes" },
  { src: "/images/IMG_4670.jpg", alt: "Contemporary dancers performing on stage" },
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-display text-4xl text-joy-plum mb-6">Events</h1>
      <p className="max-w-2xl mb-12">
        Everything on the Dance For Joy calendar this season &mdash;
        closures, auditions, competitions, and our spring recital &mdash; all
        in one chronological place.
      </p>

      <section className="mb-20">
        <h2 className="font-display text-2xl text-joy-pink mb-6">
          Key Dates 2026&ndash;2027
        </h2>
        <ol className="border-l-2 border-joy-cyan pl-6 space-y-6">
          {keyDates.map((k) => (
            <li key={k.date + k.description}>
              <p className="text-sm font-semibold text-joy-plum">{k.date}</p>
              <p className="text-sm text-joy-charcoal/80">{k.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <h2 className="font-display text-2xl text-joy-pink mb-6">
        Recent Recitals &amp; Showcases
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {galleryPhotos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
