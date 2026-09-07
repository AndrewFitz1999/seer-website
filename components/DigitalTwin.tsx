"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  {
    key: "input",
    title: "Real-world data",
    body: "Glucose, insulin and activity from everyday life",
    color: "#8983A0",
  },
  {
    key: "twin",
    title: "Metabolic Digital Twin",
    body: "A living model of how your body responds",
    color: "#8A52F0",
  },
  {
    key: "insight",
    title: "Predictive insight",
    body: "Clear, forward-looking guidance",
    color: "#43D9C8",
  },
];

export default function DigitalTwin() {
  const ref = useRef<HTMLElement>(null);
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
    <section
      ref={ref}
      id="twin"
      className="border-t border-ink/10 px-[8vw] py-[8vh]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className={`reveal ${visible ? "reveal-in" : ""} max-w-[62ch]`}>
          <p className="mb-5 text-[0.95rem] text-grey">What a Metabolic Digital Twin is</p>
          <p className="font-display text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.4] font-medium text-ink">
            Our Metabolic Digital Twin (MDT+) is a scalable, AI-enabled model that turns
            real-world data into predictive insights, unlocking better decisions, safety,
            efficiency and new opportunities.
          </p>
        </div>

        <div className="mt-[6vh] overflow-x-auto">
          <svg
            viewBox="0 0 900 200"
            className="mx-auto block h-auto w-full min-w-[640px] max-w-[820px]"
          >
            <line
              x1="168" y1="100" x2="402" y2="100"
              stroke="#8A52F0" strokeWidth="1.5"
              strokeDasharray="240"
              strokeDashoffset={visible ? 0 : 240}
              style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(.16,1,.3,1) 0.3s" }}
            />
            <line
              x1="498" y1="100" x2="732" y2="100"
              stroke="#43D9C8" strokeWidth="1.5"
              strokeDasharray="240"
              strokeDashoffset={visible ? 0 : 240}
              style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(.16,1,.3,1) 0.75s" }}
            />

            {nodes.map((n, i) => {
              const cx = 120 + i * 330;
              const delay = 0.1 + i * 0.35;
              return (
                <g
                  key={n.key}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(0.85)",
                    transformOrigin: `${cx}px 100px`,
                    transformBox: "view-box",
                    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
                  }}
                >
                  <circle cx={cx} cy="100" r="48" fill="none" stroke={n.color} strokeWidth="1" opacity="0.5" />
                  <circle cx={cx} cy="100" r="30" fill={n.color} opacity={i === 1 ? 1 : 0.9} />
                </g>
              );
            })}
          </svg>

          <div className="mx-auto mt-8 grid max-w-[820px] grid-cols-1 gap-8 sm:grid-cols-3">
            {nodes.map((n) => (
              <div key={n.key} className="text-center">
                <div className="font-display text-[0.95rem] font-medium text-ink">{n.title}</div>
                <div className="mt-2 text-[0.85rem] leading-[1.5] text-grey-dim">{n.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
