import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Team — SEER Health",
  description: "Meet the co-founders and advisors building SEER Health.",
};

export default function TeamPage() {
  return (
    <main>
      <PageHero
        headline="Team"
        body="Meet the visionary co-founders and advisory team building the Metabolic Digital Twin and delivering AI native solutions for metabolic healthcare."
      />

      <section className="px-[8vw] py-[6vh]">
        <Team />
      </section>
    </main>
  );
}
