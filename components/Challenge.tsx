import RevealSection from "./RevealSection";

const stats = [
  { value: "30%", label: "of people live with metabolic syndrome" },
  { value: "2B+", label: "people live with obesity or diabetes" },
  {
    value: "17.9M",
    label: "lives lost each year to cardiovascular disease, the leading cause of death worldwide",
  },
  { value: "$10T", label: "projected cost of diabetes to the global economy by 2050" },
];

export default function Challenge() {
  return (
    <RevealSection className="bg-paper-2 px-[8vw] py-[12vh]">
      <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="max-w-[42ch] font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.4] font-medium text-ink">
            Metabolic dysfunction contributes to diabetes, obesity and cardiovascular disease,
            affecting billions of people and placing an immense burden on healthcare systems. The
            world has never generated more health data in monitoring and managing metabolic
            healthcare, but we still live in a reactive health environment. Despite tens of
            billions invested in wearables, medical devices and digital-health platforms, these
            technologies often provide fragmented views of what has already happened.
          </p>
          <p className="mt-6 max-w-[40ch] text-[0.95rem] leading-[1.7] text-grey">
            Care is not optimised across technologies and services.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-[2.4rem] font-semibold leading-none tracking-[-0.01em] text-ink">
                  {stat.value}
                </div>
                <div className="mt-3 max-w-[22ch] text-[0.9rem] leading-[1.5] text-grey-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[0.8rem] text-grey-dim">
            Sources: CDC, IDF, WHO, WU Vienna / IIASA (2020&ndash;2050 projection, excluding
            informal care)
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
