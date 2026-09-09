"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "dean@seerhealth.tech";

export default function ContactCard({
  title,
  context,
  subjectPrefix,
}: {
  title: string;
  context: string;
  subjectPrefix: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`${subjectPrefix} from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full border-b border-ink/20 bg-transparent py-2.5 text-[0.9rem] text-ink placeholder:text-grey-dim focus:border-purple-soft focus:outline-none";

  return (
    <div className="border-t border-ink/15 pt-6">
      <div className="font-display text-[1.15rem] font-medium text-ink">{title}</div>
      <p className="mt-2 text-[0.9rem] leading-[1.6] text-grey">{context}</p>
      <p className="mt-4 text-[0.85rem] text-grey-dim">
        Dean Minnock &middot;{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-ink underline underline-offset-4 hover:text-purple-soft"
        >
          {CONTACT_EMAIL}
        </a>
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
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
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClasses} resize-none`}
        />
        <button
          type="submit"
          className="mt-1 w-fit rounded-[3px] border border-ink/25 px-[1.4rem] py-[0.7rem] text-[0.9rem] font-medium text-ink transition-colors hover:border-ink/60"
        >
          Send
        </button>
      </form>
    </div>
  );
}
