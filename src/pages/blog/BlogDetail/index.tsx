import { useParams } from "react-router-dom";
import { SiteLayout } from "../../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../../components/site/PageHero";


export default function BlogDetail() {
  const { slug } = useParams();

  const title = (slug || "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  if (!slug) {
    return (
      <SiteLayout>
        <PageHero
          eyebrow="Not Found"
          title="Article Not Found"
        />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <article className="container-x py-16 max-w-3xl">
        <span className="eyebrow">Article</span>

        <h1 className="font-display text-4xl sm:text-5xl text-primary mt-4 leading-tight">
          {title}
        </h1>

        <div className="text-sm text-muted-foreground mt-3">
          By Dr. Emma Jones · 6 min read
        </div>

        <div className="mt-10 prose-styles space-y-5 text-foreground/90 leading-relaxed">
          <p>
            This is an article about{" "}
            <strong>{title.toLowerCase()}</strong>. Below you'll
            find expert guidance, transparent pricing details, and
            an honest comparison of options.
          </p>

          <p>
            At Bright Smile Dental, we believe in clear answers and
            unhurried conversations. If anything here raises a
            question, our team is one call away.
          </p>

          <h2 className="font-display text-2xl text-primary mt-8">
            Key Takeaways
          </h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              Modern technology has changed everything about cost
              and comfort.
            </li>

            <li>
              Most patients qualify for some form of insurance or
              financing.
            </li>

            <li>
              The best outcome comes from a personalized,
              expert-led plan.
            </li>
          </ul>
        </div>
      </article>

      <CTAStrip />
    </SiteLayout>
  );
}