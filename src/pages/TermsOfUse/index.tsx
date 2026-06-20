import { PageHero } from "../../components/site/PageHero";
import { SiteLayout } from "../../components/site/SiteLayout";


export default function TermsOfUse() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
      />

      <section className="container-x py-12 max-w-3xl text-foreground/90 leading-relaxed space-y-4">
        <p>
          By using this website you agree to these terms.
          Content here is informational and not a substitute
          for in-person diagnosis or care.
        </p>
      </section>
    </SiteLayout>
  );
}