"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "dean@seerhealth.tech";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [region, setRegion] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent("API access request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRegion: ${region}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full border-b border-ink/20 bg-transparent py-3 text-[0.95rem] text-ink placeholder:text-grey-dim focus:border-purple-soft focus:outline-none";

  return (
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
      <input
        type="text"
        required
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className={inputClasses}
      />
      <input
        type="text"
        required
        placeholder="Region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className={inputClasses}
      />
      <button
        type="submit"
        className="mt-2 w-fit rounded-[3px] border border-purple bg-purple px-[1.6rem] py-[0.85rem] text-[0.95rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
      >
        Request access
      </button>
    </form>
  );
}
