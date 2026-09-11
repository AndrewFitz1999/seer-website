import RevealSection from "./RevealSection";

export default function Mission() {
  return (
    <RevealSection className="relative overflow-hidden px-[8vw] py-[12vh]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-25 blur-[100px]"
        style={{ background: "radial-gradient(circle, #C9AFF5, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[900px] text-center">
        <h2 className="mb-10 font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium leading-[1.2] tracking-[-0.01em] text-ink">
          Mission and Vision
        </h2>

        <div className="rounded-[1.75rem] border border-ink/10 bg-paper px-[3rem] py-[3.2rem] shadow-[0_20px_50px_-25px_rgba(11,7,20,0.25)]">
          <p className="font-display text-[clamp(1.3rem,2.4vw,1.85rem)] leading-[1.6] font-light text-ink">
            At SEER Health, we are building the intelligence layer for metabolic healthcare: a
            personalised digital twin that unifies medical-devices, wearable and health data to
            deliver AI native solutions grounded in each person&rsquo;s unique biology. Our vision
            is to enable safe, continuous and predictive care across metabolic healthcare, at
            home, in the clinic and through the devices people use, transforming reactive,
            one-size-fits-all medicine into proactive, individualised care for all.
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
