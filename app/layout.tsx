import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

// Clean, warm, conventional serif for headings; clean sans for body/UI.
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "college consulting",
    "college admissions consulting",
    "college essay support",
    "scholarship application support",
    "honors college applications",
    "college list strategy",
    "high school course planning",
    "application strategy",
  ],
  authors: [{ name: "Dr. Michelle Anthony" }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  // TODO — add a real Open Graph image at /public/og.png and reference it here.
};

// Structured data for a professional service. Placeholder fields are marked.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Personalized Pathways College Consulting",
  legalName: "Wide-Eyed Learning, LLC",
  description: siteConfig.description,
  url: siteConfig.url,
  // TODO_ADD_EMAIL — replace once a real contact email is provided.
  // email: siteConfig.email,
  areaServed: "US",
  serviceType: "College admissions consulting",
  founder: { "@type": "Person", name: "Dr. Michelle Anthony" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
