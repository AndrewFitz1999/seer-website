"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  {
    key: "input",
    title: "Real-world data",
    body: "Continuous data offered from medical devices, wearables and medical reports.",
  },
  {
    key: "twin",
    title: "Metabolic Digital Twin",
    body: "A dynamic virtual replica of an individual's metabolism.",
  },
  {
    key: "insight",
    title: "New Features and proactive applications",
    body: "Personalised, predictive and safe applications can be created.",
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
    <section ref={ref} id="twin" className="px-[8vw] py-[12vh]">
      <div className="mx-auto max-w-[1200px]">
        <div className={`reveal ${visible ? "reveal-in" : ""} max-w-[62ch]`}>
          <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium leading-[1.2] tracking-[-0.01em] text-ink">
            Understanding our Metabolic Digital Twin +
          </h2>
          <p className="mt-5 text-[1.05rem] leading-[1.7] text-grey">
            Our <strong className="font-semibold text-ink">MDT+</strong> platform transforms real
            world data into personalized and predictive insights, creating a variety of
            personalized applications that unlock better decisions, safety and efficiency.
          </p>
        </div>

        <div className="mt-[8vh] grid grid-cols-1 gap-10 sm:grid-cols-3">
          {nodes.map((n, i) => (
            <div
              key={n.key}
              className={`reveal ${visible ? "reveal-in" : ""}`}
              style={{ transitionDelay: visible ? `${i * 0.15}s` : "0s" }}
            >
              <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ink/20 bg-paper-2 px-6 text-center">
                <span className="text-[0.8rem] text-grey-dim">Image placeholder</span>
                <span className="font-display text-[0.9rem] font-medium text-grey">{n.title}</span>
              </div>
              <div className="mt-5 font-display text-[0.95rem] font-medium text-ink">{n.title}</div>
              <div className="mt-2 text-[0.85rem] leading-[1.5] text-grey-dim">{n.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
