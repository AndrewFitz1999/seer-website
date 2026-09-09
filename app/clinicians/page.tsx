import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Clinician Solution — SEER Health",
  description:
    "See your patients' metabolic picture: glucose trends, forecasts and context, inside your existing clinical workflow.",
};

export default function CliniciansPage() {
  return (
    <main>
      <PageHero
        eyebrow="For clinicians"
        headline="Clinician Solution"
        body="See your patients' metabolic picture: glucose trends, forecasts and context, inside your existing clinical workflow."
      >
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-[3px] border border-purple bg-purple px-[1.6rem] py-[0.85rem] text-[0.95rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
        >
          Talk to us
        </Link>
      </PageHero>

      <section className="px-[8vw] py-[8vh]">
        <p className="max-w-[54ch] text-[0.95rem] leading-[1.7] text-grey">
          We&rsquo;re early in shaping the clinician experience. If you&rsquo;d like to help define
          what belongs in it, get in touch.
        </p>
      </section>
    </main>
  );
}
