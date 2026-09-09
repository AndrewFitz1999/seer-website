"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "dean@seerhealth.tech";

const regions = [
  { value: "us-ca", label: "United States & Canada", available: false },
  { value: "uk-ie", label: "United Kingdom & Ireland", available: false },
  { value: "eu", label: "European Union", available: false },
  { value: "apac", label: "Asia-Pacific", available: false },
  { value: "latam", label: "Latin America", available: false },
  { value: "mea", label: "Middle East & Africa", available: false },
  { value: "other", label: "Other", available: false },
];

export default function DeveloperAccess() {
  const [regionValue, setRegionValue] = useState(regions[0].value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const region = regions.find((r) => r.value === regionValue) ?? regions[0];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent("API access request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRegion: ${region.label}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full border-b border-ink/20 bg-transparent py-2.5 text-[0.9rem] text-ink placeholder:text-grey-dim focus:border-purple-soft focus:outline-none";

  return (
    <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_1fr]">
      <div>
        <label htmlFor="region-select" className="mb-2 block text-[0.85rem] text-grey-dim">
          Your region
        </label>
        <select
          id="region-select"
          value={regionValue}
          onChange={(e) => setRegionValue(e.target.value)}
          className="w-full max-w-[320px] border-b border-ink/20 bg-transparent py-2.5 text-[0.95rem] text-ink focus:border-purple-soft focus:outline-none"
        >
          {regions.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>

        <p className="mt-6 max-w-[26ch] font-display text-[clamp(1.3rem,2.4vw,1.8rem)] leading-[1.35] font-medium text-ink">
          {region.available
            ? `The MDT platform is live in ${region.label}.`
            : "The MDT platform is not yet deployed in your region."}
        </p>
        <p className="mt-6 max-w-[46ch] text-[0.95rem] leading-[1.7] text-grey">
          Join the waitlist and we&rsquo;ll reach out as soon as access opens up in{" "}
          {region.label}.
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
        <input
          type="text"
          required
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClasses}
        />
        <button
          type="submit"
          className="mt-1 w-fit rounded-[3px] border border-purple bg-purple px-[1.6rem] py-[0.85rem] text-[0.95rem] font-medium text-white transition-colors hover:border-purple-soft hover:bg-purple-soft"
        >
          Request access
        </button>
      </form>
    </div>
  );
}
