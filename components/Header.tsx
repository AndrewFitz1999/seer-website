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

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
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

        <a
          href="#contact"
          className="rounded-[3px] border border-purple bg-purple px-4 py-2 font-body text-[0.85rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}
