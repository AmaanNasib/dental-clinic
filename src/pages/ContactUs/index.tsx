
import {
  Phone, Mail, MapPin, Clock, Check, ArrowRight, ArrowLeft,
  Sparkles, Smile, Shield, Stethoscope, Baby, Zap, AlertTriangle,
  CalendarCheck, MessageSquare, ShieldCheck, CreditCard,
} from "lucide-react";
import { useMemo, useState } from "react";
import { SiteLayout } from "../../components/site/SiteLayout";
import { PageHero } from "../../components/site/PageHero";
import { AnimatePresence, motion } from "framer-motion";



/* ---------------- Service catalog (drives the smart form) ---------------- */
type ServiceKey =
  | "cosmetic" | "implants" | "invisalign" | "general"
  | "emergency" | "pediatric" | "whitening" | "consultation";

type SvcMeta = {
  key: ServiceKey;
  label: string;
  blurb: string;
  icon: typeof Sparkles;
  // service-specific intake questions
  questions: { id: string; label: string; type: "select" | "text" | "radio"; options?: string[]; placeholder?: string }[];
  urgent?: boolean;
};

const SERVICES: SvcMeta[] = [
  {
    key: "cosmetic", label: "Cosmetic Dentistry", icon: Sparkles,
    blurb: "Veneers, smile design, bonding.",
    questions: [
      {
        id: "concern", label: "What would you change about your smile?", type: "select",
        options: ["Color / staining", "Shape or size of teeth", "Gaps or spacing", "Chipped or worn teeth", "Full smile makeover"]
      },
      {
        id: "timeline", label: "Ideal timeline", type: "radio",
        options: ["ASAP", "Within 1 month", "1–3 months", "Just exploring"]
      },
      { id: "event", label: "Any event you're preparing for? (optional)", type: "text", placeholder: "Wedding, photoshoot, etc." },
    ],
  },
  {
    key: "implants", label: "Dental Implants", icon: Shield,
    blurb: "Single tooth, full arch, All-on-4.",
    questions: [
      {
        id: "missing", label: "How many teeth are missing or failing?", type: "radio",
        options: ["One", "2–3", "4 or more", "Full arch (All-on-4)"]
      },
      {
        id: "extraction", label: "Do you still have the tooth/teeth?", type: "radio",
        options: ["Yes, still there", "Already extracted", "Some of each"]
      },
      {
        id: "bone", label: "Were you told you need a bone graft?", type: "radio",
        options: ["Yes", "No", "Not sure"]
      },
    ],
  },
  {
    key: "invisalign", label: "Invisalign / Aligners", icon: Smile,
    blurb: "Clear, near-invisible orthodontics.",
    questions: [
      {
        id: "issue", label: "Main concern", type: "select",
        options: ["Crowding", "Spacing / gaps", "Bite issues", "Mild touch-up", "Not sure"]
      },
      { id: "priorTx", label: "Had braces before?", type: "radio", options: ["Yes", "No"] },
    ],
  },
  {
    key: "general", label: "General & Preventive", icon: Stethoscope,
    blurb: "Cleanings, fillings, exams.",
    questions: [
      {
        id: "lastVisit", label: "Last dental visit", type: "radio",
        options: ["< 6 months", "6–12 months", "1–2 years", "2+ years"]
      },
      {
        id: "issues", label: "Any current symptoms?", type: "select",
        options: ["None — routine cleaning", "Sensitivity", "Visible cavity", "Bleeding gums", "Bad breath"]
      },
    ],
  },
  {
    key: "emergency", label: "Dental Emergency", icon: AlertTriangle, urgent: true,
    blurb: "Same-day pain & trauma care.",
    questions: [
      {
        id: "pain", label: "Pain level (1–10)", type: "select",
        options: ["1–3 (mild)", "4–6 (moderate)", "7–8 (severe)", "9–10 (unbearable)"]
      },
      {
        id: "type", label: "What's happening?", type: "radio",
        options: ["Severe toothache", "Knocked-out tooth", "Broken / chipped tooth", "Swelling", "Lost crown/filling"]
      },
      {
        id: "duration", label: "How long has this been going on?", type: "radio",
        options: ["< 24 hours", "1–3 days", "More than 3 days"]
      },
    ],
  },
  {
    key: "pediatric", label: "Pediatric / Family", icon: Baby,
    blurb: "Gentle care for kids and teens.",
    questions: [
      { id: "age", label: "Child's age", type: "text", placeholder: "e.g. 7" },
      { id: "firstVisit", label: "First dental visit?", type: "radio", options: ["Yes", "No"] },
    ],
  },
  {
    key: "whitening", label: "Teeth Whitening", icon: Zap,
    blurb: "In-office and take-home whitening.",
    questions: [
      {
        id: "type", label: "Preferred method", type: "radio",
        options: ["In-office (1 visit)", "Take-home trays", "Not sure — recommend"]
      },
    ],
  },
  {
    key: "consultation", label: "Just exploring", icon: MessageSquare,
    blurb: "Free chat with our care team.",
    questions: [
      { id: "topic", label: "What would you like to discuss?", type: "text", placeholder: "Briefly tell us…" },
    ],
  },
];

