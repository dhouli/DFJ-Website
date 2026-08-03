import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import InstagramFeed from "@/components/InstagramFeed";

const testimonials = [
  {
    quote:
      "We love Dance for Joy! Besides it being the BEST dance school, the owner Kim and her staff are the most caring, talented, genuine and warm hearted people in the business. I drive from Howell to Brielle so my daughter can be surrounded by great examples for dance and character.",
    name: "Diana Herring",
  },
  {
    quote:
      "My daughter has blossomed since joining Dance For Joy. The instructors are not only talented but also incredibly nurturing. Her confidence has soared, and she looks forward to every class!",
    name: "Emily R.",
  },
  {
    quote:
      "Making decisions for our children can be tough. We decided on DFJ after rave reviews, and we could not be more happy with how much our daughter enjoyed this year of dance.",
    name: "Heather Davide Carlotz",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative w-full h-[85vh] min-h-[560px] max-h-[780px] overflow-hidden">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-joy-plum/75 via-joy-plum/35 to-joy-plum/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
          <p className="font-body uppercase tracking-[0.2em] text-joy-cyan text-sm mb-4">
            Welcome to Dance For Joy
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-white mb-6 max-w-2xl leading-[1.05]">
            Inspiring Confidence, One Step at a Time
          </h1>
          <p className="max-w-xl text-lg text-white/90 mb-8">
            Join us in a journey of growth and expression through dance, where
            every step builds confidence and joy.
          </p>
          <div>
            <Link
              href="/schedule-enrollment#register"
              className="inline-block rounded-full bg-joy-pink px-8 py-3 text-white font-semibold hover:bg-white hover:text-joy-plum transition-colors"
            >
              Register for Classes
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 flex h-1.5">
          <div className="flex-1 bg-joy-pink" />
          <div className="flex-1 bg-joy-cyan" />
          <div className="flex-1 bg-joy-plum" />
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-joy-cyan/10 py-8">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-semibold text-joy-plum">
          <div>Brielle, NJ Studio</div>
          <div>Ages 3 &amp; Up</div>
          <div>Raised Marley Floors</div>
          <div>Family-Owned</div>
        </div>
      </section>

      {/* Trial class CTA */}
      <section className="bg-joy-pink py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-white mb-2">
              New to Dance For Joy?
            </h2>
            <p className="text-white/90 max-w-xl">
              Come see a class in action or ask us about trying one before
              you enroll &mdash; we&rsquo;ll help you find the right fit for
              your dancer.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-block rounded-full bg-white px-8 py-3 text-joy-pink font-semibold hover:bg-joy-plum hover:text-white transition-colors"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>

      {/* Why DFJ */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl text-joy-plum text-center mb-12">
          Why Choose Dance For Joy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Age-Appropriate Curriculum
            </h3>
            <p className="text-sm">
              Classes designed around each stage of development, so every
              dancer progresses at their own pace.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              State-of-the-Art Facility
            </h3>
            <p className="text-sm">
              Raised Marley floors and parent viewing windows for a safe,
              professional dance environment.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Caring Instructors</h3>
            <p className="text-sm">
              A dedicated team who know every dancer by name and are
              genuinely invested in their growth.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Kim */}
      <section className="bg-joy-blush py-20">
        <div className="mx-auto max-w-3xl px-6 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-center text-center sm:text-left">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto shadow-md shrink-0">
            <Image
              src="/images/Kim.jpg"
              alt="Kim Houli, owner of Dance For Joy, with her daughters"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-joy-plum mb-4">
              Meet Kim
            </h2>
            <p className="text-sm">
              Dance has been my passion for as long as I can remember, and
              taking the reins at Dance For Joy over 20 years ago let me build
              something around what I love most: watching kids grow, both as
              dancers and as people. There&rsquo;s nothing better than seeing
              a student walk in nervous for her first class and walk out a
              year later dancing with confidence she didn&rsquo;t know she
              had. Whether your dancer is here for one class a week or
              training with our company team, I want you to walk through our
              doors and feel like you found your community.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl text-joy-plum text-center mb-12">
          What Parents Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-joy-blush p-6 bg-white"
            >
              <p className="text-sm mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-semibold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-joy-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl text-joy-plum text-center mb-4">
            Follow Along
          </h2>
          <p className="text-center max-w-xl mx-auto mb-10">
            The best way to see what&rsquo;s happening at the studio day to
            day.
          </p>
          <InstagramFeed />
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl text-joy-plum mb-4">
          Join Our Dance Family Today!
        </h2>
        <p className="mb-8">
          Contact us to learn more about our classes or to enroll today.
        </p>
        <Link
          href="/schedule-enrollment#register"
          className="inline-block rounded-full bg-joy-pink px-8 py-3 text-white font-semibold hover:bg-joy-plum transition-colors"
        >
          Enroll Now
        </Link>
      </section>
    </div>
  );
}
