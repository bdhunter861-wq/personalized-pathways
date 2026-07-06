"use client";

import { useState } from "react";

const STOP = new Set(["the", "university", "of", "college", "state"]);

function initial(name: string) {
  const word = name
    .split(/\s+/)
    .find((w) => !STOP.has(w.toLowerCase().replace(/[^a-z]/gi, "")));
  return (word ?? name).charAt(0).toUpperCase();
}

// Logo source. Swap this one function to change the logo service.
function logoUrl(domain: string) {
  return `https://logo.clearbit.com/${domain}?size=80`;
}

// Renders a school's logo (fetched by domain from a logo service). If there's
// no domain or the logo fails to load, it falls back to a colored monogram.
export default function SchoolLogo({
  name,
  domain,
  tone,
}: {
  name: string;
  domain?: string;
  tone: string;
}) {
  const [showLogo, setShowLogo] = useState(Boolean(domain));

  if (domain && showLogo) {
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl(domain)}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          className="h-7 w-7 object-contain"
          onError={() => setShowLogo(false)}
        />
      </span>
    );
  }

  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-base font-semibold ${tone}`}
      aria-hidden="true"
    >
      {initial(name)}
    </span>
  );
}
