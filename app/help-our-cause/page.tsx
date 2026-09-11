import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCard from "@/components/ContactCard";

export const metadata: Metadata = {
  title: "Help Our Cause — SEER Health",
  description:
    "Donate your data to help SEER Health build and improve its technology, and extend validation work already underway in Type 1 and Type 2 diabetes.",
};

export default function HelpOurCausePage() {
  return (
    <main>
      <PageHero
        headline="Help Our Cause"
        body="Donate your data to help us build and improve on our technology offerings. With your consent, real-world data will help extend the same validation work already underway in Type 1 and Type 2 diabetes. If you are living with diabetes or another metabolic condition, you can opt in to contribute your data to ongoing studies and help improve the model for everyone who uses it."
      />

      <section className="px-[8vw] py-[9vh]">
        <div className="mx-auto max-w-[600px]">
          <ContactCard
            title="Sign up"
            context="Help us accelerate the development of our technology. If you are collecting any physiological data that you wish to share, regardless of whether you are living with metabolic syndrome, sign up below."
            subjectPrefix="Data sign up"
            submitLabel="Sign up"
          />
        </div>
      </section>
    </main>
  );
}
