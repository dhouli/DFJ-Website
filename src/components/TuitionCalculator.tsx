"use client";

import { useRef, useState } from "react";
import {
  classDurationOptions,
  tuitionRates,
  tuitionTierMinutes,
} from "@/data/schedule";

interface ClassRow {
  id: number;
  duration: string;
}

function formatMinutes(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours} hr`);
  if (minutes > 0) parts.push(`${minutes} min`);
  return parts.length > 0 ? parts.join(" ") : "0 min";
}

export default function TuitionCalculator() {
  const nextId = useRef(2);
  const [rows, setRows] = useState<ClassRow[]>([
    { id: 1, duration: classDurationOptions[0] },
  ]);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      { id: nextId.current++, duration: classDurationOptions[0] },
    ]);
  };

  const removeRow = (id: number) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const updateRow = (id: number, duration: string) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, duration } : row))
    );
  };

  const totalMinutes = rows.reduce(
    (sum, row) => sum + (tuitionTierMinutes[row.duration] ?? 0),
    0
  );

  const matchedTier = tuitionRates.find(
    (rate) => totalMinutes <= tuitionTierMinutes[rate.duration]
  );
  const isExactMatch =
    matchedTier !== undefined &&
    tuitionTierMinutes[matchedTier.duration] === totalMinutes;

  return (
    <div>
      <div className="space-y-3 mb-4">
        {rows.map((row, i) => (
          <div key={row.id} className="flex items-center gap-3">
            <span className="text-sm font-semibold text-joy-plum w-20 shrink-0">
              Class {i + 1}
            </span>
            <select
              value={row.duration}
              onChange={(e) => updateRow(row.id, e.target.value)}
              className="rounded-lg border border-joy-blush px-3 py-2 text-sm bg-white focus:outline-none focus:border-joy-cyan"
            >
              {classDurationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {rows.length > 1 && (
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                className="text-sm text-joy-charcoal/60 hover:text-joy-pink transition-colors"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addRow}
        className="rounded-full bg-joy-blush px-5 py-2 text-sm font-semibold text-joy-plum hover:bg-joy-cyan/20 transition-colors mb-8"
      >
        + Add Another Class
      </button>

      <div className="rounded-xl bg-joy-blush p-6">
        <p className="text-xs uppercase tracking-wide text-joy-pink font-semibold mb-2">
          Estimated Monthly Tuition
        </p>
        <p className="font-display text-4xl text-joy-plum mb-1">
          {matchedTier ? matchedTier.monthly : "—"}
        </p>
        <p className="text-sm text-joy-charcoal/70">
          Based on {formatMinutes(totalMinutes)} of total weekly class time.
          {!isExactMatch && matchedTier && (
            <> Rounded up to the next tuition tier.</>
          )}
        </p>
      </div>
    </div>
  );
}
