import { PageHero } from "../../components/site/PageHero";
import { SiteLayout } from "../../components/site/SiteLayout";

function LegalPage({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title={title}
      />

      <section className="container-x py-12 max-w-3xl">
        <div className="prose-styles text-foreground/90 leading-relaxed space-y-4">
          <p>{body}</p>

          <p>
            Bright Smile Dental complies with all applicable
            federal, state, and local laws regarding patient
            privacy, accessibility, and care.
          </p>

          <p>
            If you have questions about this notice, please contact
            us at hello@brightsmile.dental.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      body="We respect and protect the privacy of every patient. This policy describes the information we collect, how we use it, and your rights."
    />
  );
}