"use client";

import { useEffect, useRef, useState } from "react";
import PhoneMockup from "@/components/PhoneMockup";

const screens = [
  { src: "/mockups/seer-cycle-insights.png", label: "Cycle Insights" },
  { src: "/mockups/seer-cycle-home.png", label: "Cycle-aware home screen" },
  { src: "/mockups/seer-todays-guidance.png", label: "Today's guidance" },
];

// Mobile stacks these in a different order than the desktop fan (which
// features the home screen front and center): home, insights, guidance.
const mobileScreens = [screens[1], screens[0], screens[2]];

// Alternating slide-in: even positions come from the left, odd from the
// right, regardless of which screen occupies that slot.
function slideClasses(index: number, visible: boolean) {
  const fromLeft = index % 2 === 0;
  if (!visible) return fromLeft ? "-translate-x-12 opacity-0" : "translate-x-12 opacity-0";
  return "translate-x-0";
}

export default function MyAllyScreens() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* Mobile: stacked, full-size phones — the fan below gets too narrow to render legibly */}
      <div className="mx-auto flex max-w-[260px] flex-col items-center gap-10 md:hidden">
        {mobileScreens.map((screen, i) => (
          <div
            key={screen.src}
            className={`w-full transition-all duration-700 ease-out ${slideClasses(i, visible)}`}
            style={{ transitionDelay: visible ? `${i * 0.15}s` : "0s" }}
          >
            <PhoneMockup src={screen.src} label={screen.label} className="w-full" />
          </div>
        ))}
      </div>

      {/* Tablet+: staggered fan, home screen featured front and center */}
      <div className="relative mx-auto hidden max-w-[640px] md:block">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[80px]"
          style={{ background: "radial-gradient(circle, #8A52F0, transparent 70%)" }}
        />
        <div className="relative flex items-end justify-center">
          <div
            className={`relative z-0 w-[34%] -mr-8 translate-y-6 rotate-[-8deg] transition-all duration-700 ease-out ${
              visible ? "translate-x-0 opacity-90" : slideClasses(0, visible)
            }`}
          >
            <PhoneMockup src={screens[0].src} label={screens[0].label} />
          </div>
          <div
            className={`relative z-10 w-[42%] transition-all duration-700 ease-out ${slideClasses(1, visible)}`}
            style={{ transitionDelay: visible ? "0.15s" : "0s" }}
          >
            <PhoneMockup src={screens[1].src} label={screens[1].label} priority />
          </div>
          <div
            className={`relative z-0 w-[34%] -ml-8 translate-y-6 rotate-[8deg] transition-all duration-700 ease-out ${
              visible ? "translate-x-0 opacity-90" : slideClasses(2, visible)
            }`}
            style={{ transitionDelay: visible ? "0.3s" : "0s" }}
          >
            <PhoneMockup src={screens[2].src} label={screens[2].label} />
          </div>
        </div>
      </div>
    </div>
  );
}
