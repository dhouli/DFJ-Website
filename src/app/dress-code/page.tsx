import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { dressCode, dressCodeNotes } from "@/data/dressCode";

export const metadata: Metadata = {
  title: "Dress Code | Dance For Joy, Brielle NJ",
  description:
    "What to wear to class at Dance For Joy in Brielle, NJ — dress code requirements by class type, from Pre-Ballet through Company.",
};

export default function DressCodePage() {
  return (
    <div>
      <PageHeader
        title="Dress Code"
        subtitle="What to wear for each class, so dancers arrive ready to move."
      />
      <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-12 max-w-2xl text-sm text-joy-charcoal/70">
        Required items are listed first, with optional extras below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {dressCode.map((entry) => (
          <div
            key={entry.style}
            className="rounded-xl border border-joy-blush p-6 bg-white"
          >
            <h2 className="font-display text-lg text-joy-pink mb-3">
              {entry.style}
            </h2>
            <ul className="space-y-1.5 text-sm text-joy-charcoal/90 list-disc list-inside mb-3">
              {entry.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
            {entry.optional && (
              <>
                <p className="text-xs uppercase tracking-wide text-joy-charcoal/50 font-semibold mb-1.5">
                  Optional
                </p>
                <ul className="space-y-1.5 text-sm text-joy-charcoal/70 list-disc list-inside">
                  {entry.optional.map((opt) => (
                    <li key={opt}>{opt}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-joy-blush p-6">
        <h2 className="font-semibold text-joy-plum mb-3">Good to Know</h2>
        <ul className="space-y-2 text-sm text-joy-charcoal/80 list-disc list-inside">
          {dressCodeNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}
