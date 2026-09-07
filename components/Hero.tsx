"use client";

import { useEffect, useState } from "react";
import Mark from "./Mark";

const PHRASES = ["The future of metabolic", "health starts here."];
const FULL = PHRASES.join(" ");

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [subIn, setSubIn] = useState(false);
  const [ctaIn, setCtaIn] = useState(false);
  const [trustIn, setTrustIn] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, delay: number) => {
      const t = setTimeout(fn, delay);
      timeouts.push(t);
      return t;
    };

    function type() {
      if (i <= FULL.length) {
        setTyped(FULL.slice(0, i));
        i++;
        const char = FULL[i - 1];
        const delay = char === "." ? 220 : 34 + Math.random() * 28;
        schedule(type, delay);
      } else {
        schedule(() => {
          setSubIn(true);
          setCtaIn(true);
          schedule(() => setTrustIn(true), 500);
        }, 250);
      }
    }

    schedule(type, 900);
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-[8vw] pt-[8vh] pb-[6vh]">
        <div className="anim-rings pointer-events-none absolute top-1/2 left-1/2 h-[min(1100px,160vw)] w-[min(1100px,160vw)] -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 400 400" className="block h-full w-full">
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8A52F0" />
                <stop offset="100%" stopColor="#43D9C8" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="80" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.6" />
            <circle cx="200" cy="200" r="130" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.6" />
            <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.6" />
          </svg>
        </div>

        <div className="anim-fade-up relative z-[2] flex items-center gap-3.5 [animation-delay:0.2s]">
          <Mark />
          <span className="font-display text-[1.05rem] font-semibold tracking-[0.01em] text-ink">
            SEER Health
          </span>
        </div>

        <div className="relative z-[2] mt-[14vh] max-w-[880px]">
          <p className="anim-fade-up mb-[1.4rem] text-[0.95rem] text-grey [animation-delay:0.4s]">
            A patented Metabolic Digital Twin platform
          </p>

          <h1 className="min-h-[3.6em] font-display text-[clamp(2.1rem,5.4vw,4rem)] leading-[1.18] font-medium tracking-[-0.01em] text-ink">
            <span>{typed}</span>
            <span className="caret" />
          </h1>

          <p
            className={`mt-[1.8rem] max-w-[46ch] text-[1.05rem] leading-[1.6] text-grey ${
              subIn ? "anim-fade-up" : "opacity-0"
            }`}
          >
            Real-world glucose, insulin and activity data, turned into predictive insight, so people
            and the systems that support them can make better metabolic decisions.
          </p>

          <div
            className={`mt-[2.6rem] flex flex-wrap gap-[1.2rem] ${
              ctaIn ? "anim-fade-up" : "opacity-0"
            }`}
          >
            <a
              href="#twin"
              className="rounded-[3px] border border-purple bg-purple px-[1.6rem] py-[0.85rem] text-[0.95rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
            >
              See how it works
            </a>
            <a
              href="#contact"
              className="rounded-[3px] border border-ink/25 px-[1.6rem] py-[0.85rem] text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/60"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <TrustBar visible={trustIn} />
    </>
  );
}

function TrustBar({ visible }: { visible: boolean }) {
  const items = [
    { stat: "Core patent granted", note: "2026" },
    {
      stat: "Clinical validation in T1D and T2D",
      note: "Peer-reviewed, Diabetes Technology & Therapeutics",
    },
    {
      stat: "Collaboration with Medtronic Diabetes Care",
      note: "Forecast validation study",
    },
    { stat: "Up to 24h forecast accuracy", note: "From 5 days of training data" },
  ];

  return (
    <section className={`border-t border-ink/10 bg-paper-2 px-[8vw] py-[4.5rem] ${visible ? "anim-fade-up" : "opacity-0"}`}>
      <div className="mb-10 flex items-center gap-6">
        <p className="whitespace-nowrap font-display text-[1.05rem] font-medium text-ink">
          Where the platform stands today
        </p>
        <div className="h-px flex-1 bg-ink/10" />
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.stat} className="border-l-2 border-purple/50 pl-5">
            <div className="font-display text-[1.05rem] font-medium leading-[1.4] text-ink">
              {item.stat}
            </div>
            <div className="mt-2.5 text-[0.85rem] leading-[1.5] text-grey-dim">{item.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
