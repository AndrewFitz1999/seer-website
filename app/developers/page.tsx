import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Get API access — SEER Health",
  description:
    "Tap into the Metabolic Digital Twin platform directly. Register your details and we'll notify you when access opens in your region.",
};

export default function DevelopersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Developers"
        headline="Get API access"
        body="Tap into the Metabolic Digital Twin platform directly. Register your details and we'll notify you when access opens in your region."
      />

      <section className="px-[8vw] py-[8vh]">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="max-w-[26ch] font-display text-[clamp(1.3rem,2.4vw,1.8rem)] leading-[1.35] font-medium text-ink">
              The MDT platform is not yet available in your region.
            </p>
            <p className="mt-6 max-w-[46ch] text-[0.95rem] leading-[1.7] text-grey">
              Join the waitlist and we&rsquo;ll reach out as soon as access opens up. Telling us
              where you&rsquo;re building helps us prioritise rollout.
            </p>
          </div>

          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
