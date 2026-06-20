import { useParams } from "react-router-dom";
import {
  Award,
  GraduationCap,
  Stethoscope,
  Star,
} from "lucide-react";


import drSmith from "../..//../assets/dr-smith.jpg";
import drJones from "../../../assets/dr-jones.jpg";
import drPatel from "../../../assets/dr-patel.jpg";
import { SiteLayout } from "../../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../../components/site/PageHero";

const profiles = {
  "dr-john-smith": {
    name: "Dr. John Smith",
    role: "Cosmetic & Implant Dentistry",
    img: drSmith,
    bio: "Dr. Smith has spent 18 years perfecting the art of cosmetic dentistry and dental implants. He is an AACD-accredited cosmetic dentist and a leading implantologist in New York.",
    quals: [
      "DDS, Columbia University",
      "AACD Accredited Member",
      "Fellow, American Academy of Implant Dentistry",
    ],
    exp: "18+ years",
    memberships: [
      "American Dental Association",
      "AACD",
      "AAID",
    ],
    awards: [
      "NY Top Doctor 2024",
      "Best Cosmetic Dentist NYC 2023",
      "Invisalign Diamond Provider",
    ],
    specs: [
      "Porcelain Veneers",
      "Full Mouth Implants",
      "Smile Makeover",
      "All-on-4",
    ],
  },

  "dr-emma-jones": {
    name: "Dr. Emma Jones",
    role: "General & Family Dentistry",
    img: drJones,
    bio: "Known for her gentle chair-side manner, Dr. Jones is the heart of our family dentistry program.",
    quals: [
      "DDS, NYU College of Dentistry",
      "Pediatric Care Certified",
    ],
    exp: "11+ years",
    memberships: [
      "American Dental Association",
      "Academy of General Dentistry",
    ],
    awards: [
      "NYC Patient Choice Award 2024",
      "Top Family Dentist 2023",
    ],
    specs: [
      "Family Dentistry",
      "Preventive Care",
      "Pediatric Dentistry",
      "Cleanings",
    ],
  },

  "dr-raj-patel": {
    name: "Dr. Raj Patel",
    role: "Orthodontics & Invisalign",
    img: drPatel,
    bio: "Dr. Patel is a Diamond+ Invisalign provider and certified orthodontist.",
    quals: [
      "DMD, Harvard School of Dental Medicine",
      "MS Orthodontics",
      "Diamond+ Invisalign Provider",
    ],
    exp: "14+ years",
    memberships: [
      "American Association of Orthodontists",
      "American Dental Association",
    ],
    awards: [
      "Invisalign Diamond+ 2022–2025",
      "Top Orthodontist NYC 2024",
    ],
    specs: [
      "Invisalign",
      "Clear Aligners",
      "Adult Orthodontics",
      "Teen Treatment",
    ],
  },
};

export default function DoctorDetail() {
  const { slug } = useParams();

  const doctor =
    profiles[slug as keyof typeof profiles];

  if (!doctor) {
    return (
      <SiteLayout>
        <PageHero
          eyebrow="Not Found"
          title="Doctor Not Found"
        />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container-x py-16 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow">
            {doctor.role}
          </span>

          <h1 className="font-display text-5xl lg:text-6xl text-primary mt-3">
            {doctor.name}
          </h1>

          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            {doctor.bio}
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <Info
              icon={GraduationCap}
              title="Qualifications"
              items={doctor.quals}
            />

            <Info
              icon={Stethoscope}
              title="Experience"
              items={[doctor.exp]}
            />

            <Info
              icon={Award}
              title="Memberships"
              items={doctor.memberships}
            />

            <Info
              icon={Star}
              title="Awards"
              items={doctor.awards}
            />
          </div>

          <div className="mt-10">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Specializations
            </div>

            <div className="flex flex-wrap gap-2">
              {doctor.specs.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1.5 rounded-full bg-surface border border-border text-sm"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}

function Info({
  icon: Icon,
  title,
  items,
}: {
  icon: any;
  title: string;
  items: string[];
}) {
  return (
    <div className="p-5 rounded-2xl border border-border">
      <div className="flex items-center gap-2 text-secondary">
        <Icon className="w-4 h-4" />
        <span className="text-xs uppercase tracking-wider font-semibold">
          {title}
        </span>
      </div>

      <ul className="mt-3 space-y-1.5 text-sm text-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}