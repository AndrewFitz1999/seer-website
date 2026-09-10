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
        body="The co-founders and advisors building SEER Health's Metabolic Digital Twin platform."
      />

      <section className="px-[8vw] py-[6vh]">
        <Team />
      </section>
    </main>
  );
}
