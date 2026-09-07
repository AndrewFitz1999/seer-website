import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Mark({ className = "h-[30px] w-auto" }: { className?: string }) {
  return (
    <Image
      src={`${basePath}/seer-logo.png`}
      alt="SEER Health"
      width={2065}
      height={2500}
      className={className}
      priority
    />
  );
}
