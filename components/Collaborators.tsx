import RevealSection from "./RevealSection";

export default function Collaborators() {
  return (
    <RevealSection className="border-t border-ink/10 px-[8vw] py-[6vh]">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 text-[0.95rem] text-grey">Collaborators</p>
        <p className="max-w-[70ch] text-[0.85rem] leading-[1.8] text-grey-dim">
          In collaboration with Medtronic Diabetes Care. Published in Diabetes Technology &amp;
          Therapeutics (2020, 2022). Patent WO2021165747A1.
        </p>
      </div>
    </RevealSection>
  );
}
