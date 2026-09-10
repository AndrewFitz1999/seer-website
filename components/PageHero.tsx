import type { ReactNode } from "react";

export default function PageHero({
  headline,
  body,
  children,
}: {
  headline: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <section className="px-[8vw] pt-[18vh] pb-[9vh]">
      <h1 className="max-w-[22ch] font-display text-[clamp(2.2rem,4.8vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
        {headline}
      </h1>
      <p className="mt-6 max-w-[60ch] text-[1.05rem] leading-[1.7] text-grey">{body}</p>
      {children}
    </section>
  );
}
