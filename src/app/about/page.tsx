import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import InstructorCard from "@/components/InstructorCard";

export const metadata: Metadata = {
  title: "About Dance For Joy | Dance Studio in Brielle, NJ",
  description:
    "Meet the instructors and see the studio behind Dance For Joy, a warm and welcoming dance school in Brielle, NJ with raised Marley floors and parent viewing windows.",
};

const instructors: {
  name: string;
  role: string;
  image: string | null;
  bio?: string;
}[] = [
  {
    name: "Kimberly Houli",
    role: "Artistic Director & Owner",
    image: "/images/Kim.jpg",
    bio: "Owner of Dance For Joy for over 20 years, Kim's passion for dance goes back as long as she can remember, and taking the reins at the studio let her build something around what she loves most: watching kids grow, both as dancers and as people. There's nothing better than seeing a student walk in nervous for her first class and walk out a year later dancing with confidence she didn't know she had. Whether your dancer is here for one class a week or training with the company team, Kim wants you to walk through the doors and feel like you found your community.",
  },
  {
    name: "Jennifer and Jessica Hine",
    role: "Hip Hop Teachers",
    image: "/images/JessJenn-Pic-crop.jpg",
  },
  {
    name: "Jessica Totaro",
    role: "Contemporary Teacher",
    image: "/images/JessTotaro-headshot.jpg",
    bio: "Founder and Artistic Director of the Movement Arts Project, Jessica's movement vocabulary is rooted in Limón modern technique and enriched by the hip hop foundations of breaking, locking, house, and popping. Her choreography has been presented at New York City Center, Dixon Place, Dance New Jersey's DOTL and Show Up & Dance, and the Liberty Hall Dance Festival. She holds a BFA in Dance from Rutgers University's Mason Gross School of the Arts and has taught and choreographed professionally for over a decade. Her teaching philosophy centers on guidance rather than dictation, empowering dancers to access their creativity and communicate authentically through movement.",
  },
  {
    name: "Dana Ingram",
    role: "Dance Teacher & Co-Company Director, A Step Above Dance Company",
    image: "/images/Dana.png",
  },
  {
    name: "Kathleen Pearlberg",
    role: "Ballet, Pointe & Theatre Dance Teacher",
    image: "/images/KathyHeadShot-crop.jpg",
    bio: "Ms. Kathy has been a classical ballet, pointe, and theatre dance teacher for over 30 years and is in her 13th year at Dance For Joy. A former professional dancer with the New Jersey Ballet Company for 16 years, she appeared in NJ Ballet productions of The Nutcracker and Swan Lake at Papermill Playhouse, as well as original works by Edward Villella, Jay Norman, George Tomal, and Joseph Carow, and danced George Balanchine's Allegro Brilliante, Donizetti Variations, Pas de Dix, and other full-length ballets. She has performed at Algonquin Arts Theatre in Joseph and the Amazing Technicolor Dreamcoat, Annie Get Your Gun, Spamalot, Damn Yankees, and Kiss Me Kate, with choreography credits including Joseph and the Amazing Technicolor Dreamcoat, Peter Pan, Jesus Christ Superstar, Fiddler on the Roof, The Music Man, How to Succeed in Business, Footloose, 9 to 5, The Hunchback of Notre Dame, and Mean Girls.",
  },
  { name: "Miss Colleen", role: "Ballet, Jazz & Tap Teacher", image: null },
  { name: "Miss Laraine", role: "Unique Kids Teacher", image: null },
  {
    name: "Sara Martorana",
    role: "Tap & Jazz Teacher",
    image: "/images/SaraMartorana-headshot.jpg",
    bio: "Dancing since the age of two, Sara trained extensively across a variety of styles, competing at regional and national competitions and attending top industry conventions, where she learned from renowned teachers and choreographers including Frank Hatchett, Sheila Barker, Mike Minery, and Jason Parsons. A career highlight was performing in Al Blackstone's award-winning piece Brown Eyed Girl. For more than 20 years she has shared her passion with students, believing dance is about more than technique — it's about building confidence, discipline, creativity, and lasting friendships.",
  },
  {
    name: "Emily Penkethman",
    role: "Ballet & Jazz Teacher",
    image: "/images/EmilyPenkethman-headshot.jpg",
    bio: "Emily began dancing at Dance For Joy, making her return as an instructor a truly rewarding full-circle experience. She earned her BFA in Dance with a concentration in Dance Education from Rutgers University's Mason Gross School of the Arts, where she performed works by faculty, guest artists, and fellow students while choreographing original works for stage and film. She's also a Licensed Massage Therapist, bringing her knowledge of anatomy, kinesiology, and body mechanics into the studio to promote healthy movement and injury prevention.",
  },
  { name: "Miss Olivia", role: "Ballet & Lyrical Teacher", image: null },
  { name: "Miss Libby", role: "Ballet Teacher", image: null },
  { name: "Mr. A.J.", role: "Acro Teacher", image: null },
];

