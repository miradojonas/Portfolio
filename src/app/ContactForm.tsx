/*"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus({
          type: "error",
          message: data.error ?? "Envoi impossible. Réessaie plus tard.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Message envoyé. Merci, je te réponds rapidement.",
      });
    } catch {
      setStatus({ type: "error", message: "Erreur réseau. Réessaie dans un instant." });
    }
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <p className={styles.formTitle}>Laisser un message</p>

      <div className={styles.formGrid}>
        <label className={styles.formField}>
          <span>Nom</span>
          <input name="name" type="text" required maxLength={100} placeholder="Ton nom" />
        </label>

        <label className={styles.formField}>
          <span>Email</span>
          <input name="email" type="email" required maxLength={200} placeholder="ton@email.com" />
        </label>
      </div>

      <label className={styles.formField}>
        <span>Message</span>
        <textarea
          name="message"
          required
          maxLength={3000}
          rows={5}
          placeholder="Écris ton message ici..."
        />
      </label>

      <button type="submit" className={`${styles.button} ${styles.submitButton}`} disabled={status.type === "loading"}>
        {status.type === "loading" ? "Envoi..." : "Envoyer le message"}
      </button>

      {status.type === "success" ? <p className={styles.formSuccess}>{status.message}</p> : null}
      {status.type === "error" ? <p className={styles.formError}>{status.message}</p> : null}
    </form>
  );
}
*/