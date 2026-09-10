import RevealSection from "./RevealSection";

const cards = [
  {
    label: "Our mission",
    color: "#661FE4",
    body: "We're building the intelligence layer for metabolic health: a personalised digital twin that brings medical-device, wearable and health data together into AI-native care, grounded in each person's own biology.",
  },
  {
    label: "Our vision",
    color: "#0E8C7F",
    body: "A future where care is safe, continuous and a step ahead — at home, in the clinic, and through the devices people already use. Turning reactive, one-size-fits-all medicine into personalised care with foresight, for billions of people.",
  },
];

export default function Mission() {
  return (
    <RevealSection className="relative overflow-hidden px-[8vw] py-[14vh]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-25 blur-[100px]"
        style={{ background: "radial-gradient(circle, #C9AFF5, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[980px] text-center">
        <h2 className="mb-16 font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium leading-[1.2] tracking-[-0.01em] text-ink">
          Mission and vision
        </h2>

        <div className="grid gap-8 text-left md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.label}
              className="rounded-[1.75rem] border border-ink/10 bg-paper px-8 py-9 shadow-[0_20px_50px_-25px_rgba(11,7,20,0.25)]"
            >
              <span
                className="mb-5 inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: card.color }}
              />
              <h3 className="mb-3 font-display text-[1.3rem] font-medium text-ink">{card.label}</h3>
              <p className="text-[1rem] leading-[1.7] text-grey">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
