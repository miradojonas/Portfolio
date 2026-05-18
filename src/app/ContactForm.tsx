"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import styles from "./page.module.css";

export default function ContactForm() {
  const sendEMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const contactTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
    const replyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_REPLY_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !contactTemplateId || !replyTemplateId || !publicKey) {
      console.error("Missing EmailJS environment variables");
      alert("Configuration EmailJS manquante");
      return;
    }

    // Email pour moi
    try {
      await emailjs.sendForm(serviceId, contactTemplateId, form, publicKey);

      // Email automatique
      await emailjs.sendForm(serviceId, replyTemplateId, form, publicKey);

      alert("Message envoyé avec succès!");
      form.reset();
    } catch (error) {
      console.log(error);
      alert("Erreur lors de l'envoi");
    }
  };

  return (
    <form onSubmit={sendEMail} className={styles.contactForm}>
      <div className={styles.formTitle}>Me contacter</div>

      <div className={styles.formGrid}>
        <label className={styles.formField}>
          Nom
          <input type="text" name="name" placeholder="Votre nom" required />
        </label>

        <label className={styles.formField}>
          Email
          <input type="email" name="email" placeholder="Votre email" required />
        </label>
      </div>

      <label className={styles.formField}>
        Message
        <textarea name="message" placeholder="Votre message" rows={5} required />
      </label>

      <button type="submit" className={`${styles.button} ${styles.submitButton} ${styles.tap}`}>
        Envoyer
      </button>
    </form>
  );
}