const lifeAtDfjPhotos = [
  {
    src: "/images/mcr-40-scaled-e1729342248287.jpg",
    alt: "Company dancers posing together outside the ornate Asbury Park Carousel House",
    feature: true,
  },
  {
    src: "/images/dfjcomp102625-13-grid.jpg",
    alt: "Company dancers smiling together in matching black leotards outdoors",
    tall: true,
  },
  {
    src: "/images/company_dfj_2.jpg",
    alt: "Company dancers lined up in matching Dance For Joy jackets in the studio",
  },
  {
    src: "/images/IMG_3432.jpg",
    alt: "Dancers in sparkling teal costumes performing on stage under a flowing fabric prop",
  },
  {
    src: "/images/Slider2-1.jpg",
    alt: "Two dancers on the beach reaching toward the sky, framed by a gold picture frame prop",
  },
  {
    src: "/images/28235104_10109309685432649_1530150601109565223_o.jpg",
    alt: "A dancer striking a dramatic pose in front of a large bird mural",
  },
  {
    src: "/images/contemporary.jpg",
    alt: "Four contemporary dancers in flowing skirts lifting and supporting each other on a dark stage",
  },
];

const facilityPhotos = [
  { src: "/images/picture2-1.jpg", alt: "Dance For Joy storefront and studio entrance in Brielle" },
  { src: "/images/picture13.jpg", alt: "Dance studio with barre and framed photography" },
  { src: "/images/picture10.jpg", alt: "Spacious studio with mirrored wall and viewing window" },
  { src: "/images/picture16-1.jpg", alt: "Studio with barre and framed dance photography" },
  { src: "/images/picture15-scaled.jpg", alt: "Acro and tumbling room with mats and barre" },
  { src: "/images/picture12.jpg", alt: "Studio with ballet barre, mirrors, and costumes hanging on the wall" },
  { src: "/images/picture14.jpg", alt: "Sunlit yellow studio with barre and framed dance photography" },
  { src: "/images/picture5.jpg", alt: "Hallway leading into the studio, lined with photos and show posters" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="Empowering Dancers Through Joyful Movement"
        subtitle="Building confidence, one step at a time, since we opened our doors in Brielle."
        image={{
          src: "/images/IMG_3432.jpg",
          alt: "Dancers in sparkling teal costumes performing on stage under a flowing fabric prop",
          position: "center 80%",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-16">

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
          <InstructorCard
            key={i.name}
            name={i.name}
            role={i.role}
            image={i.image}
            bio={i.bio}
          />
        ))}
      </div>

      <h2 className="font-display text-2xl text-joy-pink mb-6">
        Capturing the Joy of Dance
      </h2>
      <p className="max-w-2xl mb-8">
        From the studio to the stage to the beach at sunrise, these are the
        moments that make Dance For Joy what it is.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[200px] mb-20">
        {lifeAtDfjPhotos.map((photo) => (
          <div
            key={photo.src}
            className={`relative rounded-xl overflow-hidden ${
              photo.feature
                ? "col-span-2 row-span-2 md:col-span-4"
                : photo.tall
                  ? "row-span-2 md:col-span-2"
                  : ""
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={
                photo.feature
                  ? "100vw"
                  : "(min-width: 768px) 50vw, 100vw"
              }
              className="object-cover"
            />
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
    </div>
  );
}
