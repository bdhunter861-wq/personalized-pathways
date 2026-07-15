"use client";

import { useState } from "react";
import Image from "next/image";
import type { Testimonial } from "@/data/results";

const WORD_LIMIT = 26;

export default function TestimonialCard({ t }: { t: Testimonial }) {
  const [open, setOpen] = useState(false);
  const isParent = t.role === "parent";
  const words = t.quote.split(/\s+/);
  const long = words.length > WORD_LIMIT;
  const shown = !long || open ? t.quote : words.slice(0, WORD_LIMIT).join(" ") + "…";

  const roleLabel = isParent ? "Parent" : "Student";
  const roleColor = isParent ? "text-sage" : "text-clay-dark";

  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
      {t.image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-deep">
          <Image
            src={t.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 360px"
            className="object-cover object-top"
          />
        </div>
      ) : (
        // Branded stand-in for cards without a student photo.
        <div className="bg-brand-deep relative flex aspect-[4/3] items-center justify-center overflow-hidden">
          <div className="bg-dots-brand absolute inset-0 opacity-20" />
          <div className="relative flex flex-col items-center gap-2">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 font-serif text-3xl text-white">
              {t.name ? t.name.charAt(0) : "“"}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              {roleLabel}
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="text-sm font-semibold">
          <span className={roleColor}>{roleLabel}</span>
          {t.name && <span className="font-normal text-ink-soft"> · {t.name}</span>}
        </div>

        {(t.college || t.areaOfStudy) && (
          <div className="mt-1.5 space-y-0.5 text-sm text-ink-soft">
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

        <blockquote className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
          {shown}
        </blockquote>

        {long && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-2.5 w-fit text-sm font-semibold text-clay-dark hover:underline"
          >
            {open ? "Show less" : "Read more"}
          </button>
        )}
      </div>
    </figure>
  );
}
