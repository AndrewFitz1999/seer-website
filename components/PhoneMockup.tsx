const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// The embedded screens are fixed-layout designs, not fluid pages — shrinking
// their iframe viewport directly makes status bars and text overflow. Instead,
// render at this native size and scale the whole result down via a CSS
// container query, so it stays pixel-perfect at any card width.
const NATIVE_WIDTH = 390;
const NATIVE_HEIGHT = 844;

export type PhoneCrop = { x: number; y: number; width: number; height: number };

export default function PhoneMockup({
  src,
  label,
  crop,
  className = "",
}: {
  src?: string;
  label: string;
  // The design canvas draws its own phone shape with margin around it rather
  // than filling the full render edge-to-edge — crop picks out just the
  // phone rect (in native px) so it fills this card without that margin
  // showing as a mismatched frame around it.
  crop?: PhoneCrop;
  className?: string;
}) {
  const region = crop ?? { x: 0, y: 0, width: NATIVE_WIDTH, height: NATIVE_HEIGHT };

  return (
    <div
      className={`relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.2rem] bg-paper shadow-[0_25px_60px_-15px_rgba(11,7,20,0.35)] ${className}`}
    >
      {src ? (
        <div className="absolute inset-0" style={{ containerType: "inline-size" }}>
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{
              width: NATIVE_WIDTH,
              height: NATIVE_HEIGHT,
              transform: `scale(calc(100cqw / ${region.width}px)) translate(${-region.x}px, ${-region.y}px)`,
            }}
          >
            <iframe
              src={`${basePath}${src}`}
              title={label}
              width={NATIVE_WIDTH}
              height={NATIVE_HEIGHT}
              className="border-0"
              style={{ pointerEvents: "none" }}
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-ink/20 bg-paper-2 px-6 text-center">
          <span className="text-[0.8rem] text-grey-dim">Phone screen</span>
          <span className="font-display text-[0.9rem] font-medium text-grey">{label}</span>
        </div>
      )}
    </div>
  );
}
