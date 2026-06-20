import { PageHero } from "../../components/site/PageHero";
import { SiteLayout } from "../../components/site/SiteLayout";

export default function HipaaNotice() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="HIPAA Notice of Privacy Practices"
      />

      <section className="container-x py-12 max-w-3xl text-foreground/90 leading-relaxed space-y-4">
        <p>
          This notice describes how medical information about you
          may be used and disclosed, and how you can get access to
          this information. Please review carefully.
        </p>
      </section>
    </SiteLayout>
  );
}