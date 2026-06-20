import { Link } from "react-router-dom";


import clinicInterior from "../../assets/clinic-interior.jpg";
import doctorsTeam from "../../assets/doctors-team.jpg";
import { SiteLayout } from "../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../components/site/PageHero";

export default function AboutUs() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A decade of dentistry,{" "}
            <span className="italic text-secondary">
              designed around you.
            </span>
          </>
        }
        sub="From a single Manhattan clinic to four locations serving 12,000+ patients across New York — our story is one of craft, care, and stubborn attention to detail."
      />

      <section className="container-x py-16 grid md:grid-cols-2 gap-10">
        <img
          src={clinicInterior}
          alt="Clinic"
          loading="lazy"
          className="rounded-3xl w-full h-[440px] object-cover"
        />

        <div>
          <h2 className="font-display text-4xl text-primary">
            Our mission
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            To make every patient feel genuinely cared for — through honest
            conversations, modern technology, and beautiful, lasting results.
            We treat smiles like art, and people like family.
          </p>

          <h2 className="font-display text-4xl text-primary mt-10">
            Our vision
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            To be New York's most-loved dental studio — known equally for
            clinical excellence and for warmth.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl text-primary">
              Community & Service
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every year, our team delivers free dental care to over 400
              children through our Bright Futures program. We also partner
              with NYC shelters and schools.
            </p>

            <Link
              to="/contact-us"
              className="btn-primary mt-8"
            >
              Get Involved
            </Link>
          </div>

          <img
            src={doctorsTeam}
            alt="Team"
            loading="lazy"
            className="rounded-3xl w-full h-[440px] object-cover"
          />
        </div>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}