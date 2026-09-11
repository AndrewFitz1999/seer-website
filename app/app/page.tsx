import type { Metadata } from "next";
import Image from "next/image";
import MyAllyScreens from "@/components/MyAllyScreens";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "MyAlly — SEER Health",
  description:
    "MyAlly brings your glucose, activity, wearables, labs, food and medications into one connected picture, so you can see how they relate and what to do next.",
};

export default function MyAllyPage() {
  return (
    <main>
      <section className="px-[8vw] pt-[18vh] pb-[5vh]">
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
              height={1110}
              className="hidden h-auto w-full rounded-2xl lg:block"
              priority
            />
            {/* Mobile: shortened portrait crop, stacked below the text */}
            <Image
              src={`${basePath}/app/connected-devices.png`}
              alt="MyAlly's Your devices screen, showing a Dexcom G7, Whoop, Apple Watch, Oura Ring and NovoPen all connected"
              width={925}
              height={1240}
              className="h-auto w-full rounded-2xl lg:hidden"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-paper px-[8vw] pt-[5vh] pb-[12vh]">
        <div className="mx-auto mb-[6vh] max-w-[560px] text-center">
          <h2 className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
            See what MyAlly shows you, every day
          </h2>
        </div>

        <MyAllyScreens />
      </section>
    </main>
  );
}
