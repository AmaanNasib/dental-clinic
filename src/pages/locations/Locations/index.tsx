import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";
import { SiteLayout } from "../../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../../components/site/PageHero";


const locations = [
  {
    slug: "manhattan",
    name: "Manhattan",
    address: "432 Park Avenue, NY 10022",
    phone: "(212) 555-0199",
  },
  {
    slug: "brooklyn",
    name: "Brooklyn",
    address: "85 Smith Street, NY 11201",
    phone: "(718) 555-0142",
  },
  {
    slug: "queens",
    name: "Queens",
    address: "37-12 Broadway, NY 11103",
    phone: "(718) 555-0177",
  },
  {
    slug: "long-island",
    name: "Long Island",
    address: "120 Old Country Rd, NY 11530",
    phone: "(516) 555-0188",
  },
];

export default function Locations() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Locations"
        title={
          <>
            Find us across{" "}
            <span className="italic text-secondary">
              New York.
            </span>
          </>
        }
        sub="Four clinics, one standard of care."
      />

      <section className="container-x py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {locations.map((location) => (
          <Link
            key={location.slug}
            to={`/locations/${location.slug}`}
            className="group p-7 rounded-2xl border border-border bg-white hover:border-secondary hover:-translate-y-1 transition-all hover:shadow-soft"
          >
            <MapPin className="w-6 h-6 text-secondary" />

            <h3 className="font-display text-2xl text-primary mt-4">
              {location.name}
            </h3>

            <p className="text-sm text-muted-foreground mt-2">
              {location.address}
            </p>

            <div className="mt-5 pt-5 border-t border-border space-y-1.5">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-3.5 h-3.5 text-secondary" />
                {location.phone}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-3.5 h-3.5 text-secondary" />
                Mon–Sat · 8a–7p
              </div>
            </div>
          </Link>
        ))}
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}