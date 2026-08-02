import ScheduleTabs from "@/components/ScheduleTabs";
import { tuitionRates, tuitionPolicies, keyDates } from "@/data/schedule";

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

      <section className="mb-20">
        <h2 className="font-display text-2xl text-joy-pink mb-6">
          Class Schedule
        </h2>
        <ScheduleTabs />
      </section>

      <section className="mb-20">
        <h2 className="font-display text-2xl text-joy-pink mb-4">Tuition</h2>
        <p className="text-sm text-joy-charcoal/70 mb-6 max-w-2xl">
          Monthly tuition is billed in 9 equal payments from September through
          May, based on a 29-week class schedule, per student.
        </p>
        <div className="overflow-x-auto rounded-xl border border-joy-blush">
          <table className="w-full text-sm">
            <thead className="bg-joy-blush text-joy-plum">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">
                  Class Length
                </th>
                <th className="text-left px-4 py-3 font-semibold">
                  Monthly Tuition
                </th>
              </tr>
            </thead>
            <tbody>
              {tuitionRates.map((rate, i) => (
                <tr
                  key={rate.duration}
                  className={i % 2 === 1 ? "bg-joy-cream" : "bg-white"}
                >
                  <td className="px-4 py-2.5 border-t border-joy-blush">
                    {rate.duration}
                  </td>
                  <td className="px-4 py-2.5 border-t border-joy-blush font-semibold text-joy-plum">
                    {rate.monthly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-xl bg-joy-blush p-6">
          <h3 className="font-semibold text-joy-plum mb-3">Good to Know</h3>
          <ul className="space-y-2 text-sm text-joy-charcoal/80 list-disc list-inside">
            {tuitionPolicies.map((policy) => (
              <li key={policy}>{policy}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="font-display text-2xl text-joy-pink mb-6">
          Key Dates 2026&ndash;2027
        </h2>
        <ol className="border-l-2 border-joy-cyan pl-6 space-y-6">
          {keyDates.map((k) => (
            <li key={k.date + k.description}>
              <p className="text-sm font-semibold text-joy-plum">{k.date}</p>
              <p className="text-sm text-joy-charcoal/80">{k.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="font-display text-2xl text-joy-pink mb-4">
          Ready to Register?
        </h2>
        {/* TODO: confirm registration platform — embedded booking vs external link */}
        <a
          href="#"
          className="inline-block rounded-full bg-joy-pink px-8 py-3 text-white font-semibold hover:bg-joy-plum transition-colors"
        >
          Register for Classes
        </a>
      </section>
    </div>
  );
}
