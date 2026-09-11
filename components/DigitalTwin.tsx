"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Points traced pixel-by-pixel along the solid curve's actual stroke in
// proactive-applications.png (native 1448x1086 space), used to drive the
// marker + dropline back and forth along the exact line. calcMode="linear"
// + these keyTimes give an even, evenly-paced ping-pong traversal.
const GRAPH_KEY_TIMES =
  "0.0;0.0278;0.0556;0.0833;0.1111;0.1389;0.1667;0.1944;0.2222;0.25;0.2778;0.3056;0.3333;0.3611;0.3889;0.4167;0.4444;0.4722;0.5;0.5278;0.5556;0.5833;0.6111;0.6389;0.6667;0.6944;0.7222;0.75;0.7778;0.8056;0.8333;0.8611;0.8889;0.9167;0.9444;0.9722;1.0";
const GRAPH_X_VALUES =
  "200;260;320;380;440;500;540;600;660;720;780;840;900;960;1020;1080;1140;1190;1270;1190;1140;1080;1020;960;900;840;780;720;660;600;540;500;440;380;320;260;200";
const GRAPH_Y_VALUES =
  "679;651;587;492;399;346;337;362;418;477;523;553;573;587;596;603;608;611;611;611;608;603;596;587;573;553;523;477;418;362;337;346;399;492;587;651;679";
const GRAPH_BASELINE_Y = 748;

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

function FlowArrow() {
  return (
    <div className="flex shrink-0 items-center justify-center py-2 sm:self-center sm:py-0">
      <svg width="56" height="20" viewBox="0 0 56 20" className="rotate-90 sm:rotate-0" aria-hidden="true">
        <line x1="2" y1="10" x2="42" y2="10" stroke="#C9AFF5" strokeWidth={2} strokeDasharray="6 5" strokeLinecap="round" className="flow-arrow-dash" />
        <path d="M36,3 L46,10 L36,17" fill="none" stroke="#C9AFF5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

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

        <div className="mt-[8vh] flex flex-col items-stretch gap-2 sm:flex-row sm:items-start sm:gap-4">
          {/* Real-world data: scaled down to match the twin's own figure size, gently floating */}
          <div
            className={`reveal ${visible ? "reveal-in" : ""} sm:min-w-0 sm:flex-1`}
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

          <FlowArrow />

          {/* Metabolic Digital Twin: floating, with blinking dots along each data line */}
          <div
            className={`reveal ${visible ? "reveal-in" : ""} sm:min-w-0 sm:flex-1`}
            style={{ transitionDelay: visible ? "0.15s" : "0s" }}
          >
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

          <FlowArrow />

          {/* Graph: a marker rides the solid curve back and forth, with a dropline to the baseline */}
          <div
            className={`reveal ${visible ? "reveal-in" : ""} sm:min-w-0 sm:flex-1`}
            style={{ transitionDelay: visible ? "0.3s" : "0s" }}
          >
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
                  x1={200}
                  y1={679}
                  x2={200}
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
                <circle cx={200} cy={679} r={11} fill="#fff" stroke="var(--color-purple-soft)" strokeWidth={5}>
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
