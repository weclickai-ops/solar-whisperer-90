import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { Eyebrow } from "@/components/g/Eyebrow";
import { Reveal } from "@/components/g/Reveal";
import { contact, contactPage, contactRows } from "@/data/content";
import { routeHead } from "@/lib/seo";

/** Replace YOUR_FORM_ID with the Formspree form ID for connect@glarenergy.com.
 *  Until then the form opens a pre-filled email so no enquiry is lost. */
const ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export const Route = createFileRoute("/contact")({
  head: () => routeHead("/contact"),
  component: ContactPage,
});

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "mt-2 min-h-[46px] w-full rounded-lg border border-[var(--line-2)] bg-[var(--surface)] px-4 py-3 text-[0.9375rem] text-[var(--text)] outline-none transition-colors focus-visible:border-[var(--blue)]";

function Label({ htmlFor, children, required }: { htmlFor: string; children: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mono-label text-[var(--text-2)]">
      {children}
      {required ? <span className="text-cyan"> *</span> : null}
    </label>
  );
}

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") ?? "").length > 0) return; // honeypot

    const get = (key: string) => String(data.get(key) ?? "").trim();
    const next: Errors = {};
    if (!get("name")) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
      next.email = "Please enter a valid work email address.";
    if (!get("message")) next.message = "Please describe your enquiry.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const lines = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Work email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Project location: ${get("location")}`,
      `Estimated capacity (MW): ${get("capacity")}`,
      `Requirement: ${get("requirement")}`,
      "",
      get("message"),
    ].join("\n");

    if (ENDPOINT.includes("YOUR_FORM_ID")) {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        `Enquiry from ${get("name")}`,
      )}&body=${encodeURIComponent(lines)}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="container-g py-16 lg:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-6">{contactPage.eyebrow}</Eyebrow>
          <h1>{contactPage.heading}</h1>
          <p className="lede mt-7">{contactPage.lede}</p>
        </Reveal>
      </section>

      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <h2 className="text-[1.5rem]">Direct contact</h2>
            <ul className="mt-8">
              {contactRows.map((row) => (
                <li
                  key={`${row.label}-${row.value}`}
                  className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] py-4 first:border-t"
                >
                  <span className="mono-label text-[var(--text-3)]">{row.label}</span>
                  <a
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="min-h-11 content-center text-[0.9375rem] text-[var(--text)] hover:text-cyan"
                  >
                    {row.value}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1}>
            <h2 className="text-[1.5rem]">{contactPage.formHeading}</h2>
            <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-6 sm:grid-cols-2">
              <p className="hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </p>

              <div>
                <Label htmlFor="name" required>Name</Label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-[0.8125rem] text-cyan">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <input id="company" name="company" autoComplete="organization" className={fieldClass} />
              </div>

              <div>
                <Label htmlFor="email" required>Work email</Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass}
                />
                {errors.email ? (
                  <p id="email-error" className="mt-2 text-[0.8125rem] text-cyan">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
              </div>

              <div>
                <Label htmlFor="location">Project location</Label>
                <input id="location" name="location" className={fieldClass} />
              </div>

              <div>
                <Label htmlFor="capacity">Estimated capacity (MW)</Label>
                <input id="capacity" name="capacity" inputMode="decimal" className={fieldClass} />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="requirement">Requirement</Label>
                <select id="requirement" name="requirement" className={fieldClass} defaultValue={contactPage.requirements[0]}>
                  {contactPage.requirements.map((option) => (
                    <option key={option} value={option} className="bg-[var(--bg-elev)]">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="message" required>Message</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={fieldClass}
                />
                {errors.message ? (
                  <p id="message-error" className="mt-2 text-[0.8125rem] text-cyan">{errors.message}</p>
                ) : null}
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex min-h-11 items-center rounded-full bg-[var(--blue)] px-7 font-medium text-white transition-transform duration-[180ms] hover:-translate-y-px hover:bg-[var(--blue-600)] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Enquiry →"}
                </button>

                <p aria-live="polite" className="mt-4 text-[0.9375rem]">
                  {status === "sent" ? "Thank you. Your enquiry has been sent." : null}
                  {status === "error" ? (
                    <span>
                      The enquiry could not be sent. Please email{" "}
                      <a href={`mailto:${contact.email}`} className="text-cyan underline">
                        {contact.email}
                      </a>
                      .
                    </span>
                  ) : null}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
