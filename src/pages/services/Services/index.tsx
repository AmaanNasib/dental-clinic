import { Link } from "react-router-dom";
import {
  Sparkles,
  Stethoscope,
  Smile,
  Zap,
  HeartPulse,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { SiteLayout } from "../../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../../components/site/PageHero";


const cats = [
  {
    icon: Stethoscope,
    slug: "general-dentistry",
    title: "General Dentistry",
    desc: "Cleanings, fillings, root canals and preventive care.",
    subs: [
      "dental-cleaning",
      "dental-fillings",
      "root-canal",
      "tooth-extraction",
    ],
  },
  {
    icon: Sparkles,
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    desc: "Veneers, whitening, bonding, and smile makeovers.",
    subs: [
      "veneers",
      "teeth-whitening",
      "dental-bonding",
      "smile-makeover",
    ],
  },
  {
    icon: Zap,
    slug: "dental-implants",
    title: "Dental Implants",
    desc: "Single tooth to full mouth restoration.",
    subs: [
      "single-tooth-implant",
      "all-on-4-implants",
      "full-mouth-restoration",
    ],
  },
  {
    icon: Smile,
    slug: "invisalign",
    title: "Invisalign",
    desc: "Discreet clear aligner orthodontics.",
    subs: [
      "invisalign-cost",
      "invisalign-vs-braces",
    ],
  },
  {
    icon: HeartPulse,
    slug: "emergency-dentist",
    title: "Emergency Dentistry",
    desc: "Same-day pain relief and urgent care.",
    subs: [
      "tooth-pain",
      "chipped-tooth",
      "broken-crown",
      "same-day-emergency",
    ],
  },
  {
    icon: ShieldCheck,
    slug: "sedation-dentistry",
    title: "Sedation Dentistry",
    desc: "Anxiety-free dental visits.",
    subs: [],
  },
];

export default function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Every kind of care,{" "}
            <span className="italic text-secondary">
              beautifully delivered.
            </span>
          </>
        }
        sub="From a 6-month check-up to a full smile transformation — every service in one place."
      />

      <section className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cats.map((category) => (
          <Link
            key={category.title + category.slug}
            to={`/services/${category.slug}`}
            className="group p-8 rounded-2xl bg-white border border-border hover:border-secondary hover:-translate-y-1 transition-all hover:shadow-soft"
          >
            <category.icon className="w-9 h-9 text-secondary" />

            <h2 className="font-display text-2xl text-primary mt-4">
              {category.title}
            </h2>

            <p className="text-sm text-muted-foreground mt-2">
              {category.desc}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-secondary">
              Learn More

              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}