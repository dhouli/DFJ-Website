import Image from "next/image";

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
        {/* TODO: pull real upcoming events (recitals, showcases, workshops) */}
        TODO: list upcoming recitals, showcases, and workshops.
      </p>

      <h2 className="font-display text-2xl text-joy-rose mb-6">
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
