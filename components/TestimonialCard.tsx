"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Testimonial } from "@/data/results";

const WORD_LIMIT = 26;

export default function TestimonialCard({ t }: { t: Testimonial }) {
  const [open, setOpen] = useState(false);
  const isParent = t.role === "parent";
  const words = t.quote.split(/\s+/);
  const long = words.length > WORD_LIMIT;
  const preview = long ? words.slice(0, WORD_LIMIT).join(" ") + "…" : t.quote;

  const roleLabel = isParent ? "Parent" : "Student";
  const roleColor = isParent ? "text-sage" : "text-clay-dark";

  // Close on Escape and lock background scroll while the modal is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const details = (t.college || t.areaOfStudy) && (
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
  );

  return (
    <>
      <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
        {t.image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-deep">
            <Image
              src={t.image}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className="object-cover"
            />
          </div>
        ) : (
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
          {details}
          <blockquote className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
            {preview}
          </blockquote>
          {long && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-2.5 w-fit text-sm font-semibold text-clay-dark hover:underline"
            >
              Read more
            </button>
          )}
        </div>
      </figure>

      {/* Read-more modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-card p-7 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-cream-deep hover:text-ink"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex items-center gap-4 pr-8">
              {t.image ? (
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-line">
                  <Image src={t.image} alt="" fill sizes="56px" className="object-cover" />
                </span>
              ) : (
                <span className="bg-brand-deep flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-serif text-2xl text-white">
                  {t.name ? t.name.charAt(0) : "“"}
                </span>
              )}
              <div>
                <p className="font-serif text-xl font-semibold text-ink">
                  {t.name ?? roleLabel}
                </p>
                <p className={`text-sm font-semibold ${roleColor}`}>{roleLabel}</p>
              </div>
            </div>

            {details}

            <blockquote className="mt-5 border-t border-line pt-5 text-[0.95rem] italic leading-relaxed text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      )}
    </>
  );
}
