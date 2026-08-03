import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Competitive Dance Company Team | Dance For Joy, Brielle NJ",
  description:
    "Dance For Joy's competitive company team in Brielle, NJ — how auditions, rehearsals, competitions, and performances work alongside our regular weekly classes.",
};

export default function CompanyPage() {
  return (
    <div>
      <PageHeader
        title="Company Team"
        subtitle="Our competitive team, built into the everyday life of the studio rather than set apart from it."
        image={{
          src: "/images/company_dfj_2.jpg",
          alt: "Company dancers lined up in matching Dance For Joy jackets in the studio",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-16">

      <section className="mb-16">
        <h2 className="font-display text-2xl text-joy-pink mb-4">
          How It Works
        </h2>
        <div className="max-w-2xl space-y-4 text-joy-charcoal/90">
          <p>
            Company dancers take their regular weekly classes right alongside
            every other student at DFJ &mdash; there&rsquo;s no separate
            competitive-only class track. Rehearsals for competition
            choreography happen separately, on Fridays from 4&ndash;9pm, so
            technique training stays consistent for everyone in the studio,
            competitive and non-competitive dancers alike.
          </p>
          <p>
            Choreography for the season is set during a late-August
            intensive, before regular classes begin in September. From there,
            the team refines its pieces at Friday rehearsals throughout the
            year.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-joy-pink mb-4">
          Competitions &amp; Performances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-joy-blush p-6 bg-white">
            <h3 className="font-semibold text-joy-plum mb-3">
              Three Competitions a Season
            </h3>
            <ul className="space-y-2 text-sm text-joy-charcoal/80 list-disc list-inside">
              <li>Dance Xplosion Competition</li>
              <li>Backstage Dance Competition</li>
              <li>Journey Dance Competition</li>
            </ul>
            <p className="text-xs text-joy-charcoal/60 mt-3">
              The team also attends NYCDA as a convention experience &mdash;
              master classes and training alongside dancers from other
              studios.
            </p>
          </div>
          <div className="rounded-xl border border-joy-blush p-6 bg-white">
            <h3 className="font-semibold text-joy-plum mb-3">
              Four Performances on Stage
            </h3>
            <p className="text-sm text-joy-charcoal/80">
              The season culminates in performances at the Strand Theater in
              Lakewood, giving every company dancer real stage time beyond
              the competition floor.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl text-joy-pink mb-4">
          Auditions
        </h2>
        <p className="max-w-2xl mb-6 text-joy-charcoal/90">
          Company auditions are held each June for the following season.
          Reach out to us for specific placement requirements and this
          year&rsquo;s audition details.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-joy-pink px-8 py-3 text-white font-semibold hover:bg-joy-plum transition-colors"
        >
          Contact Us About Company
        </Link>
      </section>
      </div>
    </div>
  );
}
