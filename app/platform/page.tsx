import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import DeveloperAccess from "@/components/DeveloperAccess";

export const metadata: Metadata = {
  title: "MDT+ API — SEER Health",
  description:
    "Integrate with the Metabolic Digital Twin directly from your own product and harness the power of our metabolic digital twin engine.",
};

export default function PlatformPage() {
  return (
    <main>
      <PageHero
        headline="MDT+ API"
        body="Integrate with the Metabolic Digital Twin directly from your own product. Send real world data, connect your data, and transform your product experience and offerings by harnessing the power of our metabolic digital twin engine."
      >
        <Link
          href="#access"
          className="mt-8 inline-block rounded-full border border-purple bg-purple px-[1.7rem] py-[0.85rem] text-[0.95rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
        >
          Get API access
        </Link>
      </PageHero>

      <section className="bg-paper-2 px-[8vw] py-[10vh]">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3">
          <div>
            <div className="font-display text-[1.05rem] font-medium text-ink">Connect your data</div>
            <div className="mt-2.5 text-[0.9rem] leading-[1.6] text-grey-dim">
              Bring the real world data your product already captures, in whatever form it takes.
            </div>
          </div>
          <div>
            <div className="font-display text-[1.05rem] font-medium text-ink">Get predictive insight back</div>
            <div className="mt-2.5 text-[0.9rem] leading-[1.6] text-grey-dim">
              Personalized, predictive metabolic intelligence from the same validated Twin behind
              SEER Health.
            </div>
          </div>
          <div>
            <div className="font-display text-[1.05rem] font-medium text-ink">Skip the infrastructure</div>
            <div className="mt-2.5 text-[0.9rem] leading-[1.6] text-grey-dim">
              No modeling, no training pipeline, no clinical validation work to run yourself.
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="px-[8vw] py-[9vh]">
        <DeveloperAccess />
      </section>
    </main>
  );
}
