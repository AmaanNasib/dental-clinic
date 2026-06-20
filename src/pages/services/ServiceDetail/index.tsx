import { Link, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import { SiteLayout } from "../../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../../components/site/PageHero";


const titles: Record<
  string,
  {
    title: string;
    desc: string;
    sub?: string[];
  }
> = {
  "general-dentistry": {
    title: "General Dentistry",
    desc: "Cleanings, fillings, root canals and preventive care that keep your smile healthy for life.",
    sub: [
      "dental-cleaning",
      "dental-fillings",
      "root-canal",
      "tooth-extraction",
    ],
  },

  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    desc: "Beautifully designed veneers, whitening, bonding, and full smile makeovers.",
    sub: [
      "veneers",
      "teeth-whitening",
      "dental-bonding",
      "smile-makeover",
    ],
  },

  "dental-implants": {
    title: "Dental Implants",
    desc: "Replace one tooth or all of them with permanent, natural-looking implants.",
    sub: [
      "single-tooth-implant",
      "all-on-4-implants",
      "full-mouth-restoration",
    ],
  },

  "invisalign": {
    title: "Invisalign",
    desc: "Diamond+ Invisalign provider with a personalized treatment plan for every smile.",
    sub: [
      "invisalign-cost",
      "invisalign-vs-braces",
    ],
  },

  "emergency-dentist": {
    title: "Emergency Dentistry",
    desc: "Same-day appointments for pain, broken teeth, and dental emergencies.",
    sub: [
      "tooth-pain",
      "chipped-tooth",
      "broken-crown",
      "same-day-emergency",
    ],
  },

  "dental-cleaning": {
    title: "Dental Cleaning",
    desc: "Professional cleanings that remove plaque, polish enamel, and brighten your smile.",
  },

  "dental-fillings": {
    title: "Dental Fillings",
    desc: "Tooth-colored composite fillings that restore strength and beauty seamlessly.",
  },

  "root-canal": {
    title: "Root Canal",
    desc: "Gentle, modern root canal therapy that relieves pain and saves your tooth.",
  },

  "tooth-extraction": {
    title: "Tooth Extraction",
    desc: "Safe, comfortable extractions including wisdom teeth, with sedation options.",
  },

  "veneers": {
    title: "Porcelain Veneers",
    desc: "Custom-crafted veneers designed for your face, your bite, and your goals.",
  },

  "teeth-whitening": {
    title: "Teeth Whitening",
    desc: "Professional in-office whitening — visible results in a single visit.",
  },

  "dental-bonding": {
    title: "Dental Bonding",
    desc: "Quick, affordable repairs for chips, gaps, and discoloration.",
  },

  "smile-makeover": {
    title: "Smile Makeover",
    desc: "A fully designed, multi-procedure plan to transform your entire smile.",
  },

  "single-tooth-implant": {
    title: "Single Tooth Implant",
    desc: "Replace a missing tooth permanently with a titanium implant and crown.",
  },

  "all-on-4-implants": {
    title: "All-on-4 Implants",
    desc: "A full arch of new teeth supported by just four implants — in a single day.",
  },

  "full-mouth-restoration": {
    title: "Full Mouth Restoration",
    desc: "Comprehensive reconstruction combining implants, crowns, and aesthetics.",
  },

  "invisalign-cost": {
    title: "Invisalign Cost",
    desc: "Transparent Invisalign pricing and flexible monthly payment options.",
  },

  "invisalign-vs-braces": {
    title: "Invisalign vs Braces",
    desc: "Compare aligners and braces — comfort, speed, cost, and results.",
  },

  "tooth-pain": {
    title: "Tooth Pain",
    desc: "Same-day diagnosis and pain relief from any kind of toothache.",
  },

  "chipped-tooth": {
    title: "Chipped Tooth",
    desc: "Quick cosmetic repairs for chipped or fractured teeth.",
  },

  "broken-crown": {
    title: "Broken Crown",
    desc: "Same-day crown repair or replacement with CEREC technology.",
  },

  "same-day-emergency": {
    title: "Same-Day Emergency",
    desc: "Walk-in dental emergency care, 7 days a week.",
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();

  const service =
    titles[slug || ""] || {
      title: (slug || "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      desc: "Service detail.",
    };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service"
        title={service.title}
        sub={service.desc}
      />

      <section className="container-x py-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6 text-foreground/90 leading-relaxed">
          <p>
            At Bright Smile Dental, we approach{" "}
            <strong>
              {service.title.toLowerCase()}
            </strong>{" "}
            with the same precision and warmth we bring to every
            treatment.
          </p>

          <h2 className="font-display text-3xl text-primary mt-8">
            What To Expect
          </h2>

          <ul className="space-y-2.5">
            {[
              "Comprehensive consultation and digital scans",
              "Transparent, itemized treatment plan",
              "Comfortable, sedation-friendly environment",
              "Clear pre and post-care instructions",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {service.sub && service.sub.length > 0 && (
            <>
              <h2 className="font-display text-3xl text-primary mt-10">
                Related Treatments
              </h2>

              <div className="flex flex-wrap gap-2">
                {service.sub.map((sub) => (
                  <Link
                    key={sub}
                    to={`/services/${sub}`}
                    className="px-4 py-2 rounded-full border border-border text-sm hover:border-secondary hover:text-secondary transition-colors"
                  >
                    {sub.replace(/-/g, " ")}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="lg:col-span-4">
          <div className="rounded-2xl bg-surface border border-border p-7 sticky top-28">
            <div className="font-display text-2xl text-primary">
              Free Consultation
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              Book a complimentary visit — we'll walk you through
              everything, no pressure.
            </p>

            <Link
              to="/contact-us"
              className="btn-primary mt-5 w-full"
            >
              Book Now
            </Link>
          </div>
        </aside>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}