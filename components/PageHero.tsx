import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  headline,
  body,
  children,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-ink/10 px-[8vw] pt-[16vh] pb-[8vh]">
      <p className="mb-5 text-[0.95rem] text-grey">{eyebrow}</p>
      <h1 className="max-w-[22ch] font-display text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.15] text-ink">
        {headline}
      </h1>
      <p className="mt-6 max-w-[60ch] text-[1.05rem] leading-[1.7] text-grey">{body}</p>
      {children}
    </section>
  );
}
