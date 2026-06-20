
import technology from "../../assets/technology.jpg";
import { SiteLayout } from "../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../components/site/PageHero";

const tech = [
  {
    t: "3D Intra-Oral Scanner",
    d: "Goodbye gooey impressions — fast, accurate digital scans.",
  },
  {
    t: "Digital X-Ray",
    d: "90% less radiation than traditional film X-rays.",
  },
  {
    t: "CBCT 3D Imaging",
    d: "True 3D view for implants, root canals, and surgery.",
  },
  {
    t: "Laser Dentistry",
    d: "Minimally invasive treatment with faster healing.",
  },
  {
    t: "Same-Day Crowns (CEREC)",
    d: "Walk in needing a crown, walk out with one — same visit.",
  },
  {
    t: "AI Smile Design",
    d: "See your future smile before any treatment begins.",
  },
];

export default function AdvancedTechnology() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Technology"
        title={
          <>
            Modern tools,{" "}
            <span className="italic text-secondary">
              gentler care.
            </span>
          </>
        }
        sub="A tour of the technology that powers shorter visits, faster healing, and more beautiful results."
      />

      <section className="container-x py-12 grid lg:grid-cols-2 gap-10 items-center">
        <img
          src={technology}
          alt="Technology"
          loading="lazy"
          className="rounded-3xl w-full h-[480px] object-cover"
        />

        <div className="space-y-5">
          {tech.map((item) => (
            <div
              key={item.t}
              className="p-6 rounded-2xl bg-white border border-border"
            >
              <div className="font-display text-xl text-primary">
                {item.t}
              </div>

              <div className="text-sm text-muted-foreground mt-1">
                {item.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}