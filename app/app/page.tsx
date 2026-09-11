import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PhoneMockup from "@/components/PhoneMockup";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
        body="Your personal Metabolic Digital Twin, on your phone. MyAlly brings your health into view using your glucose, activity, wearables, food and medications into one connected picture, so you can gain meaningful insights and make better decisions."
      />

      <section className="px-[8vw] py-[10vh]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-medium leading-[1.25] tracking-[-0.01em] text-ink">
              Works with the devices you already have
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1rem] leading-[1.7] text-grey">
              MyAlly connects directly to your CGM, wearables and insulin devices &mdash; Dexcom,
              Whoop, Apple Watch, Oura Ring, NovoPen and more &mdash; so every reading feeds
              straight into your Metabolic Digital Twin without manual logging.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[380px]">
            <Image
              src={`${basePath}/app/connected-devices.png`}
              alt="MyAlly's Your devices screen, showing a Dexcom G7, Whoop, Apple Watch, Oura Ring and NovoPen all connected"
              width={925}
              height={1701}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

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
    </main>
  );
}
