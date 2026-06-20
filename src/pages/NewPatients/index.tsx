import { Check } from "lucide-react";
import { SiteLayout } from "../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../components/site/PageHero";


export default function NewPatients() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="New Patients"
        title={
          <>
            Your first visit,{" "}
            <span className="italic text-secondary">
              made simple.
            </span>
          </>
        }
        sub="Here's everything you need to feel relaxed and prepared."
      />

      <section className="container-x py-12 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-3xl text-primary">
            What to Expect
          </h2>

          <ul className="mt-6 space-y-3">
            {[
              "Warm welcome and clinic tour",
              "Comprehensive exam and digital X-rays",
              "Honest conversation about your goals",
              "Clear, transparent treatment plan",
              "Insurance verification and financing review",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-surface border border-border">
          <h3 className="font-display text-2xl text-primary">
            Patient Forms
          </h3>

          <p className="text-sm text-muted-foreground mt-2">
            Save time at your visit — complete your forms online
            ahead of time.
          </p>

          <a
            href="#"
            className="btn-primary mt-5"
          >
            Download Forms
          </a>

          <h3 className="font-display text-2xl text-primary mt-10">
            Insurance & Financing
          </h3>

          <p className="text-sm text-muted-foreground mt-2">
            We accept most major PPOs and offer flexible
            CareCredit financing.
          </p>
        </div>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}