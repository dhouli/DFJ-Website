const ageGroups = [
  {
    range: "Ages 3–5",
    classes: [
      { name: "Pre-Ballet", desc: "TODO: rewrite from template copy" },
      { name: "Try Tap & Hip Hop", desc: "TODO: rewrite from template copy" },
    ],
  },
  {
    range: "Ages 6–10",
    classes: [
      { name: "Ballet", desc: "TODO" },
      { name: "Jazz", desc: "TODO" },
      { name: "Tap", desc: "TODO" },
      { name: "Acro", desc: "TODO" },
      { name: "Hip Hop", desc: "TODO" },
      { name: "Lyrical", desc: "TODO" },
    ],
  },
  {
    range: "Ages 10+",
    classes: [
      { name: "Contemporary", desc: "TODO" },
      { name: "Musical Theater", desc: "TODO" },
      { name: "Pointe", desc: "TODO" },
    ],
  },
];

export default function ClassesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-display text-4xl text-joy-plum mb-4">
        Dance Classes for All Ages and Levels
      </h1>
      <p className="mb-12 max-w-2xl">
        Discover a world of movement and expression at Dance For Joy. Browse
        classes by age group below.
      </p>

      {ageGroups.map((group) => (
        <div key={group.range} className="mb-14">
          <h2 className="font-display text-2xl text-joy-rose mb-6">
            {group.range}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {group.classes.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-joy-blush p-6 bg-white"
              >
                <h3 className="font-semibold mb-2">{c.name}</h3>
                <p className="text-sm text-joy-charcoal/80">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
