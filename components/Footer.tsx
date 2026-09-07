import Mark from "./Mark";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-[8vw] py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Mark className="h-5 w-auto shrink-0" />
          <span className="font-display text-[0.9rem] font-semibold text-ink">SEER Health</span>
        </div>
        <p className="text-[0.78rem] text-grey-dim">
          &copy; {new Date().getFullYear()} SEER Health. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
