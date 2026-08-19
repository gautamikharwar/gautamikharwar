"use client";

import { Columns2, Grid2x2, Grid3x3 } from "lucide-react";

export type Density = 2 | 3 | 4;

const options: { value: Density; icon: typeof Columns2; label: string }[] = [
  { value: 2, icon: Columns2, label: "2 column grid" },
  { value: 3, icon: Grid2x2, label: "3 column grid" },
  { value: 4, icon: Grid3x3, label: "4 column grid" },
];

export default function GridDensityToggle({
  value,
  onChange,
}: {
  value: Density;
  onChange: (density: Density) => void;
}) {
  return (
    <div className="flex items-center gap-1">
      {options.map(({ value: v, icon: Icon, label }) => (
        <button
          key={v}
          type="button"
          aria-label={label}
          aria-pressed={value === v}
          onClick={() => onChange(v)}
          className={`flex h-6 w-6 items-center justify-center rounded-pill transition-colors ${
            value === v ? "text-foreground" : "text-border hover:text-muted"
          }`}
        >
          <Icon size={14} strokeWidth={value === v ? 2.5 : 2} />
        </button>
      ))}
    </div>
  );
}
