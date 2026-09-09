import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "SEER App — SEER Health",
  description:
    "Your personal Metabolic Digital Twin, on your phone. See how food, sleep and activity move your glucose, before they happen.",
};

const screens = [
  "Today view",
  "Glucose forecast",
  "Contribute your data",
];

export default function SeerAppPage() {
  return (
    <main>
      <PageHero
        eyebrow="For consumers"
        headline="SEER App"
        body="Your personal Metabolic Digital Twin, on your phone. See how food, sleep and activity move your glucose, before they happen."
      />

      <section className="border-b border-ink/10 bg-paper-2 px-[8vw] py-[8vh]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-3">
          {screens.map((label) => (
            <div key={label} className="mx-auto w-full max-w-[220px]">
              <div className="flex aspect-[9/19.5] w-full flex-col items-center justify-center gap-2 rounded-[2rem] border-2 border-dashed border-ink/20 px-6 text-center">
                <span className="text-[0.8rem] text-grey-dim">Phone screen</span>
                <span className="font-display text-[0.9rem] font-medium text-grey">{label}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[0.8rem] text-grey-dim">
          Screens to be supplied. Placeholders shown for layout only.
        </p>
      </section>

      <section id="contribute" className="border-b border-ink/10 px-[8vw] py-[8vh]">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="mb-5 text-[0.95rem] text-grey">Help train the Twin</p>
            <p className="max-w-[22ch] font-display text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.35] font-medium text-ink">
              Your data can help make it more accurate for the next person.
            </p>
          </div>

          <div>
            <p className="max-w-[54ch] text-[0.95rem] leading-[1.7] text-grey">
              With your consent, real-world glucose, insulin and activity data from the SEER App
              helps extend the same validation work already underway in Type 1 and Type 2
              diabetes, alongside our collaboration with Medtronic Diabetes Care. If you are
              living with diabetes or another metabolic condition, you can opt in to contribute
              your data to ongoing studies and help improve the model for everyone who uses it.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-[3px] border border-ink/25 px-[1.6rem] py-[0.85rem] text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/60"
            >
              Ask about current studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
