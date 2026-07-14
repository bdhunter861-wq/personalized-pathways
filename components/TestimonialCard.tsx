"use client";

import { useState } from "react";
import Image from "next/image";
import SchoolLogo from "./SchoolLogo";
import type { Testimonial } from "@/data/results";

const WORD_LIMIT = 34;

export default function TestimonialCard({ t }: { t: Testimonial }) {
  const [open, setOpen] = useState(false);
  const isParent = t.role === "parent";
  const words = t.quote.split(/\s+/);
  const long = words.length > WORD_LIMIT;
  const shown = !long || open ? t.quote : words.slice(0, WORD_LIMIT).join(" ") + "…";

  const hasBadge = Boolean(t.image && t.collegeDomain);

  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
      {t.image ? (
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-deep">
            <Image
              src={t.image}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className="object-cover object-top"
            />
          </div>
          {t.collegeDomain && (
            <span className="absolute -bottom-7 right-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-card bg-white shadow-md">
              <SchoolLogo
                name={t.college ?? ""}
                domain={t.collegeDomain}
                tone="bg-clay-soft text-clay-dark"
                size="lg"
              />
            </span>
          )}
        </div>
      ) : (
        // No photo: a branded cover panel so every card is the same size.
        <div className="bg-brand-deep flex aspect-[4/5] flex-col items-center justify-center gap-2 p-6 text-center">
          <span aria-hidden="true" className="font-serif text-7xl leading-none text-white/40">
            &ldquo;
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            {isParent ? "Parent" : "Student"}
          </span>
        </div>
      )}

      <div className={`flex flex-1 flex-col px-6 pb-6 ${hasBadge ? "pt-10" : "pt-6"}`}>
        <div className="text-sm">
          <span className={isParent ? "font-semibold text-sage" : "font-semibold text-clay-dark"}>
            {isParent ? "Parent" : "Student"}
          </span>
          {t.name && <span className="text-ink-soft"> · {t.name}</span>}
        </div>

        {(t.college || t.areaOfStudy) && (
          <div className="mt-2 space-y-0.5 text-sm text-ink-soft">
            {t.college && (
              <p>
                <span className="font-semibold text-ink">College:</span> {t.college}
              </p>
            )}
            {t.areaOfStudy && (
              <p>
                <span className="font-semibold text-ink">Area of study:</span>{" "}
                {t.areaOfStudy}
              </p>
            )}
          </div>
        )}

        <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
          {shown}
        </blockquote>

        {long && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-3 w-fit text-sm font-semibold text-clay-dark hover:underline"
          >
            {open ? "Show less" : "Read more"}
          </button>
        )}
      </div>
    </figure>
  );
}
