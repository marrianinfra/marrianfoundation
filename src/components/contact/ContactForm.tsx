"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useReveal } from "@/hooks/useReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/lib/content";

type FormState = {
  name: string;
  email: string;
  purpose: string;
  message: string;
};

const purposeMap: Record<string, string> = {
  "lead-academy": "Lead Academy",
  "farm-tours": "Farm Tours",
  nurture: "Nurture Scholarship",
  volunteer: "Volunteer",
};

const initial: FormState = {
  name: "",
  email: "",
  purpose: contact.form.purposes[0],
  message: "",
};

export default function ContactForm() {
  const root = useReveal<HTMLElement>();
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initial);

  useEffect(() => {
    const purposeParam = searchParams.get("purpose");
    if (!purposeParam) return;
    const mapped = purposeMap[purposeParam] ?? purposeParam;
    if (contact.form.purposes.includes(mapped)) {
      setForm((f) => ({ ...f, purpose: mapped }));
    }
  }, [searchParams]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      setStatus("success");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section ref={root} className="bg-surface-muted section-padding">
      <div className="container-site grid gap-10 lg:grid-cols-2">
        <div data-reveal>
          <SectionHeading
            eyebrow="Contact"
            title={contact.form.title}
            description={contact.form.intro}
          />
        </div>

        <form
          data-reveal
          onSubmit={onSubmit}
          className="rounded-3xl border border-neutral-200/70 bg-surface p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy">Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-xl border border-neutral-200/80 bg-surface-muted px-4 py-3 outline-none transition focus:border-orange"
                placeholder="Your full name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-xl border border-neutral-200/80 bg-surface-muted px-4 py-3 outline-none transition focus:border-orange"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy">Purpose</span>
              <select
                required
                value={form.purpose}
                onChange={(e) => setForm((f) => ({ ...f, purpose: e.target.value }))}
                className="w-full rounded-xl border border-neutral-200/80 bg-surface-muted px-4 py-3 outline-none transition focus:border-orange"
              >
                {contact.form.purposes.map((purpose) => (
                  <option key={purpose} value={purpose}>
                    {purpose}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full resize-y rounded-xl border border-neutral-200/80 bg-surface-muted px-4 py-3 outline-none transition focus:border-orange"
                placeholder="How would you like to walk with us?"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-dark disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-sm text-navy">
              Thank you. Your message has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-orange">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
