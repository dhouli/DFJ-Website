const instructors = [
  { name: "Kimberly Houli", role: "Artistic Director & Owner" },
  { name: "Jennifer and Jessica Hine", role: "Hip Hop Teachers" },
  { name: "Jessica Totaro", role: "Dance Teacher" },
  { name: "Dana Ingram", role: "Dance Teacher & Co-Company Director, A Step Above Dance Company" },
  { name: "Kathleen Pearlburg", role: "Dance Teacher" },
  { name: "Megan Theobald", role: "Dance Teacher" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-display text-4xl text-joy-plum mb-6">
        Empowering Dancers Through Joyful Movement
      </h1>
      <p className="max-w-2xl mb-16">
        {/* TODO: rewrite mission statement in DFJ's real voice, not template copy */}
        Our mission and vision, rewritten in Kim&rsquo;s own words.
      </p>

      <h2 className="font-display text-2xl text-joy-rose mb-8">
        Our Passionate Dance Educators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {instructors.map((i) => (
          <div key={i.name} className="text-center">
            {/* TODO: swap in real instructor photo */}
            <div className="w-32 h-32 mx-auto rounded-full bg-joy-blush mb-4" />
            <h3 className="font-semibold">{i.name}</h3>
            <p className="text-sm text-joy-charcoal/70">{i.role}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl text-joy-rose mb-6">
        Our Facility
      </h2>
      <p className="max-w-2xl mb-4">
        Raised Marley floors, parent viewing windows, and spacious studios
        designed for every dancer to move freely and safely.
      </p>
      {/* TODO: real facility photo grid from studio library */}
    </div>
  );
}