/* ---------------- Page ---------------- */
export default function ContactUs() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Let's get you in <span className="italic text-secondary">the chair.</span></>}
        sub="Tell us what you need — our care team replies within 1 business hour. Free consultations. Transparent pricing."
      />
      <SmartContactForm />
      <ContactGrid />
      <TrustStrip />
    </SiteLayout>
  );
}

/* ---------------- Smart, service-aware form ---------------- */
function SmartContactForm() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [service, setService] = useState<ServiceKey | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ first: "", last: "", email: "", phone: "", preferred: "Morning", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

  const svc = useMemo(() => SERVICES.find((s) => s.key === service) ?? null, [service]);

  const next = () => setStep((s) => (Math.min(4, (s + 1)) as 1 | 2 | 3 | 4));
  const back = () => setStep((s) => (Math.max(1, (s - 1)) as 1 | 2 | 3 | 4));

  const canNext1 = !!service;
  const canNext2 = svc ? svc.questions.every((q) => answers[q.id] && answers[q.id].trim() !== "" || q.placeholder?.includes("optional")) : false;
  const canSubmit = contact.first && contact.last && contact.email && contact.phone && contact.consent;

  if (submitted) {
    return (
      <section className="container-x py-14">
        <div className="max-w-2xl mx-auto bg-white border border-border rounded-3xl p-10 text-center shadow-soft">
          <div className="w-14 h-14 rounded-full bg-secondary/15 text-secondary grid place-items-center mx-auto">
            <CalendarCheck className="w-7 h-7" />
          </div>
          <h2 className="font-display text-3xl text-primary mt-5">Request received.</h2>
          <p className="text-muted-foreground mt-3">
            Thanks {contact.first}! A care coordinator will reach you at <strong className="text-foreground">{contact.phone}</strong> within 1 business hour.
            {svc?.urgent && <> For urgent pain, call <a className="text-secondary font-semibold" href="tel:+12125550199">(212) 555-0199</a> now.</>}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container-x py-12 lg:py-16">
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
        {/* Form card */}
        <div className="lg:col-span-3 bg-white border border-border rounded-3xl shadow-soft overflow-hidden">
          {/* Stepper */}
          <div className="px-6 sm:px-10 pt-8">
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-3 flex-1">
                  <div className={`w-8 h-8 rounded-full grid place-items-center text-sm font-semibold transition-colors ${step >= n ? "bg-primary text-white" : "bg-surface text-muted-foreground border border-border"}`}>
                    {step > n ? <Check className="w-4 h-4" /> : n}
                  </div>
                  <div className={`hidden sm:block text-xs font-medium uppercase tracking-wider ${step >= n ? "text-primary" : "text-muted-foreground"}`}>
                    {n === 1 ? "Service" : n === 2 ? "Details" : "Your info"}
                  </div>
                  {n < 3 && <div className={`flex-1 h-px ${step > n ? "bg-primary" : "bg-border"}`} />}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {/* STEP 1 — service grid */}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                  <h3 className="font-display text-2xl text-primary">What can we help with?</h3>
                  <p className="text-sm text-muted-foreground mt-1">Pick the option closest to what you need. We'll ask a few smart follow-ups.</p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {SERVICES.map((s) => {
                      const active = service === s.key;
                      return (
                        <button
                          key={s.key}
                          type="button"
                          onClick={() => setService(s.key)}
                          className={`text-left p-4 rounded-2xl border transition-all group relative overflow-hidden ${active ? "border-primary bg-primary/[0.04] ring-2 ring-primary/15" : "border-border hover:border-primary/40 hover:bg-surface"}`}
                        >
                          <div className="flex items-start gap-3">
                            <span className={`w-10 h-10 rounded-xl grid place-items-center shrink-0 transition-colors ${s.urgent ? "bg-red-50 text-red-600" : active ? "bg-primary text-white" : "bg-surface text-primary group-hover:bg-primary group-hover:text-white"}`}>
                              <s.icon className="w-5 h-5" />
                            </span>
                            <div className="min-w-0">
                              <div className="font-semibold text-primary flex items-center gap-2">
                                {s.label}
                                {s.urgent && <span className="text-[10px] uppercase tracking-wider bg-red-600 text-white px-1.5 py-0.5 rounded">Urgent</span>}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">{s.blurb}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 — dynamic questions */}
              {step === 2 && svc && (
                <motion.div key="s2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                  <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-xl grid place-items-center ${svc.urgent ? "bg-red-50 text-red-600" : "bg-primary text-white"}`}>
                      <svc.icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-primary">{svc.label}</h3>
                      <p className="text-xs text-muted-foreground">A few quick questions to prep your visit.</p>
                    </div>
                  </div>
                  {svc.urgent && (
                    <div className="mt-5 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                      <div>
                        For severe pain or trauma, please call <a href="tel:+12125550199" className="font-semibold underline">(212) 555-0199</a> now — we hold same-day emergency slots.
                      </div>
                    </div>
                  )}
                  <div className="mt-6 space-y-5">
                    {svc.questions.map((q) => (
                      <div key={q.id}>
                        <label className="text-sm font-semibold text-primary">{q.label}</label>
                        <div className="mt-2">
                          {q.type === "select" && (
                            <select
                              value={answers[q.id] ?? ""}
                              onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                              className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
                            >
                              <option value="">Select…</option>
                              {q.options!.map((o) => <option key={o}>{o}</option>)}
                            </select>
                          )}
                          {q.type === "text" && (
                            <input
                              type="text"
                              value={answers[q.id] ?? ""}
                              onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                              placeholder={q.placeholder}
                              className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
                            />
                          )}
                          {q.type === "radio" && (
                            <div className="flex flex-wrap gap-2">
                              {q.options!.map((o) => {
                                const active = answers[q.id] === o;
                                return (
                                  <button
                                    type="button"
                                    key={o}
                                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: o }))}
                                    className={`px-4 py-2 rounded-full text-sm border transition-colors ${active ? "bg-primary text-white border-primary" : "bg-white text-foreground border-border hover:border-primary/40"}`}
                                  >
                                    {o}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 — contact info */}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                  <h3 className="font-display text-2xl text-primary">How can we reach you?</h3>
                  <p className="text-sm text-muted-foreground mt-1">We'll respond within 1 business hour.</p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <Input label="First name" value={contact.first} onChange={(v) => setContact({ ...contact, first: v })} required />
                    <Input label="Last name" value={contact.last} onChange={(v) => setContact({ ...contact, last: v })} required />
                    <Input label="Email" type="email" value={contact.email} onChange={(v) => setContact({ ...contact, email: v })} required />
                    <Input label="Phone" type="tel" value={contact.phone} onChange={(v) => setContact({ ...contact, phone: v })} required />
                  </div>
                  <div className="mt-4">
                    <label className="text-sm font-semibold text-primary">Preferred time of day</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["Morning", "Afternoon", "Evening", "Any time"].map((t) => {
                        const active = contact.preferred === t;
                        return (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setContact({ ...contact, preferred: t })}
                            className={`px-4 py-2 rounded-full text-sm border transition-colors ${active ? "bg-primary text-white border-primary" : "bg-white text-foreground border-border hover:border-primary/40"}`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm font-semibold text-primary">Anything else? (optional)</label>
                    <textarea
                      rows={3}
                      value={contact.message}
                      onChange={(e) => setContact({ ...contact, message: e.target.value })}
                      className="mt-2 w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
                    />
                  </div>
                  <label className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={contact.consent}
                      onChange={(e) => setContact({ ...contact, consent: e.target.checked })}
                      className="mt-1"
                    />
                    I agree to be contacted by Bright Smile Dental about my request. We'll never share your info.
                  </label>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Nav */}
            <div className="mt-8 flex items-center justify-between gap-3">
              {step > 1 ? (
                <button type="button" onClick={back} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-surface transition">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <span />}

              {step < 3 && (
                <button
                  type="button"
                  onClick={next}
                  disabled={(step === 1 && !canNext1) || (step === 2 && !canNext2)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              )}
              {step === 3 && (
                <button
                  type="button"
                  onClick={() => canSubmit && setSubmitted(true)}
                  disabled={!canSubmit}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Request appointment <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar — live summary + contact info */}
        <aside className="lg:col-span-2 space-y-4 lg:sticky lg:top-28">
          <div className="bg-primary text-white rounded-3xl p-7 shadow-elegant">
            <div className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold">Your request</div>
            <div className="mt-3 space-y-3 text-sm">
              <Row label="Service" value={svc?.label ?? "—"} />
              {svc && Object.entries(answers).filter(([, v]) => v).slice(0, 3).map(([k, v]) => {
                const q = svc.questions.find((q) => q.id === k);
                return <Row key={k} label={q?.label ?? k} value={v} small />;
              })}
              <Row label="Preferred time" value={contact.preferred} />
            </div>
            <div className="mt-6 pt-6 border-t border-white/15 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/85"><ShieldCheck className="w-4 h-4 text-secondary" /> Free, no-pressure consult</div>
              <div className="flex items-center gap-2 text-white/85"><CreditCard className="w-4 h-4 text-secondary" /> CareCredit & most PPOs accepted</div>
              <div className="flex items-center gap-2 text-white/85"><Clock className="w-4 h-4 text-secondary" /> 1-hour business response</div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-3xl p-7">
            <div className="font-display text-lg text-primary">Prefer to talk?</div>
            <div className="mt-3 space-y-3 text-sm">
              <a href="tel:+12125550199" className="flex items-center gap-3 group">
                <span className="w-9 h-9 rounded-full bg-surface grid place-items-center text-primary"><Phone className="w-4 h-4" /></span>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">(212) 555-0199</span>
              </a>
              <a href="mailto:hello@brightsmile.dental" className="flex items-center gap-3 group">
                <span className="w-9 h-9 rounded-full bg-surface grid place-items-center text-primary"><Mail className="w-4 h-4" /></span>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">hello@brightsmile.dental</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-surface grid place-items-center text-primary"><MapPin className="w-4 h-4" /></span>
                <span className="text-muted-foreground">432 Park Avenue, NY 10022</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-surface grid place-items-center text-primary"><Clock className="w-4 h-4" /></span>
                <span className="text-muted-foreground">Mon–Sat · 8a–7p</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-primary">{label}{required && <span className="text-secondary"> *</span>}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-2 w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
      />
    </label>
  );
}

function Row({ label, value, small }: { label: string; value: string; small?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className={`text-white/60 ${small ? "text-xs" : ""}`}>{label}</div>
      <div className={`font-semibold text-right ${small ? "text-xs text-white/85" : "text-white"}`}>{value}</div>
    </div>
  );
}

/* ---------------- Bottom contact + trust ---------------- */
function ContactGrid() {
  const items = [
    { icon: Phone, t: "Call us", v: "(212) 555-0199", s: "Mon–Sat · 8a–7p" },
    { icon: Mail, t: "Email", v: "hello@brightsmile.dental", s: "Replies within 1 hr" },
    { icon: MapPin, t: "Visit us", v: "432 Park Avenue, NY 10022", s: "Valet parking available" },
    { icon: AlertTriangle, t: "Emergency line", v: "(212) 555-0911", s: "24/7 patient hotline" },
  ];
  return (
    <section className="container-x pb-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((i) => (
          <div key={i.t} className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors">
            <i.icon className="w-6 h-6 text-secondary" />
            <div className="font-display text-lg text-primary mt-4">{i.t}</div>
            <div className="text-sm text-foreground mt-1">{i.v}</div>
            <div className="text-xs text-muted-foreground mt-1">{i.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Delta Dental", "Cigna", "Aetna", "MetLife", "Guardian", "United Concordia", "CareCredit",
  ];
  return (
    <section className="bg-surface border-t border-border py-10">
      <div className="container-x">
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold text-center">Insurance & Financing</div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((n) => (
            <div key={n} className="text-primary/70 font-display text-lg">{n}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
