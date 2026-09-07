"use client";

import { useEffect, useState } from "react";
import Mark from "./Mark";

const links = [
  { href: "#twin", label: "How it works" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const isVisible = window.scrollY > 480;
      setVisible(isVisible);
      if (!isVisible) setMenuOpen(false);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-out ${
        visible
          ? "translate-y-0 opacity-100 border-ink/10 bg-paper/85 backdrop-blur"
          : "-translate-y-full opacity-0 border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-[8vw] py-4">
        <a href="#" className="flex items-center gap-3">
          <Mark className="h-6 w-auto shrink-0" />
          <span className="font-display text-[0.95rem] font-semibold tracking-[0.01em] text-ink">
            SEER Health
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[0.9rem] text-grey transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-[3px] border border-purple bg-purple px-4 py-2 font-body text-[0.85rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
          >
            Talk to us
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-200 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-200 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        className={`grid overflow-hidden border-t transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] border-ink/10" : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="flex min-h-0 flex-col gap-1 px-[8vw] py-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 font-body text-[0.95rem] text-grey transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
