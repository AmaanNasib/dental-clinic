import { Link } from "react-router-dom";


import smile1 from "../../../assets/smile-1.jpg";
import doctorsTeam from "../../../assets/doctors-team.jpg";
import clinicInterior from "../../../assets/clinic-interior.jpg";
import heroDentist from "../../../assets/hero-dentist.jpg";
import { SiteLayout } from "../../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../../components/site/PageHero";

const cats: [string, string][] = [
  ["all", "All Smiles"],
  ["veneers", "Veneers"],
  ["implants", "Implants"],
  ["invisalign", "Invisalign"],
  ["smile-makeover", "Smile Makeover"],
];

const items = [
  {
    img: smile1,
    cat: "Veneers",
    title: "8-veneer smile design",
    doc: "Dr. Smith",
  },
  {
    img: heroDentist,
    cat: "Implants",
    title: "Single anterior implant",
    doc: "Dr. Jones",
  },
  {
    img: doctorsTeam,
    cat: "Invisalign",
    title: "12-month aligner case",
    doc: "Dr. Patel",
  },
  {
    img: clinicInterior,
    cat: "Smile Makeover",
    title: "Full reconstruction",
    doc: "Dr. Smith",
  },
  {
    img: smile1,
    cat: "Veneers",
    title: "Minimal-prep veneers",
    doc: "Dr. Jones",
  },
  {
    img: heroDentist,
    cat: "Implants",
    title: "All-on-4 restoration",
    doc: "Dr. Patel",
  },
];

export default function SmileGallery() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Smile Gallery"
        title={
          <>
            A portfolio of{" "}
            <span className="italic text-secondary">
              real confidence.
            </span>
          </>
        }
        sub="Every photo on this page is a real Bright Smile patient. Browse by category or by doctor."
      />

      <section className="container-x">
        <div className="flex flex-wrap gap-2 pb-8">
          {cats.map(([slug, label]) => (
            <Link
              key={slug}
              to={
                slug === "all"
                  ? "/smile-gallery"
                  : `/smile-gallery/${slug}`
              }
              className="px-4 py-2 rounded-full border border-border text-sm hover:border-secondary hover:text-secondary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white border border-border"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-5">
                <div className="text-[10px] uppercase tracking-wider font-bold text-secondary">
                  {item.cat}
                </div>

                <div className="font-display text-xl text-primary mt-1">
                  {item.title}
                </div>

                <div className="text-sm text-muted-foreground mt-1">
                  By {item.doc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}