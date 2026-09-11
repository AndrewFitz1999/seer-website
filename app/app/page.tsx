import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="px-[8vw] pt-[18vh] pb-[9vh]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="max-w-[22ch] font-display text-[clamp(2.2rem,4.8vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
              MyAlly
            </h1>
            <p className="mt-6 max-w-[60ch] text-[1.05rem] leading-[1.7] text-grey">
              Your personal Metabolic Digital Twin, on your phone. MyAlly brings your health into
              view using your glucose, activity, wearables, food and medications into one
              connected picture, so you can gain meaningful insights and make better decisions.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[420px]">
            {/* Desktop: cropped square so it sits neatly beside the opening text */}
            <Image
              src={`${basePath}/app/connected-devices-square.png`}
              alt="MyAlly's Your devices screen, showing a Dexcom G7, Whoop, Apple Watch, Oura Ring and NovoPen all connected"
              width={925}
              height={925}
              className="hidden h-auto w-full rounded-2xl lg:block"
              priority
            />
            {/* Mobile: original portrait crop, stacked below the text */}
            <Image
              src={`${basePath}/app/connected-devices.png`}
              alt="MyAlly's Your devices screen, showing a Dexcom G7, Whoop, Apple Watch, Oura Ring and NovoPen all connected"
              width={925}
              height={1701}
              className="h-auto w-full rounded-2xl lg:hidden"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-paper px-[8vw] py-[12vh]">
        <div className="mx-auto mb-[6vh] max-w-[560px] text-center">
          <h2 className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
            See what MyAlly shows you, every day
          </h2>
        </div>

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
