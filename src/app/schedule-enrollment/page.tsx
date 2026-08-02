export default function ScheduleEnrollmentPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-display text-4xl text-joy-plum mb-6">
        Schedule &amp; Enrollment
      </h1>
      <p className="max-w-2xl mb-12">
        Everything you need to enroll: current class schedule, key dates, and
        tuition. Consolidated here instead of split across separate pages.
      </p>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-joy-rose mb-4">
          Class Schedule
        </h2>
        {/* TODO: embed filterable schedule (by age/day) */}
        <p className="text-sm text-joy-charcoal/70">
          TODO: embed 2025–2026 class schedule here.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-joy-rose mb-4">
          Key Dates
        </h2>
        {/* TODO: embed dates-at-a-glance calendar */}
        <p className="text-sm text-joy-charcoal/70">
          TODO: embed dates-at-a-glance calendar here.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-joy-rose mb-4">Tuition</h2>
        {/* TODO: currently missing from old site — needs real pricing */}
        <p className="text-sm text-joy-charcoal/70">
          TODO: add tuition/pricing info — not currently published anywhere.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-joy-rose mb-4">
          Ready to Register?
        </h2>
        {/* TODO: confirm registration platform — embedded booking vs external link */}
        <a
          href="#"
          className="inline-block rounded-full bg-joy-rose px-8 py-3 text-white font-semibold hover:bg-joy-plum transition-colors"
        >
          Register for Classes
        </a>
      </section>
    </div>
  );
}
