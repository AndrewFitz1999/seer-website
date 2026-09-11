import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function PhoneMockup({
  src,
  label,
  className = "",
  priority = false,
}: {
  src?: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.2rem] bg-paper shadow-[0_25px_60px_-15px_rgba(11,7,20,0.35)] ${className}`}
    >
      {src ? (
        <Image
          src={`${basePath}${src}`}
          alt={label}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 260px, 320px"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-ink/20 bg-paper-2 px-6 text-center">
          <span className="text-[0.8rem] text-grey-dim">Phone screen</span>
          <span className="font-display text-[0.9rem] font-medium text-grey">{label}</span>
        </div>
      )}
    </div>
  );
}
