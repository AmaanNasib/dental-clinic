
import smile1 from "../../assets/smile-1.jpg";
import heroDentist from "../../assets/hero-dentist.jpg";
import { SiteLayout } from "../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../components/site/PageHero";

export default function BeforeAfter() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Before & After"
        title={
          <>
            Real transformations,{" "}
            <span className="italic text-secondary">
              in detail.
            </span>
          </>
        }
        sub="Full-width before and after photography from real Bright Smile patients."
      />

      <section className="container-x py-12 space-y-16">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-5 items-center"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={smile1}
                alt="Before"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover grayscale"
              />

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-bold uppercase tracking-wider">
                Before
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroDentist}
                alt="After"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-wider">
                After
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="text-xs uppercase tracking-wider font-bold text-secondary">
                Case #{i}
              </div>

              <h3 className="font-display text-3xl text-primary mt-1">
                8 Porcelain Veneers · 6 Weeks
              </h3>

              <p className="mt-3 text-muted-foreground">
                "I never thought my smile could look this natural. The team
                listened to every detail."
              </p>
            </div>
          </div>
        ))}
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}