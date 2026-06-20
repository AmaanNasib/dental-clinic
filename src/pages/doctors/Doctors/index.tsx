import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";


import drSmith from "../../../assets/dr-smith.jpg";
import drJones from "../../../assets/dr-jones.jpg";
import drPatel from "../../../assets/dr-patel.jpg";
import { SiteLayout } from "../../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../../components/site/PageHero";

const doctors = [
  {
    slug: "dr-john-smith",
    name: "Dr. John Smith",
    role: "Cosmetic & Implant Dentistry",
    img: drSmith,
  },
  {
    slug: "dr-emma-jones",
    name: "Dr. Emma Jones",
    role: "General & Family Dentistry",
    img: drJones,
  },
  {
    slug: "dr-raj-patel",
    name: "Dr. Raj Patel",
    role: "Orthodontics & Invisalign",
    img: drPatel,
  },
];

export default function Doctors() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Meet The Team"
        title={
          <>
            Doctors you can{" "}
            <span className="italic text-secondary">
              actually trust.
            </span>
          </>
        }
        sub="Every doctor on our team is hand-picked for both clinical mastery and warmth. Get to know them."
      />

      <section className="container-x py-16 grid md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Link
            key={doctor.slug}
            to={`/our-doctors/${doctor.slug}`}
            className="group block rounded-2xl overflow-hidden bg-white border border-border hover:border-secondary hover:shadow-soft transition-all"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={doctor.img}
                alt={doctor.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="p-6 flex items-start justify-between gap-4">
              <div>
                <div className="font-display text-2xl text-primary">
                  {doctor.name}
                </div>

                <div className="text-sm text-muted-foreground mt-1">
                  {doctor.role}
                </div>
              </div>

              <ArrowUpRight className="w-5 h-5 text-secondary mt-1" />
            </div>
          </Link>
        ))}
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}