import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Dance Classes in Brielle, NJ | Ballet, Tap, Jazz, Hip Hop & More",
  description:
    "Age-appropriate dance classes for ages 3 and up at Dance For Joy in Brielle, NJ — ballet, tap, jazz, hip hop, acro, lyrical, contemporary, and musical theater.",
};

const ageGroups = [
  {
    range: "Ages 3–5",
    image: {
      src: "/images/1EBA83F2-D9D9-444C-8F05-2F185C0CDD6F-scaled.jpeg",
      alt: "Pre-Ballet dancers in pink leotards at the barre",
    },
    classes: [
      {
        name: "Pre-Ballet",
        ages: "Ages 3–5",
        desc: "Little ones take their first steps into ballet through playful movement, imaginative storytelling, and gentle introductions to position and posture. It's less about perfect technique and more about coordination, listening skills, and building a lifelong love of dance.",
      },
      {
        name: "Try Tap & Hip Hop",
        ages: "Ages 3–4",
        desc: "A fun first taste of two styles in one class. Dancers explore basic tap rhythms and hip hop moves side by side, building coordination and confidence while discovering which styles excite them most.",
      },
    ],
  },
  {
    range: "Ages 6–10",
    image: {
      src: "/images/IMG_3970.jpg",
      alt: "Dancer stretching in an acro class",
    },
    classes: [
      {
        name: "Ballet",
        ages: "Ages 5+",
        desc: "The foundation for nearly every style we teach. Dancers build strength, posture, and technique at a pace that respects where they are, with pathways into pre-pointe and pointe work as they progress. Ballet is required before joining Jazz, Lyrical, or Contemporary.",
      },
      {
        name: "Jazz",
        ages: "Ages 6–18",
        desc: "Sharp, energetic choreography that blends technique with personality. Dancers build strength and musicality while learning to perform with confidence.",
      },
      {
        name: "Tap",
        ages: "Ages 5+",
        desc: "Rhythm, timing, and percussion — with your feet as the instrument. Dancers build coordination while learning to make music as they move.",
      },
      {
        name: "Hip Hop",
        ages: "All Ages",
        desc: "Street-style choreography set to music kids actually want to dance to. A high-energy class built around self-expression, rhythm, and having fun.",
      },
      {
        name: "Acro",
        ages: "Ages 6+",
        desc: "A gymnastics-based class focused on strength, flexibility, and balance — handstands, cartwheels, and tumbling taught safely and progressively. Acro is a non-performance class and doesn't require ballet.",
      },
      {
        name: "Lyrical",
        ages: "Ages 7+",
        desc: "Storytelling through movement. Dancers connect emotion, music, and technique, building on ballet and jazz fundamentals to dance with real expression. Ballet is required before joining Lyrical.",
      },
    ],
  },
  {
    range: "Ages 10+",
    image: null,
    classes: [
      {
        name: "Contemporary",
        ages: "Ages 10+",
        desc: "A mindful warm-up infused with classic modern dance exercises and yoga-based movement builds strength, mobility, and alignment, followed by improvisational exploration that deepens the connection between mind and body. Floor work develops efficiency, fluidity, and grounded movement quality, and class concludes with a dynamic phrase that brings it all together with clarity and authenticity. Ballet is required before joining Contemporary.",
      },
      {
        name: "Musical Theater",
        ages: "All Ages",
        desc: "Singing, dancing, and acting come together in a class built for kids who love to perform. Dancers explore character work and stage presence while preparing numbers from classic and contemporary shows.",
      },
      {
        name: "Pointe",
        ages: "By Instructor Placement",
        desc: "The next step for ballet dancers who've built the strength and technique to safely progress en pointe, working closely with our ballet faculty on placement, control, and artistry.",
      },
    ],
  },
];

export default function ClassesPage() {
  return (
    <div>
      <PageHeader
        title="Dance Classes for All Ages and Levels"
        subtitle="Discover a world of movement and expression at Dance For Joy."
        image={{
          src: "/images/picture10.jpg",
          alt: "Spacious studio with mirrored wall and viewing window",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-12 max-w-2xl">
        Browse classes by age group below. Looking for our competitive team?
        Learn more about{" "}
        <Link
          href="/company"
          className="text-joy-pink underline hover:text-joy-plum transition-colors"
        >
          Company
        </Link>
        .
      </p>

      {ageGroups.map((group) => (
        <div key={group.range} className="mb-14">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <h2 className="font-display text-2xl text-joy-pink">
              {group.range}
            </h2>
            {group.image && (
              <div className="relative w-full md:w-56 h-36 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={group.image.src}
                  alt={group.image.alt}
                  fill
                  sizes="(min-width: 768px) 224px, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {group.classes.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-joy-blush p-6 bg-white hover:border-joy-cyan transition-colors"
              >
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-xs uppercase tracking-wide text-joy-pink font-semibold mb-2">
                  {c.ages}
                </p>
                <p className="text-sm text-joy-charcoal/80">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
