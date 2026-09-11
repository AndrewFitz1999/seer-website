import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCard from "@/components/ContactCard";

export const metadata: Metadata = {
  title: "Contact — SEER Health",
  description: "Get in touch with SEER Health for general enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        headline="Contact us"
        body="Whether you're exploring SEER Health as a partner or a platform, we'd like to hear from you."
      />

      <section className="px-[8vw] py-[9vh]">
        <div className="mx-auto max-w-[500px]">
          <ContactCard
            title="General enquiries"
            context="Questions about the platform, partnerships, or anything else."
            subjectPrefix="General enquiry"
          />
        </div>
      </section>
    </main>
  );
}
