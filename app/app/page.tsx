import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PhoneMockup from "@/components/PhoneMockup";

export const metadata: Metadata = {
  title: "MyAlly — SEER Health",
  description:
    "MyAlly brings your glucose, activity, wearables, labs, food and medications into one connected picture, so you can see how they relate and what to do next.",
};

export default function MyAllyPage() {
  return (
    <main>
      <PageHero
        headline="MyAlly"
        body="Your personal Metabolic Digital Twin, on your phone. MyAlly brings your glucose, activity, wearables, labs, food and medications into one connected picture, so you can see how they relate and what to do next."
      />

      <section className="overflow-hidden bg-paper-2 px-[8vw] py-[12vh]">
        {/* Mobile: stacked, full-size phones — the fan below gets too narrow to render legibly */}
        <div className="mx-auto flex max-w-[260px] flex-col items-center gap-10 md:hidden">
          <PhoneMockup src="/mockups/seer-cycle-home.html" label="Cycle-aware home screen" className="w-full" />
          <PhoneMockup label="Glucose forecast" className="w-full" />
          <PhoneMockup label="Today view" className="w-full" />
        </div>

        {/* Tablet+: staggered fan, real screen featured front and center */}
        <div className="relative mx-auto hidden max-w-[640px] md:block">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[80px]"
            style={{ background: "radial-gradient(circle, #8A52F0, transparent 70%)" }}
          />
          <div className="relative flex items-end justify-center">
            <div className="relative z-0 w-[34%] -mr-8 translate-y-6 rotate-[-8deg] opacity-90">
              <PhoneMockup label="Glucose forecast" />
            </div>
            <div className="relative z-10 w-[42%]">
              <PhoneMockup src="/mockups/seer-cycle-home.html" label="Cycle-aware home screen" />
            </div>
            <div className="relative z-0 w-[34%] -ml-8 translate-y-6 rotate-[8deg] opacity-90">
              <PhoneMockup label="Today view" />
            </div>
          </div>
        </div>
        <p className="mt-14 text-center text-[0.8rem] text-grey-dim">
          Additional screens to be supplied. Placeholders shown for layout only.
        </p>
      </section>

      <section id="contribute" className="px-[8vw] py-[10vh]">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="max-w-[22ch] font-display text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.35] font-medium text-ink">
              Your data can help make it more accurate for the next person.
            </p>
          </div>

          <div>
            <p className="max-w-[54ch] text-[0.95rem] leading-[1.7] text-grey">
              With your consent, real-world data from MyAlly helps extend the same validation
              work already underway in Type 1 and Type 2 diabetes. If you are living with
              diabetes or another metabolic condition, you can opt in to contribute your data to
              ongoing studies and help improve the model for everyone who uses it.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full border border-ink/25 px-[1.7rem] py-[0.85rem] text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/60"
            >
              Ask about current studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
