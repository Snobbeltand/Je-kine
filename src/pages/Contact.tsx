import { useState, type FormEvent } from "react";
import kaart from "../assets/praktische-info/kaart.webp";
import { mapsUrl } from "../maps";
import styles from "./Contact.module.css";


const phoneNumbers = [
  { label: "Algemeen", number: "09 329 00 64" },
  { label: "Cynthia", number: "0498 45 94 55" },
  { label: "Naima", number: "0471 45 12 03" },
];

type Status = "idle" | "sending" | "sent" | "error";

// Web3Forms e-mails each submission to the inbox registered for this key
async function sendContactForm(data: FormData): Promise<void> {
  data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
  data.append("subject", "Nieuwe vraag via de Je Kiné website");
  data.append("from_name", "Je Kiné website");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: data,
  });
  const result: { success?: boolean; message?: string } = await response
    .json()
    .catch(() => ({}));
  if (!response.ok || !result.success) {
    throw new Error(result.message ?? `Web3Forms error ${response.status}`);
  }
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      await sendContactForm(new FormData(form));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.lead}>
        Voor het maken, wijzigen of annuleren van een afspraak
        <br />
        kunt u ons bellen tijdens de praktijkuren
        <br />
        (ma-do 8u-20u, vrijdag 8u-17u).
      </p>

      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Heb je vragen?</h2>
          {/* Spam trap: hidden from people, bots that tick it get rejected */}
          <input
            type="checkbox"
            name="botcheck"
            className={styles.botcheck}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
          />
          <label className={styles.field}>
            Naam
            <input name="naam" autoComplete="name" required />
          </label>
          <label className={styles.field}>
            E-mail
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label className={styles.field}>
            Vraag?
            <span className={styles.messageWrapper}>
              <textarea name="vraag" required />
              <button
                type="submit"
                className={styles.send}
                aria-label="Verstuur"
                disabled={status === "sending"}
              >
                <span aria-hidden>&gt;</span>
              </button>
            </span>
          </label>
          <p className={styles.status} role="status">
            {status === "sent" && "Bedankt! We hebben je vraag ontvangen."}
            {status === "error" &&
              "Versturen is niet gelukt. Bel ons gerust op 09 329 00 64."}
          </p>
        </form>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.map}
        >
          <img
            src={kaart}
            alt="Kaart met de ligging van de praktijk, Ooistraat 35, 9041 Oostakker. Open de route in Google Maps."
            width={669}
            height={572}
          />
        </a>

        <address className={styles.info}>
          <h2 className={styles.infoTitle}>Je Kiné</h2>
          <p>Ooistraat 35, 9041 Oostakker</p>
          <h3 className={styles.infoSubtitle}>Telefoon</h3>
          <ul className={styles.phones}>
            {phoneNumbers.map(({ label, number }) => (
              <li key={label}>
                {label}:{" "}
                <a href={`tel:+32${number.replace(/\s/g, "").slice(1)}`}>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </address>
      </div>
    </section>
  );
}
