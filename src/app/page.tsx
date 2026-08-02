import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <p className="font-body uppercase tracking-widest text-joy-rose text-sm mb-4">
            Welcome to Dance For Joy
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-joy-plum mb-6">
            Inspiring Confidence, One Step at a Time
          </h1>
          <p className="max-w-xl mx-auto md:mx-0 text-lg mb-8">
            Join us in a journey of growth and expression through dance, where
            every step builds confidence and joy.
          </p>
          <Link
            href="/schedule-enrollment"
            className="inline-block rounded-full bg-joy-rose px-8 py-3 text-white font-semibold hover:bg-joy-plum transition-colors"
          >
            Register for Classes
          </Link>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/contemporary.jpg"
            alt="Dance For Joy dancers performing on stage"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-joy-blush py-8">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-semibold text-joy-plum">
          <div>Brielle, NJ Studio</div>
          <div>Ages 3 &amp; Up</div>
          <div>Raised Marley Floors</div>
          <div>Family-Owned</div>
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
              {/* TODO: replace with Kim's real founder note */}
              A short, personal note from Kim about why she started Dance For
              Joy and what she wants every family to feel walking through the
              door.
            </p>
          </div>
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
          href="/schedule-enrollment"
          className="inline-block rounded-full bg-joy-rose px-8 py-3 text-white font-semibold hover:bg-joy-plum transition-colors"
        >
          Enroll Now
        </Link>
      </section>
    </div>
  );
}
