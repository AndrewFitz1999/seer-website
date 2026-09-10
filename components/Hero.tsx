"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PHRASES = ["Build metabolic health products", "without building the science underneath them."];
const FULL = PHRASES.join(" ");

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [subIn, setSubIn] = useState(false);
  const [ctaIn, setCtaIn] = useState(false);

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
        }, 250);
      }
    }

    schedule(type, 900);
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-[8vw] pt-[18vh] pb-[6vh]">
      <div className="anim-rings pointer-events-none absolute top-1/2 left-1/2 h-[min(1100px,160vw)] w-[min(1100px,160vw)] -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 400 400" className="block h-full w-full">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A52F0" />
              <stop offset="100%" stopColor="#C9AFF5" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="80" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.6" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.6" />
          <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>

      <div className="relative z-[2] max-w-[880px]">
        <p className="anim-fade-up mb-[0.6rem] font-display text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium tracking-[-0.01em] text-ink [animation-delay:0.2s]">
          The future of metabolic healthcare starts here.
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
          Delivering AI native individualised care through our metabolic digital twin platform.
        </p>

        <div
          className={`mt-[2.6rem] flex flex-wrap gap-[1.2rem] ${
            ctaIn ? "anim-fade-up" : "opacity-0"
          }`}
        >
          <a
            href="#twin"
            className="rounded-full border border-purple bg-purple px-[1.7rem] py-[0.85rem] text-[0.95rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
          >
            See how it works
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-ink/25 px-[1.7rem] py-[0.85rem] text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/60"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
