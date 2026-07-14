"use client";

import { useRef, useState } from "react";
import type { Testimonial } from "@/data/results";

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

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
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((t, i) => {
          const isParent = t.role === "parent";
          return (
            <figure
              key={i}
              className="flex shrink-0 basis-full snap-start flex-col rounded-2xl border border-line bg-card p-7 shadow-sm sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
            >
              <span
                aria-hidden="true"
                className="font-serif text-5xl leading-none text-clay/25"
              >
                &ldquo;
              </span>
              <blockquote className="-mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-sm font-semibold">
                <span className={isParent ? "text-sage" : "text-clay-dark"}>
                  {isParent ? "Parent" : "Student"}
                </span>
                {t.name && (
                  <span className="font-normal text-ink-soft"> · {t.name}</span>
                )}
              </figcaption>
            </figure>
          );
        })}
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
