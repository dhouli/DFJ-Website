"use client";

import { useState } from "react";
import {
  keyDates,
  keyDateCategoryLabels,
  type KeyDateCategory,
} from "@/data/schedule";

const categoryStyles: Record<KeyDateCategory, string> = {
  milestone: "bg-joy-blush text-joy-plum",
  audition: "bg-joy-pink/15 text-joy-pink",
  competition: "bg-joy-plum/15 text-joy-plum",
  performance: "bg-joy-cyan/20 text-joy-plum",
  closure: "bg-joy-charcoal/10 text-joy-charcoal/70",
};

const categoryOrder: KeyDateCategory[] = [
  "milestone",
  "audition",
  "competition",
  "performance",
  "closure",
];

type Filter = "all" | KeyDateCategory;

export default function KeyDatesList() {
  const [filter, setFilter] = useState<Filter>("all");

  const visibleDates =
    filter === "all" ? keyDates : keyDates.filter((k) => k.category === filter);

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    ...categoryOrder.map((c) => ({ value: c, label: keyDateCategoryLabels[c] })),
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => {
          const active = filter === f.value;
          const chipStyle =
            f.value === "all"
              ? "bg-joy-plum text-white"
              : categoryStyles[f.value as KeyDateCategory];
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full border transition-colors ${
                active
                  ? `${chipStyle} border-transparent`
                  : "bg-transparent text-joy-charcoal/60 border-joy-blush hover:border-joy-plum hover:text-joy-plum"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {visibleDates.length === 0 ? (
        <p className="text-sm text-joy-charcoal/60 pl-6">
          No dates in this category.
        </p>
      ) : (
        <ol className="border-l-2 border-joy-cyan pl-6 space-y-5">
          {visibleDates.map((k) => (
            <li
              key={k.date + k.description}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
            >
              <p className="text-sm font-semibold text-joy-plum whitespace-nowrap">
                {k.date}
              </p>
              <span
                className={`text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${categoryStyles[k.category]}`}
              >
                {keyDateCategoryLabels[k.category]}
              </span>
              <p className="text-sm text-joy-charcoal/80 w-full">
                {k.description}
              </p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
