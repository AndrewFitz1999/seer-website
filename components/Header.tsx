"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Mark from "./Mark";
import { capabilityColumns } from "@/lib/capabilities";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setCapabilitiesOpen(false);
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!capabilitiesOpen) return;
    function onClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      setCapabilitiesOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [capabilitiesOpen]);

  function openCapabilities() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setCapabilitiesOpen(true);
  }

  function scheduleCloseCapabilities() {
    closeTimeout.current = setTimeout(() => setCapabilitiesOpen(false), 120);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">

      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-[8vw] py-4">
        <Link href="/" className="flex items-center gap-3">
          <Mark className="h-6 w-auto shrink-0" />
          <span className="font-display text-[0.95rem] font-semibold tracking-[0.01em] text-ink">
            SEER Health
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div
            ref={triggerRef}
            onMouseEnter={openCapabilities}
            onMouseLeave={scheduleCloseCapabilities}
          >
            <button
              type="button"
              onClick={openCapabilities}
              aria-expanded={capabilitiesOpen}
              className="flex items-center gap-1.5 font-body text-[0.9rem] text-grey transition-colors hover:text-purple-soft"
            >
              Our Offerings
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform duration-200 ${capabilitiesOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <Link href="/developers" className="font-body text-[0.9rem] text-grey transition-colors hover:text-purple-soft">
            Developers
          </Link>
          <Link href="/contact" className="font-body text-[0.9rem] text-grey transition-colors hover:text-purple-soft">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full border border-purple bg-purple px-5 py-2 font-body text-[0.85rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
          >
            Talk to us
          </Link>

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

      <div
        ref={panelRef}
        onMouseEnter={openCapabilities}
        onMouseLeave={scheduleCloseCapabilities}
        className={`absolute inset-x-0 top-full hidden transition-all duration-200 ease-out md:block ${
          capabilitiesOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="bg-paper shadow-[0_24px_60px_rgba(11,7,20,0.08)]">
          <div className="mx-auto grid max-w-[1400px] grid-cols-3 gap-10 px-[8vw] py-12">
            {capabilityColumns.map((column) => (
              <div key={column.eyebrow}>
                <p className="sr-only">{column.eyebrow}</p>
                <div className="flex flex-col gap-6">
                  {column.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setCapabilitiesOpen(false)}
                      className="group block"
                    >
                      <div className="font-display text-[1.1rem] font-medium text-ink transition-colors group-hover:text-purple-soft">
                        {item.title}
                      </div>
                      <div className="mt-1.5 max-w-[32ch] text-[0.88rem] leading-[1.55] text-grey">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav
        className={`grid overflow-hidden border-t bg-paper transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] border-ink/10" : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-1 px-[8vw] py-4">
            <p className="mt-2 mb-1 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-grey-dim">
              Our Offerings
            </p>
            {capabilityColumns.map((column) =>
              column.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 font-body text-[0.95rem] text-grey transition-colors hover:text-purple-soft"
                >
                  {item.title}
                </Link>
              ))
            )}

            <div className="my-2 h-px bg-ink/10" />

            <Link
              href="/developers"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 font-body text-[0.95rem] text-grey transition-colors hover:text-purple-soft"
            >
              Developers
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 font-body text-[0.95rem] text-grey transition-colors hover:text-purple-soft"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
