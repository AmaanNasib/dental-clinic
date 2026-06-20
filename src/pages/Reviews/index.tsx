import { Star, Quote } from "lucide-react";
import { SiteLayout } from "../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../components/site/PageHero";


const reviews = [
  {
    name: "Sarah M.",
    text: "Transformative experience. Veneers look stunning and feel completely natural.",
    rating: 5,
  },
  {
    name: "James R.",
    text: "Best dental implant experience I could ask for. Painless and professional.",
    rating: 5,
  },
  {
    name: "Aisha K.",
    text: "After years of avoiding dentists, Bright Smile made me feel safe.",
    rating: 5,
  },
  {
    name: "David L.",
    text: "Same-day crown was incredible. In and out in 90 minutes.",
    rating: 5,
  },
  {
    name: "Maria P.",
    text: "Invisalign treatment exceeded expectations. The team is wonderful.",
    rating: 5,
  },
  {
    name: "Tom B.",
    text: "Honest pricing, beautiful clinic, expert care. Highly recommend.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Patient Love"
        title={
          <>
            4.9 stars from{" "}
            <span className="italic text-secondary">
              2,400+ patients.
            </span>
          </>
        }
        sub="Real reviews from real patients across Google, Yelp, and Healthgrades."
      />

      <section className="container-x py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-white border border-border"
          >
            <Quote className="w-8 h-8 text-secondary/30" />

            <div className="flex gap-0.5 mt-3">
              {Array.from({ length: review.rating }).map(
                (_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                )
              )}
            </div>

            <p className="mt-4 text-foreground leading-relaxed">
              "{review.text}"
            </p>

            <div className="mt-5 pt-5 border-t border-border font-semibold text-primary">
              {review.name}
            </div>
          </div>
        ))}
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}