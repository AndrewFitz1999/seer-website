"use client";

import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Native pixel size of solution-image.png, and the waist-ring ellipse's
// position within it — used to align the animated glow overlay precisely.
const IMAGE_WIDTH = 1318;
const IMAGE_HEIGHT = 899;
const RING = { cx: 635, cy: 427, rx: 260, ry: 42 };

export default function SolutionImage() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <Image
        src={`${basePath}/solution/solution-image.png`}
        alt="A translucent human figure showing connected metabolic data points — CGM, AID, MDI, software development, clinical enhancement and wellness insights — radiating outward"
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        className="h-auto w-full"
        priority
      />
      <svg
        viewBox={`0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <ellipse
          cx={RING.cx}
          cy={RING.cy}
          rx={RING.rx}
          ry={RING.ry}
          pathLength={1}
          fill="none"
          stroke="#ffffff"
          strokeWidth={9}
          strokeLinecap="round"
          strokeDasharray="0.16 0.84"
          className="solution-ring-glow"
        />
      </svg>
    </div>
  );
}
