"use client";

import { useState } from "react";

const STOP = new Set(["the", "university", "of", "college", "state"]);

function initial(name: string) {
  const word = name
    .split(/\s+/)
    .find((w) => !STOP.has(w.toLowerCase().replace(/[^a-z]/gi, "")));
  return (word ?? name).charAt(0).toUpperCase();
}

// A logo.dev publishable token unlocks real, consistent university logos.
// Set NEXT_PUBLIC_LOGODEV_TOKEN (Vercel → Settings → Environment Variables, or
// paste the pk_ token here). Without it, we fall back to site favicons, which
// are lower quality and inconsistent.
const LOGODEV_TOKEN = process.env.NEXT_PUBLIC_LOGODEV_TOKEN ?? "";

function logoUrl(domain: string) {
  if (LOGODEV_TOKEN) {
    return `https://img.logo.dev/${domain}?token=${LOGODEV_TOKEN}&size=128&format=png&retina=true`;
  }
  // Fallback: DuckDuckGo favicon (inconsistent; 404 -> monogram).
  return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
}

// In favicon (no-token) mode, these come back blank — show a monogram instead.
const FAVICON_BLANK = new Set<string>(["vanderbilt.edu"]);

// Renders a school's logo (from logo.dev, or a favicon fallback). If there's no
// domain or the logo fails to load, it falls back to a colored monogram.
export default function SchoolLogo({
  name,
  domain,
  tone,
}: {
  name: string;
  domain?: string;
  tone: string;
}) {
  const monogramOnly =
    !LOGODEV_TOKEN && Boolean(domain) && FAVICON_BLANK.has(domain ?? "");
  const [showLogo, setShowLogo] = useState(Boolean(domain) && !monogramOnly);

  if (domain && showLogo) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl(domain)}
          alt=""
          loading="lazy"
          className="h-8 w-8 object-contain"
          onError={() => setShowLogo(false)}
        />
      </span>
    );
  }

  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-base font-semibold ${tone}`}
      aria-hidden="true"
    >
      {initial(name)}
    </span>
  );
}
