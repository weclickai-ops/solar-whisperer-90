import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail, Phone, Globe } from "lucide-react";
import { contact, cta } from "@/data/content";
import { PageHeader } from "@/components/g/PageHeader";
import { Reveal } from "@/components/g/Reveal";
import { GButton } from "@/components/g/GButton";
import { CtaBand } from "@/components/g/CtaBand";
import { SectionHead } from "@/components/g/SectionHead";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Glarenergy — Talk to an Engineer" },
      {
        name: "description",
        content:
          "Discuss your solar tracking requirements with the Glarenergy engineering team by phone or email.",
      },
      { property: "og:title", content: "Contact Glarenergy — Talk to an Engineer" },
      {
        property: "og:description",
        content: "Talk to our team about your solar tracking requirements.",
      },
    ],
  }),
  component: Contact,
});

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  capacity: string;
  message: string;
};

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  location: "",
  capacity: "",
  message: "",
};

const nextSteps = [
  {
    number: "01",
    title: "We read the requirement",
    body: "Site location, capacity and terrain tell us which configuration applies — 2P-HSAT or 1P.",
  },
  {
    number: "02",
    title: "An engineer replies",
    body: "You get a direct answer on tracking range, foundations and layout, not a sales sequence.",
  },
  {
    number: "03",
    title: "We size the layout",
    body: "Row count, pile count and ground coverage are worked through against your plot.",
  },
];

function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function validate(v: Fields) {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address.";
    if (!v.message.trim()) e.message = "Please tell us about your project.";
    return e;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    // NOTE: This is a static form. Wire this handler to a real endpoint
    // (server function, CRM or email service) before going live — nothing is
    // sent anywhere today and no network request is performed.
    setSent(true);
  }

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title={cta.heading}
        lede={cta.body}
      />

      <section className="container-g grid gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          {sent ? (
            <div
              role="status"
              className="flex flex-col items-start gap-4 rounded-[2rem] border border-[var(--line-blue)] bg-[var(--bg-elev)] p-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line-blue)]">
                <Check size={20} className="text-cyan" aria-hidden="true" />
              </span>
              <h2 className="font-display text-2xl">Enquiry received.</h2>
              <p className="lede">
                Thank you — our engineering team will review your requirements and get back to
                you. For anything urgent, call {contact.phones[0]}.
              </p>
              <GButton variant="ghost" onClick={() => { setSent(false); setValues(empty); }}>
                Send another enquiry
              </GButton>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Name" required value={values.name} onChange={set("name")} error={errors.name} />
                <Field id="company" label="Company" value={values.company} onChange={set("company")} />
                <Field id="email" label="Email" type="email" required value={values.email} onChange={set("email")} error={errors.email} />
                <Field id="phone" label="Phone" type="tel" value={values.phone} onChange={set("phone")} />
                <Field id="location" label="Project Location" value={values.location} onChange={set("location")} />
                <Field id="capacity" label="Estimated Capacity (MW)" value={values.capacity} onChange={set("capacity")} />
              </div>

              <Field
                id="message"
                label="Message"
                required
                textarea
                value={values.message}
                onChange={set("message")}
                error={errors.message}
              />

              <GButton type="submit" className="w-fit">
                Send enquiry
                <ArrowRight size={15} aria-hidden="true" />
              </GButton>
            </form>
          )}
        </Reveal>

        <Reveal delay={80} className="flex flex-col gap-4">
          {contact.phones.map((p, i) => (
            <ContactCard
              key={p}
              href={`tel:${contact.phoneHrefs[i]}`}
              label={`Phone ${i + 1}`}
              value={p}
              Icon={Phone}
            />
          ))}
          <ContactCard href={`mailto:${contact.email}`} label="Email" value={contact.email} Icon={Mail} />
          <ContactCard href={contact.websiteHref} label="Website" value={contact.website} Icon={Globe} />
        </Reveal>
      </section>

      <section className="container-g pb-20 md:pb-28">
        <SectionHead eyebrow="What happens next" title="Three steps, no sales funnel." />
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {nextSteps.map((s, i) => (
            <Reveal as="li" key={s.number} delay={i * 60}>
              <div className="h-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
                <p className="font-mono text-xs text-cyan">{s.number}</p>
                <h3 className="mt-4 font-display text-lg">{s.title}</h3>
                <p className="mt-2 text-sm">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  textarea,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string | undefined;
  required?: boolean | undefined;
  type?: string | undefined;
  textarea?: boolean | undefined;
}) {
  const cls = cn(
    "w-full rounded-xl border bg-[var(--surface)] px-4 py-3 text-sm text-text placeholder:text-[var(--text-3)] transition-colors duration-200",
    error ? "border-destructive" : "border-[var(--line-2)] focus:border-[var(--line-blue)]",
  );

  return (
    <div className={cn("flex flex-col gap-2", textarea && "col-span-full")}>
      <label htmlFor={id} className="text-sm text-[var(--text-2)]">
        {label}
        {required ? <span className="ml-1 text-cyan">*</span> : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cls}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(cls, "min-h-[46px]")}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ContactCard({
  href,
  label,
  value,
  Icon,
}: {
  href: string;
  label: string;
  value: string;
  Icon: typeof Phone;
}) {
  return (
    <a
      href={href}
      className="flex cursor-pointer items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-6 py-5 transition-colors duration-200 hover:border-[var(--line-blue)]"
    >
      <Icon size={18} className="shrink-0 text-cyan" aria-hidden="true" />
      <span className="flex min-w-0 flex-col">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--text-3)]">
          {label}
        </span>
        <span className="truncate text-text">{value}</span>
      </span>
    </a>
  );
}
