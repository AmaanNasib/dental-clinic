import { useParams } from "react-router-dom";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { SiteLayout } from "../../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../../components/site/PageHero";


const data: Record<
  string,
  {
    name: string;
    address: string;
    phone: string;
  }
> = {
  manhattan: {
    name: "Manhattan",
    address: "432 Park Avenue, New York, NY 10022",
    phone: "(212) 555-0199",
  },
  brooklyn: {
    name: "Brooklyn",
    address: "85 Smith Street, Brooklyn, NY 11201",
    phone: "(718) 555-0142",
  },
  queens: {
    name: "Queens",
    address: "37-12 Broadway, Astoria, NY 11103",
    phone: "(718) 555-0177",
  },
  "long-island": {
    name: "Long Island",
    address: "120 Old Country Road, Garden City, NY 11530",
    phone: "(516) 555-0188",
  },
};

export default function LocationDetail() {
  const { slug } = useParams();

  const location =
    data[slug || ""] || {
      name: slug || "Unknown Location",
      address: "Address coming soon",
      phone: "(212) 555-0199",
    };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Location"
        title={
          <>
            Bright Smile{" "}
            <span className="italic text-secondary">
              {location.name}
            </span>
          </>
        }
        sub={location.address}
      />

      <section className="container-x py-12 grid lg:grid-cols-3 gap-6">
        <div className="p-7 rounded-2xl bg-white border border-border">
          <Phone className="w-6 h-6 text-secondary" />

          <div className="font-display text-xl text-primary mt-3">
            Call Us
          </div>

          <div className="text-muted-foreground mt-1">
            {location.phone}
          </div>
        </div>

        <div className="p-7 rounded-2xl bg-white border border-border">
          <MapPin className="w-6 h-6 text-secondary" />

          <div className="font-display text-xl text-primary mt-3">
            Address
          </div>

          <div className="text-muted-foreground mt-1">
            {location.address}
          </div>
        </div>

        <div className="p-7 rounded-2xl bg-white border border-border">
          <Clock className="w-6 h-6 text-secondary" />

          <div className="font-display text-xl text-primary mt-3">
            Hours
          </div>

          <div className="text-muted-foreground mt-1">
            Mon–Sat · 8a–7p
            <br />
            Sun · Closed
          </div>
        </div>
      </section>

      <section className="container-x pb-12">
        <div className="aspect-[21/9] rounded-2xl overflow-hidden border border-border bg-surface grid place-items-center text-muted-foreground">
          <iframe
            title="map"
            loading="lazy"
            className="w-full h-full"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              location.address
            )}&output=embed`}
          />
        </div>
      </section>

      <section className="container-x pb-12">
        <h2 className="font-display text-3xl text-primary">
          Local Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-border"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="mt-3 text-foreground">
                "Best dental experience I've had in {location.name}."
              </p>

              <div className="mt-4 text-sm font-semibold text-primary">
                Verified Patient
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}