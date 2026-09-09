import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Metabolic API — SEER Health",
  description:
    "Integrate with the Metabolic Digital Twin directly from your own product and harness the power of our metabolic digital twin engine.",
};

export default function PlatformPage() {
  return (
    <main>
      <PageHero
        eyebrow="For your platform"
        headline="Metabolic API"
        body="Integrate with the Metabolic Digital Twin directly from your own product. Send real world data, connect your data, and transform your product experience and offerings by harnessing the power of our metabolic digital twin engine."
      >
        <Link
          href="/developers"
          className="mt-8 inline-block rounded-[3px] border border-purple bg-purple px-[1.6rem] py-[0.85rem] text-[0.95rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
        >
          Get API access
        </Link>
      </PageHero>

      <section className="border-b border-ink/10 bg-paper-2 px-[8vw] py-[8vh]">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-3">
          <div className="border-l-2 border-purple/50 pl-5">
            <div className="font-display text-[1.05rem] font-medium text-ink">Connect your data</div>
            <div className="mt-2 text-[0.9rem] leading-[1.6] text-grey-dim">
              Bring the real world data your product already captures, in whatever form it takes.
            </div>
          </div>
          <div className="border-l-2 border-purple/50 pl-5">
            <div className="font-display text-[1.05rem] font-medium text-ink">Get predictive insight back</div>
            <div className="mt-2 text-[0.9rem] leading-[1.6] text-grey-dim">
              Personalized, predictive metabolic intelligence from the same validated Twin behind
              SEER Health.
            </div>
          </div>
          <div className="border-l-2 border-purple/50 pl-5">
            <div className="font-display text-[1.05rem] font-medium text-ink">Skip the infrastructure</div>
            <div className="mt-2 text-[0.9rem] leading-[1.6] text-grey-dim">
              No modeling, no training pipeline, no clinical validation work to run yourself.
            </div>
          </div>
        </div>
      </section>

      <section className="px-[8vw] py-[8vh]">
        <p className="max-w-[54ch] text-[0.95rem] leading-[1.7] text-grey">
          This page is intentionally high-level. For access details, integration requirements and
          timelines, visit the{" "}
          <Link href="/developers" className="text-purple-soft underline underline-offset-4 hover:text-purple">
            Developers
          </Link>{" "}
          page.
        </p>
      </section>
    </main>
  );
}
