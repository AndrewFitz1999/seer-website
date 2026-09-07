import Image from "next/image";

export default function Mark({ className = "h-[30px] w-auto" }: { className?: string }) {
  return (
    <Image
      src="/seer-logo.png"
      alt="SEER Health"
      width={2065}
      height={2500}
      className={className}
      priority
    />
  );
}
