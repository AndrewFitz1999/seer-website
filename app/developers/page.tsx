import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DeveloperAccess from "@/components/DeveloperAccess";

export const metadata: Metadata = {
  title: "Get API access — SEER Health",
  description:
    "Tap into the Metabolic Digital Twin platform directly. Register your details and we'll notify you when access opens in your region.",
};

export default function DevelopersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Developers"
        headline="Get API access"
        body="Tap into the Metabolic Digital Twin platform directly. Register your details and we'll notify you when access opens in your region."
      />

      <section className="px-[8vw] py-[8vh]">
        <DeveloperAccess />
      </section>
    </main>
  );
}
