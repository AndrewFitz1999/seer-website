"use client";

import { useState, type FormEvent } from "react";
import RevealSection from "./RevealSection";

const CONTACT_EMAIL = "dean@seerhealth.tech";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full border-b border-ink/20 bg-transparent py-3 text-[0.95rem] text-ink placeholder:text-grey-dim focus:border-purple-soft focus:outline-none";

  return (
    <RevealSection id="contact" className="border-t border-ink/10 px-[8vw] py-[8vh]">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="mb-5 text-[0.95rem] text-grey">Contact</p>
          <p className="max-w-[24ch] font-display text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.35] font-medium text-ink">
            Talk to us about SEER Health and MDT+.
          </p>
          <p className="mt-6 text-[0.95rem] text-grey">
            Dean Minnock
            <br />
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline underline-offset-4 hover:text-purple-soft">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
          />
          <textarea
            required
            placeholder="Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClasses} resize-none`}
          />
          <button
            type="submit"
            className="mt-2 w-fit rounded-[3px] border border-purple bg-purple px-[1.6rem] py-[0.85rem] text-[0.95rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
          >
            Send
          </button>
        </form>
      </div>
    </RevealSection>
  );
}
