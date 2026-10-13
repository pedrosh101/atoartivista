"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/client";

const field =
  "w-full border-b border-clr4/30 bg-transparent py-3 text-base text-clr2 outline-none transition-colors placeholder:text-clr4/40 focus:border-clr2";

export default function ContactForm({ to }: { to: string }) {
  const { t } = useI18n();
  const f = t.contact.form;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      f.subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-8 font-urbanist text-2xl md:text-3xl">{f.title}</h2>

      <div className="space-y-6">
        <label className="block">
          <span className="font-urbanist text-sm text-clr4/70">{f.name}</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            autoComplete="name"
          />
        </label>

        <label className="block">
          <span className="font-urbanist text-sm text-clr4/70">{f.email}</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field}
            autoComplete="email"
          />
        </label>

        <label className="block">
          <span className="font-urbanist text-sm text-clr4/70">
            {f.message}
          </span>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${field} resize-none`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-10 rounded-full bg-clr2 px-8 py-3 font-urbanist text-sm text-clr1 transition-opacity hover:opacity-85"
      >
        {f.send}
      </button>
    </form>
  );
}
