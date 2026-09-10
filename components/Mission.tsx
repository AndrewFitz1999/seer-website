import RevealSection from "./RevealSection";

export default function Mission() {
  return (
    <RevealSection className="px-[8vw] py-[14vh]">
      <div className="mx-auto max-w-[980px] text-center">
        <p className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.5] font-medium text-ink">
          At SEER Health, we are building the intelligence layer for metabolic health: a
          personalised digital twin that unifies medical-device, wearable and health data to AI
          native solutions grounded in each person&rsquo;s unique biology. Our vision is to enable
          safe, continuous and predictive care across metabolic health, at home, in the clinic
          and through the devices people use, transforming reactive, one-size-fits-all medicine
          into personalised care with foresight for billions of people.
        </p>
      </div>
    </RevealSection>
  );
}
