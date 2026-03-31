"use client";

import { useRef } from "react";
import styles from "./contact.module.css";

const SUPPORT_EMAIL = "jasprcodes@gmail.com";

export default function ContactPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = nameRef.current?.value.trim() ?? "";
    const subject = subjectRef.current?.value.trim() || "CutIQ Support";
    const message = messageRef.current?.value.trim() ?? "";

    const body = name ? `${message}\n\n— ${name}` : message;

    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.description}>
        Have a question, issue, or feedback about CutIQ? Fill out the form below
        and we&rsquo;ll get back to you as soon as possible.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            ref={nameRef}
            className={styles.input}
            type="text"
            placeholder="Your name"
          />
        </label>

        <label className={styles.label}>
          Subject
          <input
            ref={subjectRef}
            className={styles.input}
            type="text"
            placeholder="CutIQ Support"
          />
        </label>

        <label className={styles.label}>
          Message
          <textarea
            ref={messageRef}
            className={styles.textarea}
            placeholder="Describe your issue or question..."
            required
          />
        </label>

        <button type="submit" className={styles.submit}>
          Send Message
        </button>
      </form>

      <p className={styles.emailDirect}>
        Or email us directly at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </div>
  );
}
