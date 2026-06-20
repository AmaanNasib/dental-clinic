import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SiteLayout } from "../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../components/site/PageHero";


const faqs = [
  {
    q: "Do you accept insurance?",
    a: "Yes — we work with most major PPO plans including Delta Dental, Aetna, Cigna, MetLife, United Healthcare and more.",
  },
  {
    q: "How much do dental implants cost?",
    a: "A single implant ranges from $3,500 to $5,500 including the crown. We provide a transparent quote at your free consultation.",
  },
  {
    q: "How long does Invisalign take?",
    a: "Most cases take 6 to 18 months depending on complexity.",
  },
  {
    q: "What happens during my first visit?",
    a: "A comprehensive exam, digital X-rays, 3D scan if needed, and a relaxed conversation about your goals — about 60 minutes.",
  },
  {
    q: "Is sedation dentistry safe?",
    a: "Absolutely — all options are FDA-approved and administered by trained, certified clinicians with full vital monitoring.",
  },
  {
    q: "How long do veneers last?",
    a: "Quality porcelain veneers typically last 12–20 years with proper care.",
  },
  {
    q: "Do you see children?",
    a: "Yes — Dr. Jones leads our family and pediatric program for ages 3+.",
  },
  {
    q: "Can I get a same-day appointment?",
    a: "Yes — we hold same-day slots for emergencies and new patients every day.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQs"
        title={
          <>
            Honest answers,{" "}
            <span className="italic text-secondary">
              no jargon.
            </span>
          </>
        }
        sub="The questions our patients ask the most."
      />

      <section className="container-x py-12 max-w-3xl">
        <ul className="divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => (
            <li key={index}>
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl text-primary">
                  {faq.q}
                </span>

                <span className="w-9 h-9 rounded-full border border-border grid place-items-center text-secondary shrink-0">
                  {open === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ease-out ${open === index
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}