import RevealSection from "./RevealSection";

export default function Support() {
  return (
    <RevealSection className="border-t border-ink/10 px-[8vw] py-[8vh]">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
        <div>
          <p className="mb-5 text-[0.95rem] text-grey">Support our mission</p>
          <p className="max-w-[22ch] font-display text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.35] font-medium text-ink">
            Help build a more accurate model of metabolic health.
          </p>
        </div>

        <div>
          <p className="max-w-[54ch] text-[0.95rem] leading-[1.7] text-grey">
            With your consent, real-world glucose, insulin and activity data helps train and
            validate the Metabolic Digital Twin against a wider range of people and conditions.
            If you are living with diabetes or another metabolic condition, you can take part in
            an ongoing study and contribute directly to research that improves the model for
            everyone who uses it.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-[3px] border border-ink/25 px-[1.6rem] py-[0.85rem] text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/60"
          >
            Ask about current studies
          </a>
        </div>
      </div>
    </RevealSection>
  );
}
