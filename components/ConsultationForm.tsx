"use client";

import { useState } from "react";
import { ActionButton } from "./Button";
import { siteConfig } from "@/data/siteConfig";

const inputClass =
  "mt-1 w-full rounded-lg border border-line bg-card px-3.5 py-2.5 text-ink shadow-sm placeholder:text-ink-muted focus:border-clay focus:outline-none";
const labelClass = "block text-sm font-medium text-ink";

// Consultation form. Fill it out, submit, and it opens the visitor's email
// program (Outlook, Gmail, etc.) with everything pre-filled and addressed to
// Personalized Pathways. No paid form service, nothing stored on our side.
export default function ConsultationForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const name = get("name");
    const body = [
      `Name: ${name}`,
      `Student year: ${get("studentYear")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `What kind of help are you looking for: ${get("helpType")}`,
      "",
      "Message:",
      get("message"),
    ].join("\n");

    const subject = name
      ? `Consultation request — ${name}`
      : "Consultation request — Personalized Pathways";

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // Open the email client with everything pre-filled.
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input className={inputClass} id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="studentYear">
            Student year
          </label>
          <select className={inputClass} id="studentYear" name="studentYear" defaultValue="">
            <option value="" disabled>
              Select a year
            </option>
            <option>8th grade or earlier</option>
            <option>9th grade</option>
            <option>10th grade</option>
            <option>11th grade (junior)</option>
            <option>12th grade (senior)</option>
            <option>Other / not sure</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Your email
          </label>
          <input className={inputClass} id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input className={inputClass} id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="helpType">
          What kind of help are you looking for?
        </label>
        <input
          className={inputClass}
          id="helpType"
          name="helpType"
          type="text"
          placeholder="e.g. full application support, essays, scholarships, honors programs, a specific question"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea className={inputClass} id="message" name="message" rows={5} required />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <ActionButton type="submit">Send my message</ActionButton>
        <span className="text-sm text-ink-muted">
          This opens your email with everything filled in, ready to send.
        </span>
      </div>

      {sent && (
        <p role="status" className="text-sm font-medium text-sage">
          Your email program should have opened with your message ready. If it
          didn&rsquo;t, email us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-clay-dark underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
