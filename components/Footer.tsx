import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { footerNav, legal, siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-cream-deep">
      <div className="brand-rule" aria-hidden="true" />
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm">
            <Image
              src="/logo.png"
              alt="Personalized Pathways College Consulting"
              width={192}
              height={157}
              className="h-16 w-auto"
            />
            <p className="mt-3 text-sm text-ink-muted">{siteConfig.companyName}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {legal.longDisclaimer}
            </p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <p className="font-semibold text-ink">Explore</p>
            <ul className="mt-3 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-soft transition-colors hover:text-clay-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="font-semibold text-ink">Get in touch</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ink-soft transition-colors hover:text-clay-dark"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-ink-muted">
              {legal.privacyNote}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.companyName}. All rights reserved.
          </p>
          <p>{legal.disclaimer}</p>
        </div>
      </Container>
    </footer>
  );
}
