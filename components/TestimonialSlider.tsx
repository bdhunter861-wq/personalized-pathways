"use client";

import { useRef, useState } from "react";
import type { Testimonial } from "@/data/results";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Show the ones with student photos first for a stronger opening.
  const ordered = [...items].sort(
    (a, b) => (b.image ? 1 : 0) - (a.image ? 1 : 0),
  );

  function updateEdges() {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }

  function page(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="mt-10">
      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {ordered.map((t, i) => (
          <div
            key={i}
            className="shrink-0 basis-full snap-start sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
          >
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => page(-1)}
          disabled={atStart}
          aria-label="Previous testimonials"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink shadow-sm transition-colors hover:border-clay hover:text-clay-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => page(1)}
          disabled={atEnd}
          aria-label="Next testimonials"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink shadow-sm transition-colors hover:border-clay hover:text-clay-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
