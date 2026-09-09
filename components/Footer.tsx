import Mark from "./Mark";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-[8vw] py-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <Mark className="h-5 w-auto shrink-0" />
            <span className="font-display text-[0.9rem] font-semibold text-ink">SEER Health</span>
          </div>
          <p className="text-[0.78rem] text-grey-dim">
            &copy; {new Date().getFullYear()} SEER Health. All rights reserved.
          </p>
        </div>
        <p className="mt-6 max-w-[80ch] text-center text-[0.72rem] leading-[1.6] text-grey-dim sm:text-left">
          Any claim on this page has not been reviewed by the FDA or other governing health
          authority. SEER Health&rsquo;s platform is not intended to diagnose, treat, cure, or
          prevent any disease.
        </p>
      </div>
    </footer>
  );
}
