import { useId, useState } from "react";
import cynthia from "../assets/over-ons/cynthia.webp";
import naima from "../assets/over-ons/naima.webp";
import chevron from "../assets/over-ons/chevron-down-double.svg";
import myofasciale from "../assets/over-ons/myofasciale-therapie.webp";
import lymfdrainage from "../assets/over-ons/manuele-lymfdrainage.webp";
import manueleTherapie from "../assets/over-ons/manuele-therapie.webp";
import handrevalidatie from "../assets/over-ons/handrevalidatie.webp";
import littekenbehandeling from "../assets/over-ons/littekenbehandeling.webp";
import taping from "../assets/over-ons/taping.webp";
import kinesiologie from "../assets/over-ons/kinesiologie.webp";
import styles from "./OverOns.module.css";

type Specialisation = {
  title: string;
  icon: string;
  /** Paragraphs separated by a blank line; each paragraph's lines are separated by a line break */
  description: string[][];
};

const specialisations: Specialisation[] = [
  {
    title: "Myofasciale therapie",
    icon: myofasciale,
    description: [
      [
        "Bij deze therapie behandelen we pijnen die hun oorzaak vinden in het verkeerd functioneren van spieren. In deze spieren ontwikkelen zich pijnpunten, Trigger points genoemd. Via een goede spierdiagnose kunnen deze oorzakelijke pijnpunten opgespoord en bestreden worden met specifieke behandelingstechnieken zoals; dry needling, stretching, tens, warmte,...",
      ],
    ],
  },
  {
    title: "Manuele lymfdrainage Vodder",
    icon: lymfdrainage,
    description: [
      [
        "Deze techniek is bedoeld voor mensen waar er stagnatie is in het lymfsysteem waardoor er geen goede doorstroming is van het lichaamsvocht. Zo ontstaan niet-zichtbare en zichtbare oedemen. Deze oedemen kunnen fysieke en mentale klachten veroorzaken.",
      ],
    ],
  },
  {
    title: "Manuele therapie",
    icon: manueleTherapie,
    description: [
      [
        "In de manuele therapie beschouwen we het lichaam als 1 geheel en leggen we verbanden tussen de verschillende delen en stelsels van het bewegingsapparaat. De bedoeling is het herstellen en verbeteren van dit bewegingsapparaat via mobilisaties, oscillaties, manipulaties, harmoniserende technieken,... aangevuld met de juiste oefentherapie.",
      ],
    ],
  },
  {
    title: "Handrevalidatie",
    icon: handrevalidatie,
    description: [
      [
        "Aandoeningen aan hand, pols of onderarm kunnen het dagelijks functioneren sterk beïnvloeden. Omdat elke situatie anders is, werken we steeds met een individuele aanpak.",
      ],
      [
        "De hand is complex: ze moet tegelijk stabiel én mobiel zijn. Daarom focussen we op wat jij nodig hebt, met oefeningen voor zowel mobiliteit als stabiliteit.",
      ],
      [
        "Handrevalidatie richt zich op herstel na een operatie of trauma waarbij botten, pezen of zenuwen beschadigd zijn. Een snelle, gespecialiseerde behandeling is dan cruciaal.",
        "Ook bij instabiliteit of artrose biedt deze therapie meerwaarde. Je leert gerichte oefeningen en we bekijken indien nodig hulpmiddelen voor je dagelijkse activiteiten.",
      ],
    ],
  },
  {
    title: "Littekenbehandeling",
    icon: littekenbehandeling,
    description: [
      [
        "We behandelen littekens medisch, niet esthetisch.",
        "Littekens na een operatie kunnen verkleven met onderliggende structuren. Daardoor functioneren spieren, gewrichten en fascia soms minder goed, wat klachten kan veroorzaken.",
        "Door littekens tijdig te behandelen, kunnen problemen in omliggende weefsels voorkomen worden. Ook wanneer er al klachten zijn, kan behandeling nog helpen. Zelfs oudere littekens — tot ongeveer 20 jaar — kunnen vaak nog verbeterd worden.",
      ],
    ],
  },
  {
    title: "Taping",
    icon: taping,
    description: [
      ["Taping We gebruiken zowel klassieke kinesiotape als dynamic tape."],
      [
        "Kinesiotape is een elastische tape die spieren op een correcte manier ondersteunt. Ze kan pijn verminderen, spanning reguleren, gewrichten ondersteunen en de bloed‑ en lymfestroom bevorderen.",
      ],
      [
        "Dynamic tape is een zeer elastische, 2‑dimensionele tape die werkt als een soort “extra spier”. Dankzij haar unieke eigenschappen biedt ze een duidelijke meerwaarde in revalidatie en sport.",
      ],
    ],
  },
  {
    title: "Kinesiologie",
    icon: kinesiologie,
    description: [
      [
        "Dit is een diagnostische methode waarbij we met specifieke spierfunctietesten een gezondheidsprobleem gaan benaderen en evalueren.",
      ],
    ],
  },
];

