import RevealSection from "./RevealSection";

const stats = [
  { value: "~30%", label: "of adults live with a metabolic disorder" },
  { value: "1.5B", label: "people affected worldwide by 2025" },
  { value: "80%", label: "of chronic disease it drives" },
  { value: "74%", label: "of global deaths it drives" },
];

export default function Problem() {
  return (
    <RevealSection className="border-t border-ink/10 bg-paper-2 px-[8vw] py-[8vh]">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="mb-5 text-[0.95rem] text-grey">The problem</p>
          <p className="max-w-[26ch] font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.3] font-medium text-ink">
            Glucose drives energy, weight and disease. Yet people are handed raw data and told
            to become experts in nutrition and metabolism.
          </p>
          <p className="mt-6 max-w-[40ch] text-[0.95rem] leading-[1.7] text-grey">
            Most of this is preventable and reversible, once it can be understood.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-ink/15 pt-4">
                <div className="font-display text-[2.4rem] font-semibold leading-none text-ink">
                  {stat.value}
                </div>
                <div className="mt-3 max-w-[22ch] text-[0.9rem] leading-[1.5] text-grey-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[0.8rem] text-grey-dim">Sources: CDC, IDF</p>
        </div>
      </div>
    </RevealSection>
  );
}
