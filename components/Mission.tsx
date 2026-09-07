import RevealSection from "./RevealSection";

export default function Mission() {
  return (
    <RevealSection className="border-t border-ink/10 px-[8vw] py-[10vh]">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="mb-6 text-[0.95rem] text-grey">Mission and vision</p>
        <p className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.35] font-medium text-ink">
          SEER Health&rsquo;s vision is to create a new standard of care for the metabolic
          healthcare category and the technologies servicing it.
        </p>
      </div>
    </RevealSection>
  );
}
