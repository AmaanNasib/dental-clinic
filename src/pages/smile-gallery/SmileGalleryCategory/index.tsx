import { useParams } from "react-router-dom";


import smile1 from "../../../assets/smile-1.jpg";
import { SiteLayout } from "../../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../../components/site/PageHero";

export default function SmileGalleryCategory() {
  const { category } = useParams();

  const label = (category || "").replace(/-/g, " ");

  if (!category) {
    return (
      <SiteLayout>
        <PageHero
          eyebrow="Not Found"
          title="Category Not Found"
        />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Smile Gallery"
        title={
          <span className="capitalize">
            {label} Transformations
          </span>
        }
        sub="Real patients. Real results."
      />

      <section className="container-x py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white border border-border"
          >
            <img
              src={smile1}
              alt={`${label} case ${index + 1}`}
              loading="lazy"
              className="w-full aspect-square object-cover"
            />

            <div className="p-5">
              <div className="text-[10px] uppercase tracking-wider font-bold text-secondary capitalize">
                {label}
              </div>

              <div className="font-display text-xl text-primary mt-1">
                Case #{index + 1}
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}