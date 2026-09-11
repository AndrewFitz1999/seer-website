"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
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

function useInView<T extends HTMLElement>(threshold: number) {
  const ref = useRef<T>(null);
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
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

// Each mobile phone gets its own scroll trigger, rather than sharing one for
// the whole stack — otherwise, since the stack spans much more scroll
// distance than the compact desktop fan, all three would animate in together
// the moment the top of the section appeared instead of as each is reached.
function MobileRevealItem({ index, children }: { index: number; children: ReactNode }) {
  const [ref, visible] = useInView<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className={`w-full transition-all duration-700 ease-out ${slideClasses(index, visible)}`}>
      {children}
    </div>
  );
}

export default function MyAllyScreens() {
  const [fanRef, fanVisible] = useInView<HTMLDivElement>(0.2);

  return (
    <div>
      {/* Mobile: stacked, full-size phones — the fan below gets too narrow to render legibly */}
      <div className="mx-auto flex max-w-[260px] flex-col items-center gap-10 md:hidden">
        {mobileScreens.map((screen, i) => (
          <MobileRevealItem key={screen.src} index={i}>
            <PhoneMockup src={screen.src} label={screen.label} className="w-full" />
          </MobileRevealItem>
        ))}
      </div>

      {/* Tablet+: staggered fan, home screen featured front and center */}
      <div ref={fanRef} className="relative mx-auto hidden max-w-[640px] md:block">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[80px]"
          style={{ background: "radial-gradient(circle, #8A52F0, transparent 70%)" }}
        />
        <div className="relative flex items-end justify-center">
          <div
            className={`relative z-0 w-[34%] -mr-8 translate-y-6 rotate-[-8deg] transition-all duration-700 ease-out ${
              fanVisible ? "translate-x-0 opacity-90" : slideClasses(0, fanVisible)
            }`}
          >
            <PhoneMockup src={screens[0].src} label={screens[0].label} />
          </div>
          <div
            className={`relative z-10 w-[42%] transition-all duration-700 ease-out ${slideClasses(1, fanVisible)}`}
            style={{ transitionDelay: fanVisible ? "0.15s" : "0s" }}
          >
            <PhoneMockup src={screens[1].src} label={screens[1].label} priority />
          </div>
          <div
            className={`relative z-0 w-[34%] -ml-8 translate-y-6 rotate-[8deg] transition-all duration-700 ease-out ${
              fanVisible ? "translate-x-0 opacity-90" : slideClasses(2, fanVisible)
            }`}
            style={{ transitionDelay: fanVisible ? "0.3s" : "0s" }}
          >
            <PhoneMockup src={screens[2].src} label={screens[2].label} />
          </div>
        </div>
      </div>
    </div>
  );
}
