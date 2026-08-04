import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ClassCard from "@/components/ClassCard";

export const metadata: Metadata = {
  title: "Dance Classes in Brielle, NJ | Ballet, Tap, Jazz, Hip Hop & More",
  description:
    "Age-appropriate dance classes for ages 3 and up at Dance For Joy in Brielle, NJ — ballet, tap, jazz, hip hop, acro, lyrical, and contemporary.",
};

const ageGroups = [
  {
    range: "Ages 3–5",
    classes: [
      {
        name: "Pre-Ballet",
        ages: "Ages 3–5",
        desc: "Little ones take their first steps into ballet through playful movement, imaginative storytelling, and gentle introductions to position and posture. It's less about perfect technique and more about coordination, listening skills, and building a lifelong love of dance.",
        image: {
          src: "/images/dfjcomp102625-60.jpg",
          alt: "Young dancer striking a graceful pose outdoors at golden hour",
          position: "center 25%",
        },
      },
    ],
  },
  {
    range: "Ages 6–10",
    classes: [
      {
        name: "Ballet",
        ages: "Ages 5+",
        desc: "The foundation for nearly every style we teach. Dancers build strength, posture, and technique at a pace that respects where they are, with pathways into pre-pointe and pointe work as they progress. Ballet is required before joining Jazz, Lyrical, or Contemporary.",
        image: {
          src: "/images/dfjcomp102625-66.jpg",
          alt: "Dancers stretching in a dramatic golden-hour lunge pose outdoors",
          position: "center 30%",
        },
      },
      {
        name: "Jazz",
        ages: "Ages 6–18",
        desc: "Sharp, energetic choreography that blends technique with personality. Dancers build strength and musicality while learning to perform with confidence.",
        image: {
          src: "/images/dfjcomp102625-7.jpg",
          alt: "Company dancers striking dynamic jazz poses together outdoors",
          position: "center 70%",
        },
      },
      {
        name: "Tap",
        ages: "Ages 5+",
        desc: "Rhythm, timing, and percussion — with your feet as the instrument. Dancers build coordination while learning to make music as they move.",
        image: {
          src: "/images/dfjcomp102625-49.jpg",
          alt: "Dancer in a sharp lunge with palm outstretched outdoors",
          position: "center 55%",
        },
      },
      {
        name: "Hip Hop",
        ages: "All Ages",
        desc: "Street-style choreography set to music kids actually want to dance to. A high-energy class built around self-expression, rhythm, and having fun.",
        image: {
          src: "/images/dfjcomp102625-64.jpg",
          alt: "Two dancers striking a bold, attitude-filled walking pose outdoors",
          position: "center 50%",
        },
      },
      {
        name: "Acro",
        ages: "Ages 6+",
        desc: "A gymnastics-based class focused on strength, flexibility, and balance — handstands, cartwheels, and tumbling taught safely and progressively. Acro is a non-performance class and doesn't require ballet.",
        image: {
          src: "/images/dfjcomp102625-45.jpg",
          alt: "Dancer performing a handstand on a tree branch at golden hour",
          position: "center 30%",
        },
      },
      {
        name: "Lyrical",
        ages: "Ages 7+",
        desc: "Storytelling through movement. Dancers connect emotion, music, and technique, building on ballet and jazz fundamentals to dance with real expression. Ballet is required before joining Lyrical.",
        image: {
          src: "/images/dfjcomp102625-55.jpg",
          alt: "Dancer in a flowing, emotive pose with hair caught in motion",
          position: "center 32%",
        },
      },
    ],
  },
  {
    range: "Ages 10+",
    classes: [
      {
        name: "Contemporary",
        ages: "Ages 10+",
        desc: "A mindful warm-up infused with classic modern dance exercises and yoga-based movement builds strength, mobility, and alignment, followed by improvisational exploration that deepens the connection between mind and body. Floor work develops efficiency, fluidity, and grounded movement quality, and class concludes with a dynamic phrase that brings it all together with clarity and authenticity. Ballet is required before joining Contemporary.",
        image: {
          src: "/images/dfjcomp102625-53.jpg",
          alt: "Dancer in an intense, mindful reaching pose outdoors",
          position: "center 25%",
        },
      },
      {
        name: "Pointe",
        ages: "By Instructor Placement",
        desc: "The next step for ballet dancers who've built the strength and technique to safely progress en pointe, working closely with our ballet faculty on placement, control, and artistry.",
        image: {
          src: "/images/dfjcomp102625-58.jpg",
          alt: "Dancer reaching gracefully with arm extended outdoors",
          position: "center 20%",
        },
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
        Browse classes by age group below. Tap or hover any class for the
        full details. Looking for our competitive team? Learn more about{" "}
        <Link
          href="/company"
          className="text-joy-pink underline hover:text-joy-plum transition-colors"
        >
          Company
        </Link>
        .
      </p>

      {ageGroups.map((group) => (
        <div key={group.range} className="mb-16">
          <h2 className="mb-6 font-display text-3xl text-joy-pink">
            {group.range}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {group.classes.map((c) => (
              <ClassCard
                key={c.name}
                name={c.name}
                ages={c.ages}
                desc={c.desc}
                image={c.image.src}
                imageAlt={c.image.alt}
                imagePosition={c.image.position}
              />
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
