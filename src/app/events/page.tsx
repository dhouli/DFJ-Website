import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import KeyDatesList from "@/components/KeyDatesList";

export const metadata: Metadata = {
  title: "Events & Key Dates | Dance For Joy, Brielle NJ",
  description:
    "Auditions, competitions, recitals, and studio closures at Dance For Joy in Brielle, NJ — all our key dates for the season in one place.",
};

const galleryPhotos = [
  { src: "/images/IMG_9057.jpg", alt: "Company dancers backstage in costume" },
  { src: "/images/IMG_8244.jpg", alt: "Tap class performing in reindeer costumes" },
  { src: "/images/IMG_4670.jpg", alt: "Contemporary dancers performing on stage" },
];

export default function EventsPage() {
  return (
    <div>
      <PageHeader
        title="Events"
        subtitle="Everything on the Dance For Joy calendar this season — closures, auditions, competitions, and our spring recital, all in one place."
        image={{
          src: "/images/IMG_0896-group-faces.jpg",
          alt: "The whole studio laughing together outdoors in matching flannel shirts",
          position: "center 85%",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-16">

      <section className="mb-20">
        <h2 className="font-display text-2xl text-joy-pink mb-6">
          Key Dates 2026&ndash;2027
        </h2>
        <KeyDatesList />
      </section>

      <section className="mb-20">
        <h2 className="font-display text-2xl text-joy-pink mb-4">
          Watch Our Dancers
        </h2>
        <p className="max-w-2xl mb-6">
          See Dance For Joy in action &mdash; real performances from our
          recitals and showcases.
        </p>
        <div className="rounded-xl border border-joy-blush overflow-hidden">
          <iframe
            src="https://vimeo.com/showcase/9248516/embed"
            width="100%"
            height="480"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Dance For Joy highlight collection"
          />
        </div>
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
    </div>
  );
}
