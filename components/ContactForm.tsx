"use client";

import { useState } from "react";
import { ActionButton } from "./Button";
import { siteConfig } from "@/data/siteConfig";

const inputClass =
  "mt-1 w-full rounded-lg border border-line bg-card px-3.5 py-2.5 text-ink shadow-sm placeholder:text-ink-muted focus:border-clay focus:outline-none";

const labelClass = "block text-sm font-medium text-ink";

// Cheapest-possible contact: builds a prefilled mailto link by default.
// If NEXT_PUBLIC_CONTACT_ENDPOINT is set, it POSTs there instead (no paid
// service required either way).
export default function ContactForm() {
  const endpoint = siteConfig.contactEndpoint;
  const email = siteConfig.email; // TODO_ADD_EMAIL
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function buildMailto(data: Record<string, string>) {
    const subject = `College consulting inquiry — ${data.name || "New inquiry"}`;
    const body = [
      `Name: ${data.name}`,
      `Student year: ${data.studentYear}`,
      `Email: ${data.email}`,
      `Looking for help with: ${data.helpType}`,
      "",
      "Message:",
      data.message,
    ].join("\n");
    return `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(
      Array.from(fd.entries()).map(([k, v]) => [k, String(v)])
    ) as Record<string, string>;

    // Optional API endpoint path.
    if (endpoint) {
      try {
        setStatus("sending");
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        setStatus(res.ok ? "sent" : "error");
        if (res.ok) form.reset();
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    // Default: open the user's email client with a prefilled message.
    window.location.href = buildMailto(data);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
        <label className={labelClass} htmlFor="helpType">
          What kind of help are you looking for?
        </label>
        <input
          className={inputClass}
          id="helpType"
          name="helpType"
          type="text"
          placeholder="e.g. full application support, essays, scholarships, a specific question"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea className={inputClass} id="message" name="message" rows={5} required />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <ActionButton type="submit">
          {endpoint
            ? status === "sending"
              ? "Sending…"
              : "Send message"
            : "Open email to send"}
        </ActionButton>
        {!endpoint && email !== "TODO_ADD_EMAIL" && (
          <a
            href={`mailto:${email}`}
            className="text-sm font-semibold text-clay-dark hover:underline"
          >
            Or email directly
          </a>
        )}
      </div>

      {status === "sent" && (
        <p role="status" className="text-sm font-medium text-sage">
          Thank you. Your message has been sent and we'll be in touch.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-clay-dark">
          Something went wrong sending that. Please try again, or email directly.
        </p>
      )}

      {/* Note: without a configured endpoint, submitting opens the visitor's own
          email client. No data is collected or stored by this site. */}
    </form>
  );
}
