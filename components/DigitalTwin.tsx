"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Points sampled along the solid curve in proactive-applications.png (in the
// image's native 1448x1086 pixel space), used to drive the marker + dropline
// back and forth along the line. calcMode="linear" + these keyTimes give an
// even, evenly-paced ping-pong traversal.
const GRAPH_KEY_TIMES =
  "0;0.0625;0.125;0.1875;0.25;0.3125;0.375;0.4375;0.5;0.5625;0.625;0.6875;0.75;0.8125;0.875;0.9375;1";
const GRAPH_X_VALUES = "195;340;470;560;650;780;950;1150;1250;1150;950;780;650;560;470;340;195";
const GRAPH_Y_VALUES = "680;540;410;345;390;495;568;600;606;600;568;495;390;345;410;540;680";
const GRAPH_BASELINE_Y = 745;

// Positions (as % of the metabolic-twin image) of the small white dots
// along each of the four connector lines, measured from the source image.
const lineDots = [
  { x: 24.52, y: 18.42, color: "#4CAF7D", delay: 0 },
  { x: 33.49, y: 23.02, color: "#4CAF7D", delay: 0.3 },
  { x: 26.59, y: 35.45, color: "#4A90D9", delay: 0.6 },
  { x: 35.57, y: 37.29, color: "#4A90D9", delay: 0.9 },
  { x: 26.59, y: 52.03, color: "#7B6FD4", delay: 1.2 },
  { x: 35.57, y: 47.42, color: "#7B6FD4", delay: 1.5 },
  { x: 24.17, y: 68.6, color: "#E0503C", delay: 1.8 },
  { x: 33.49, y: 62.62, color: "#E0503C", delay: 2.1 },
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

        <div className="mt-[8vh] grid grid-cols-1 gap-10 items-start sm:grid-cols-3">
          {/* Real-world data: scaled down to match the twin's own figure size, gently floating */}
          <div
            className={`reveal ${visible ? "reveal-in" : ""}`}
            style={{ transitionDelay: visible ? "0s" : "0s" }}
          >
            <div className="mx-auto w-[56%] float-slow">
              <Image
                src={`${basePath}/digital-twin/real-world-data.png`}
                alt="Real-world data"
                width={1086}
                height={1448}
                className="h-auto w-full"
              />
            </div>
            <div className="mt-5 font-display text-[0.95rem] font-medium text-ink">Real-world data</div>
            <div className="mt-2 text-[0.85rem] leading-[1.5] text-grey-dim">
              Continuous data offered from medical devices, wearables and medical reports.
            </div>
          </div>

          {/* Metabolic Digital Twin: floating, with blinking dots along each data line */}
          <div className={`reveal ${visible ? "reveal-in" : ""}`} style={{ transitionDelay: visible ? "0.15s" : "0s" }}>
            <div className="float-slow relative">
              <Image
                src={`${basePath}/digital-twin/metabolic-twin.png`}
                alt="Metabolic Digital Twin"
                width={1448}
                height={1086}
                className="h-auto w-full"
              />
              {lineDots.map((d, i) => (
                <span
                  key={i}
                  className="line-dot-blink"
                  style={{ left: `${d.x}%`, top: `${d.y}%`, color: d.color, animationDelay: `${d.delay}s` }}
                />
              ))}
            </div>
            <div className="mt-5 font-display text-[0.95rem] font-medium text-ink">Metabolic Digital Twin</div>
            <div className="mt-2 text-[0.85rem] leading-[1.5] text-grey-dim">
              A dynamic virtual replica of an individual&rsquo;s metabolism.
            </div>
          </div>

          {/* Graph: a marker rides the solid curve back and forth, with a dropline to the baseline */}
          <div className={`reveal ${visible ? "reveal-in" : ""}`} style={{ transitionDelay: visible ? "0.3s" : "0s" }}>
            <div className="relative">
              <Image
                src={`${basePath}/digital-twin/proactive-applications.png`}
                alt="New features and proactive applications"
                width={1448}
                height={1086}
                className="h-auto w-full"
              />
              <svg viewBox="0 0 1448 1086" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                <line
                  x1={195}
                  y1={680}
                  x2={195}
                  y2={GRAPH_BASELINE_Y}
                  stroke="var(--color-purple-soft)"
                  strokeWidth={3}
                  strokeDasharray="10 8"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="x1"
                    dur="16s"
                    repeatCount="indefinite"
                    calcMode="linear"
                    keyTimes={GRAPH_KEY_TIMES}
                    values={GRAPH_X_VALUES}
                  />
                  <animate
                    attributeName="x2"
                    dur="16s"
                    repeatCount="indefinite"
                    calcMode="linear"
                    keyTimes={GRAPH_KEY_TIMES}
                    values={GRAPH_X_VALUES}
                  />
                  <animate
                    attributeName="y1"
                    dur="16s"
                    repeatCount="indefinite"
                    calcMode="linear"
                    keyTimes={GRAPH_KEY_TIMES}
                    values={GRAPH_Y_VALUES}
                  />
                </line>
                <circle cx={195} cy={680} r={11} fill="#fff" stroke="var(--color-purple-soft)" strokeWidth={5}>
                  <animate
                    attributeName="cx"
                    dur="16s"
                    repeatCount="indefinite"
                    calcMode="linear"
                    keyTimes={GRAPH_KEY_TIMES}
                    values={GRAPH_X_VALUES}
                  />
                  <animate
                    attributeName="cy"
                    dur="16s"
                    repeatCount="indefinite"
                    calcMode="linear"
                    keyTimes={GRAPH_KEY_TIMES}
                    values={GRAPH_Y_VALUES}
                  />
                </circle>
              </svg>
            </div>
            <div className="mt-5 font-display text-[0.95rem] font-medium text-ink">
              New Features and proactive applications
            </div>
            <div className="mt-2 text-[0.85rem] leading-[1.5] text-grey-dim">
              Personalised, predictive and safe applications can be created.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
