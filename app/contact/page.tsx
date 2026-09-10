import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCard from "@/components/ContactCard";

export const metadata: Metadata = {
  title: "Contact — SEER Health",
  description: "Get in touch with SEER Health for general enquiries or investor relations.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        headline="Contact us"
        body="Whether you're exploring SEER Health as a partner, a platform, or an investment, we'd like to hear from you."
      />

      <section className="px-[8vw] py-[9vh]">
        <div className="mx-auto grid max-w-[1000px] gap-14 md:grid-cols-2">
          <ContactCard
            title="General enquiries"
            context="Questions about the platform, partnerships, or anything else."
            subjectPrefix="General enquiry"
          />
          <ContactCard
            title="For investors"
            context="Reach out for investor relations and funding conversations."
            subjectPrefix="Investor enquiry"
          />
        </div>
      </section>
    </main>
  );
}
