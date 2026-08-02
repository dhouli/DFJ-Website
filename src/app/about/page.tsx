import Image from "next/image";

const instructors = [
  { name: "Kimberly Houli", role: "Artistic Director & Owner", image: "/images/Kim.jpg" },
  {
    name: "Jennifer and Jessica Hine",
    role: "Hip Hop Teachers",
    image: "/images/JessJenn-Pic-crop.jpg",
  },
  { name: "Jessica Totaro", role: "Dance Teacher", image: "/images/Jess.jpg" },
  {
    name: "Dana Ingram",
    role: "Dance Teacher & Co-Company Director, A Step Above Dance Company",
    image: "/images/Dana.png",
  },
  {
    name: "Kathleen Pearlburg",
    role: "Dance Teacher",
    image: "/images/KathyHeadShot-crop.jpg",
  },
  { name: "Megan Theobald", role: "Dance Teacher", image: "/images/megan.jpg" },
];

const facilityPhotos = [
  { src: "/images/picture13.jpg", alt: "Dance studio with barre and framed photography" },
  { src: "/images/picture10.jpg", alt: "Spacious studio with mirrored wall and viewing window" },
  { src: "/images/picture16-1.jpg", alt: "Studio with barre and framed dance photography" },
  { src: "/images/picture15-scaled.jpg", alt: "Acro and tumbling room with mats and barre" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-display text-4xl text-joy-plum mb-6">
        Empowering Dancers Through Joyful Movement
      </h1>
      <p className="max-w-2xl mb-12 text-lg text-joy-charcoal/80">
        Building confidence, one step at a time, since we opened our doors in
        Brielle.
      </p>

      <section className="mb-20">
        <h2 className="font-display text-2xl text-joy-pink mb-6">
          Our Mission
        </h2>
        {/* Draft copy in Kim's voice, based on what we know about the studio —
            worth her personalizing with a real detail or anecdote if she
            wants it to feel even more authentic. */}
        <div className="max-w-2xl space-y-4 text-joy-charcoal/90">
          <p>
            At the heart of Dance For Joy is a simple idea: every child
            deserves a place where they can move, grow, and feel proud of who
            they&rsquo;re becoming. Since taking the reins, Kim has shaped
            Dance For Joy into a studio where technique matters, but so does
            the way a five-year-old feels walking into her first ballet
            class, or the way a teenager finds her voice through a solo she
            helped choreograph.
          </p>
          <p>
            We keep our classes age-appropriate on purpose &mdash; the music,
            the costumes, the choreography &mdash; because we believe
            confidence is built layer by layer, not rushed. Our instructors
            know every student by name, and our studio, with its raised
            Marley floors and parent viewing windows, is designed so families
            can be part of that journey every step of the way.
          </p>
          <p>
            Whether your dancer is taking her first Pre-Ballet class or
            preparing for competition with our company team, our goal is the
            same: help her fall in love with movement, and walk out a little
            more confident than she walked in.
          </p>
        </div>
      </section>

      <h2 className="font-display text-2xl text-joy-pink mb-8">
        Our Passionate Dance Educators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {instructors.map((i) => (
          <div key={i.name} className="text-center">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src={i.image}
                alt={i.name}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">{i.name}</h3>
            <p className="text-sm text-joy-charcoal/70">{i.role}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl text-joy-pink mb-6">
        Our Facility
      </h2>
      <p className="max-w-2xl mb-8">
        Raised Marley floors, parent viewing windows, and spacious studios
        designed for every dancer to move freely and safely.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {facilityPhotos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-square rounded-xl overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
