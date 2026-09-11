import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PhoneMockup from "@/components/PhoneMockup";

export const metadata: Metadata = {
  title: "MyAlly — SEER Health",
  description:
    "MyAlly brings your glucose, activity, wearables, labs, food and medications into one connected picture, so you can see how they relate and what to do next.",
};

const screens = [
  { src: "/mockups/seer-cycle-insights.png", label: "Cycle Insights" },
  { src: "/mockups/seer-cycle-home.png", label: "Cycle-aware home screen" },
  { src: "/mockups/seer-todays-guidance.png", label: "Today's guidance" },
];

// Mobile stacks these in a different order than the desktop fan (which
// features the home screen front and center): home, insights, guidance.
const mobileScreens = [screens[1], screens[0], screens[2]];

export default function MyAllyPage() {
  return (
    <main>
      <PageHero
        headline="MyAlly"
        body="Your personal Metabolic Digital Twin, on your phone. MyAlly brings your glucose, activity, wearables, labs, food and medications into one connected picture, so you can see how they relate and what to do next."
      />

      <section className="overflow-hidden bg-paper px-[8vw] py-[12vh]">
        {/* Mobile: stacked, full-size phones — the fan below gets too narrow to render legibly */}
        <div className="mx-auto flex max-w-[260px] flex-col items-center gap-10 md:hidden">
          {mobileScreens.map((screen) => (
            <PhoneMockup key={screen.src} src={screen.src} label={screen.label} className="w-full" />
          ))}
        </div>

        {/* Tablet+: staggered fan, home screen featured front and center */}
        <div className="relative mx-auto hidden max-w-[640px] md:block">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[80px]"
            style={{ background: "radial-gradient(circle, #8A52F0, transparent 70%)" }}
          />
          <div className="relative flex items-end justify-center">
            <div className="relative z-0 w-[34%] -mr-8 translate-y-6 rotate-[-8deg] opacity-90">
              <PhoneMockup src={screens[0].src} label={screens[0].label} />
            </div>
            <div className="relative z-10 w-[42%]">
              <PhoneMockup src={screens[1].src} label={screens[1].label} priority />
            </div>
            <div className="relative z-0 w-[34%] -ml-8 translate-y-6 rotate-[8deg] opacity-90">
              <PhoneMockup src={screens[2].src} label={screens[2].label} />
            </div>
          </div>
        </div>
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
