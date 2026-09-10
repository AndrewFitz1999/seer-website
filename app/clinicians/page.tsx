import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Clinician Solution — SEER Health",
  description:
    "Combat and improve metabolic healthcare at the most important point of care: for the clinicians, clinics and hospitals on the frontline.",
};

export default function CliniciansPage() {
  return (
    <main>
      <PageHero
        headline="Clinician Solution"
        body="Our goal is to combat and improve metabolic healthcare at the most important point of care: for the clinicians, clinics and hospitals on the frontline. If you'd like to explore opportunities and understand the impact our MDT platform can have on improving outcomes for each individual in your care, reach out and contact us to learn more."
      >
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full border border-purple bg-purple px-[1.7rem] py-[0.85rem] text-[0.95rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
        >
          Contact us
        </Link>
      </PageHero>
    </main>
  );
}
