import type { MouseEvent } from "react";
import bancontact from "../assets/praktische-info/betaling.webp";
import kaart from "../assets/praktische-info/kaart.webp";
import { mapsUrl } from "../maps";
import styles from "./PraktischeInfo.module.css";

const sections = [
  { id: "openingsuren", label: "Openingsuren" },
  { id: "annulatie", label: "Annulatie" },
  { id: "eerste-consultatie", label: "Eerste Consultatie" },
  { id: "tarieven", label: "Tarieven" },
  { id: "bereikbaarheid", label: "Bereikbaarheid" },
];


function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault();
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}

export default function PraktischeInfo() {
  return (
    <>
      <section className={styles.intro}>
        <h1 className={styles.title}>Praktische Info</h1>
        <nav className={styles.toc} aria-label="Inhoud">
          {[sections.slice(0, 3), sections.slice(3)].map((row, i) => (
            <div key={i} className={styles.tocRow}>
              {row.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(event) => scrollToSection(event, id)}
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </section>

      <section
        id="openingsuren"
        className={`${styles.block} ${styles.dark} ${styles.openingsuren}`}
      >
        <h2 className={styles.sectionTitle}>Openingsuren</h2>
        <div className={styles.blockText}>
          <p>
            Wij werken enkel op afspraak. Een afspraak kunt u enkel telefonisch
            maken.
          </p>
          <p>
            U kunt een afspraak maken op maandag-donderdag tussen 8:00 en 20:00
            en vrijdag tussen 8:00 en 15:00. Wij werken in vakanties, maar niet
            op feestdagen.
          </p>
        </div>
      </section>

      <section id="annulatie" className={`${styles.block} ${styles.light}`}>
        <h2 className={styles.sectionTitle}>Annulatie</h2>
        <div className={`${styles.blockText} ${styles.wide}`}>
          <p>
            Een vastgelegde afspraak dient minimum 24u op voorhand te worden
            geannuleerd. Bij laattijdig verwittigen of wanneer u niet komt
            opdagen, wordt de afspraak aangerekend.
          </p>
        </div>
      </section>

      <section
        id="eerste-consultatie"
        className={`${styles.block} ${styles.dark}`}
      >
        <h2 className={styles.sectionTitle}>Eerste Consultatie</h2>
        <div className={`${styles.blockText} ${styles.narrowBlock}`}>
          <p>
            Bij de eerste consultatie gelieve identiteitskaart, voorschrift en
            eventuele verslagen van onderzoek mee te brengen
          </p>
        </div>
      </section>

      <section id="tarieven" className={`${styles.light} ${styles.tarieven}`}>
        <div className={styles.tarievenText}>
          <h2 className={styles.sectionTitle}>Tarieven</h2>
          <p>
            Wij zijn gedeconventioneerde kinesitherapeuten. Voor een behandeling
            van 30 minuten vragen wij €36. Bij een eerste consult komt er een
            dossierkost bij van €7,28 die volledig terugbetaald wordt.
          </p>
          <p>
            {
              "De tarieven en terugbetaling  zijn afhankelijk van de soort pathologie en uw situatie als patiënt. U kan ze vinden op "
            }
            <a
              href="http://www.riziv.fgov.be/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              www.riziv.fgov.be
            </a>
          </p>
          <p>Voor uw en onze veiligheid betaalt u bij voorkeur met</p>
        </div>
        <img
          src={bancontact}
          alt="Bancontact"
          width={338}
          height={210}
          className={styles.bancontact}
        />
      </section>

      <section
        id="bereikbaarheid"
        className={`${styles.dark} ${styles.bereikbaarheid}`}
      >
        <h2 className={styles.sectionTitle}>Bereikbaarheid</h2>
        <div className={styles.travelGrid}>
          <div className={`${styles.travel} ${styles.voet}`}>
            <h3>Te voet</h3>
            <p>Vlot, eenvoudig en gezond</p>
          </div>
          <div className={`${styles.travel} ${styles.fiets}`}>
            <h3>Fiets</h3>
            <p>
              De praktijk is gemakkelijk bereikbaar met de fiets. Je kunt de
              fiets in het fietsenrek naast de parking stallen.
            </p>
          </div>
          <div className={`${styles.travel} ${styles.auto}`}>
            <h3>Auto</h3>
            <p className={styles.narrow}>
              Er is parking voorzien voor de patiënten van onze praktijk
            </p>
          </div>
          <div className={`${styles.travel} ${styles.ov}`}>
            <h3>Openbaar Vervoer</h3>
            <div>
              <p>
                De praktijk ligt op 10 minuten wandelen van halte Oostakker
                dorp. Hier stoppen de lijnen 12b, 70, 71, 737, 738, 741.
              </p>
              <p>
                Van halte Oostakker kerkhof is het 5 minuten wandelen naar onze
                praktijk. hier stoppen de lijnen 737, 738, 741.
              </p>
              <p>Opgelet! check altijd tijdig de tijdstippen.</p>
            </div>
          </div>
          <div
            className={`${styles.travel} ${styles.kaart}`}
          >
            <h3>Kaart</h3>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.mapLink}
            >
              <img
                src={kaart}
                alt="Kaart met de ligging van de praktijk, Ooistraat 35, 9041 Oostakker. Open de route in Google Maps."
                width={685}
                height={353}
              />
              <span className={styles.mapHint} aria-hidden>
                Route in Google Maps
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