function Lines({ lines }: { lines: string[] }) {
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {line}
    </span>
  ));
}

function SpecialisationCard({ item }: { item: Specialisation }) {
  const [open, setOpen] = useState(false);
  const textId = useId();

  return (
    <article className={styles.card}>
      <img src={item.icon} alt="" width={186} height={186} />
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <button
        type="button"
        className={`${styles.chevron} ${open ? styles.open : ""}`}
        aria-expanded={open}
        aria-controls={textId}
        aria-label={`${open ? "Verberg" : "Toon"} uitleg over ${item.title}`}
        onClick={() => setOpen(!open)}
      >
        <img src={chevron} alt="" width={28.25} height={33.5} />
      </button>
      <div
        id={textId}
        className={`${styles.cardTextWrapper} ${open ? styles.open : ""}`}
        inert={!open}
      >
        <div className={styles.cardText}>
          {item.description.map((lines, i) => (
            <p key={i}>
              <Lines lines={lines} />
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function OverOns() {
  return (
    <>
      <section className={styles.intro}>
        <h1 className={styles.title}>Over Ons</h1>
        <p className={styles.lead}>
          Wij hebben elk onze eigen specialisaties, maar wij overleggen
          voortdurend met elkaar en volgen regelmatig bijscholingen.
        </p>
      </section>

      <section className={`${styles.bio} ${styles.bioDark}`}>
        <div className={styles.bioText}>
          <p>
            <span className={styles.name}>Cynthia Buysse</span> studeerde af in
            1995. Zij deed ervaring op bij verschillende collega's.
          </p>
          <p>
            {
              "In september 2002 startte zij een eigen praktijk te Oostakker . Ze volgde diverse kortlopende opleidingen  en  enkele intensieve specialisaties: bewegingsconsulent (1999-2000) manuele lymfdrainage Vodder (2005-2006), manuele therapie (2014-2016), myofasciale therapie (2017-2018) en handrevalidatie (2022-2023)"
            }
          </p>
          <p>
            {
              "Zij is in het  bezit van het kwaliteitslabel Pro-q-kiné en de bijzondere beroepsbekwaamheid als manueel therapeut. Zij is ook lid van de beroepsvereniging AXXON."
            }
          </p>
        </div>
        <img
          src={cynthia}
          alt="Cynthia Buysse"
          width={310}
          height={310}
          className={styles.photo}
        />
      </section>

      <section className={`${styles.bio} ${styles.bioLight}`}>
        <div className={styles.bioText}>
          <p>
            <span className={styles.name}>Naima Meersschaut</span> heeft
            eveneens een geslaagde stage bij ons achter de rug. Ze behaalde haar
            diploma in de revalidatiewetenschappen aan de Universiteit van Gent,
            waarna ze in oktober 2023 enthousiast bij ons team aansloot.
          </p>
          <p>
            Zij voltooide een opleiding aan de UGent voor de bijzonder
            beroepsbekwaamheid als manueel therapeut.
            <br />
            Tevens voltooide zij de specialisatie tot myofasciaal therapeut.
          </p>
        </div>
        <img
          src={naima}
          alt="Naima Meersschaut"
          width={310}
          height={310}
          className={styles.photo}
        />
      </section>

      <section className={styles.specialisations}>
        <h2 className={styles.sectionTitle}>Onze Specialisaties</h2>
        <div className={styles.grid}>
          {specialisations.map((item) => (
            <SpecialisationCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
