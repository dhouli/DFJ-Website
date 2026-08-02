const testimonials = [
  {
    quote:
      "We love Dance for Joy! Besides it being the BEST dance school, the owner Kim and her staff are the most caring, talented, genuine and warm hearted people in the business. I drive from Howell to Brielle so my daughter can be surrounded by great examples for dance and character.",
    name: "Diana Herring",
    detail: "TODO: add child's class/age",
  },
  {
    quote:
      "My daughter has blossomed since joining Dance For Joy. The instructors are not only talented but also incredibly nurturing. Her confidence has soared, and she looks forward to every class!",
    name: "Emily R.",
    detail: "TODO: add child's class/age",
  },
  {
    quote:
      "Making decisions for our children can be tough. We decided on DFJ after rave reviews, and we could not be more happy with how much our daughter enjoyed this year of dance.",
    name: "Heather Davide Carlotz",
    detail: "TODO: add child's class/age",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-display text-4xl text-joy-plum mb-12">
        What Parents Are Saying
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-xl border border-joy-blush p-6 bg-white"
          >
            <p className="text-sm mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
            <p className="font-semibold text-sm">{t.name}</p>
            <p className="text-xs text-joy-charcoal/60">{t.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
