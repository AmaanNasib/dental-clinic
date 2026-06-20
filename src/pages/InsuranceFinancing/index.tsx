import { CTAStrip, PageHero } from "../../components/site/PageHero";
import { SiteLayout } from "../../components/site/SiteLayout";

const plans = [
  "Delta Dental",
  "Aetna",
  "Cigna",
  "MetLife",
  "United Healthcare",
  "CareCredit",
  "Guardian",
  "Humana",
  "Anthem",
  "BlueCross",
  "Principal",
  "Sun Life",
];

export default function InsuranceFinancing() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insurance & Financing"
        title={
          <>
            In-network with{" "}
            <span className="italic text-secondary">
              most major plans.
            </span>
          </>
        }
        sub="We make insurance simple and offer flexible financing options to fit any budget."
      />

      <section className="container-x py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {plans.map((plan) => (
            <div
              key={plan}
              className="h-24 rounded-xl border border-border bg-white grid place-items-center text-sm font-semibold text-primary text-center px-3"
            >
              {plan}
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}