import { Fragment, type ReactNode } from "react";

// Hand-written case study copy uses **bold** for emphasis (feature names, key
// numbers). This is the only markdown construct that copy needs, so a full
// parser/dependency isn't worth it — just split on the marker pairs.
export function renderBold(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
