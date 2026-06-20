import { PageHero } from "../../components/site/PageHero";
import { SiteLayout } from "../../components/site/SiteLayout";

export default function Accessibility() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Accessibility"
      />

      <section className="container-x py-12 max-w-3xl text-foreground/90 leading-relaxed space-y-4">
        <p>
          Bright Smile Dental is committed to providing a website
          accessible to the widest audience, regardless of ability.
          We follow WCAG 2.1 AA guidance.
        </p>
      </section>
    </SiteLayout>
  );
}