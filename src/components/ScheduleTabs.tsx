"use client";

import { useState } from "react";
import { weeklySchedule } from "@/data/schedule";

export default function ScheduleTabs() {
  const [activeDay, setActiveDay] = useState(weeklySchedule[0].day);
  const day = weeklySchedule.find((d) => d.day === activeDay) ?? weeklySchedule[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {weeklySchedule.map((d) => (
          <button
            key={d.day}
            type="button"
            onClick={() => setActiveDay(d.day)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              activeDay === d.day
                ? "bg-joy-pink text-white"
                : "bg-joy-blush text-joy-plum hover:bg-joy-cyan/20"
            }`}
          >
            {d.day}
          </button>
        ))}
      </div>

      {day.note && (
        <p className="mb-6 rounded-xl bg-joy-blush p-4 text-sm text-joy-charcoal/80">
          {day.note}
        </p>
      )}

      {day.studios.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {day.studios.map((studio) => (
            <div
              key={studio.studio}
              className="rounded-xl border border-joy-blush bg-white p-5"
            >
              <h3 className="font-display text-lg text-joy-pink mb-4">
                {studio.studio}
              </h3>
              <ul className="space-y-3">
                {studio.classes.map((c) => (
                  <li
                    key={c.name}
                    className="border-l-2 border-joy-cyan pl-3"
                  >
                    <p className="font-semibold text-sm">{c.name}</p>
                    <p className="text-xs text-joy-charcoal/70">{c.time}</p>
                    {c.teacher && (
                      <p className="text-xs text-joy-charcoal/60 italic">
                        {c.teacher}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
