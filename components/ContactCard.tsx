"use client";

import { useState, type FormEvent } from "react";

// Point this at a real form backend (e.g. a Formspree endpoint) so submissions
// actually reach an inbox. Left blank, submissions surface a friendly error
// instead of silently failing or falling back to a visible mailto address.
const FORM_ENDPOINT = "";

export default function ContactCard({
  title,
  context,
  subjectPrefix,
  submitLabel = "Send",
}: {
  title: string;
  context: string;
  subjectPrefix: string;
  submitLabel?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          subject: `${subjectPrefix} from ${name || "a visitor"}`,
          name,
          email,
          message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full border-b border-ink/20 bg-transparent py-2.5 text-[0.9rem] text-ink placeholder:text-grey-dim focus:border-purple-soft focus:outline-none";

  return (
    <div className="border-t border-ink/15 pt-6">
      <div className="font-display text-[1.15rem] font-medium text-ink">{title}</div>
      <p className="mt-2 text-[0.9rem] leading-[1.6] text-grey">{context}</p>

      {status === "sent" ? (
        <p className="mt-6 text-[0.9rem] text-grey">Thanks &mdash; we&rsquo;ll be in touch.</p>
      ) : (
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
            disabled={status === "sending"}
            className="mt-1 w-fit rounded-full border border-ink/25 px-[1.5rem] py-[0.7rem] text-[0.9rem] font-medium text-ink transition-colors hover:border-ink/60 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : submitLabel}
          </button>
          {status === "error" && (
            <p className="text-[0.8rem] text-grey-dim">
              Something went wrong sending your message. Please try again shortly.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
