"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import { Button } from "./Button";
import { mainNav, siteConfig, consultationHref } from "@/data/siteConfig";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" aria-label={`${siteConfig.shortName} home`} className="shrink-0">
          <Image
            src="/logo.png"
            alt="Personalized Pathways College Consulting"
            width={192}
            height={157}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-clay-soft text-clay-dark"
                  : "text-ink-soft hover:bg-cream-deep hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={consultationHref} className="px-5 py-2.5 shadow-lg shadow-clay/30">
            Schedule a consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-cream lg:hidden">
          <Container className="flex flex-col py-3" as="nav">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-md px-2 py-3 text-base font-medium ${
                  isActive(item.href) ? "text-clay-dark" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button href={consultationHref} className="mt-2" onClick={() => setOpen(false)}>
              Schedule a consultation
            </Button>
          </Container>
        </div>
      )}
      <div className="brand-rule h-[5px]" aria-hidden="true" />
    </header>
  );
}
