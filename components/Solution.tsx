import Image from "next/image";
import RevealSection from "./RevealSection";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Solution() {
  return (
    <RevealSection className="px-[8vw] py-[12vh]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-[62ch]">
            <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium leading-[1.2] tracking-[-0.01em] text-ink">
              Our solution
            </h2>
            <p className="mt-5 text-[1.05rem] leading-[1.7] text-grey">
              Our solution is to build a metabolic digital twin platform, which we refer to as our{" "}
              <strong className="font-semibold text-ink">MDT+</strong> platform, that transforms
              real world data into an individualised personal care solution, offering predictive
              insights and creating a variety of applications that unlock better decisions, safety
              and efficiency.
            </p>
          </div>

          <Image
            src={`${basePath}/solution/solution-image.png`}
            alt="A translucent human figure showing connected metabolic data points — CGM, AID, MDI, software development, clinical enhancement and wellness insights — radiating outward"
            width={1301}
            height={876}
            className="mx-auto h-auto w-full max-w-[560px]"
            priority
          />
        </div>
      </div>
    </RevealSection>
  );
}
