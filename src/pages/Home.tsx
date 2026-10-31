import { Link } from "react-router";
import HeroCarousel from "../components/HeroCarousel";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import hero5 from "../assets/hero-5.jpg";
import styles from "./Home.module.css";

const heroSlides = [
  { src: hero1 },
  { src: hero2 },
  { src: hero3 },
  { src: hero4 },
  { src: hero5, position: "top" },
];

const therapists = [
  {
    name: "Cynthia Buysse",
    details: [
      "Rizivnr: 5-25770-67-521",
      "Ondernemingsnr  BE0721315655",
      "Gedeconventioneerd",
      "Meer dan 30 jaar praktijkervaring",
    ],
  },
  {
    name: "Naima Meerschout",
    details: [
      "Rizivnr  5-51237-14-527",
      "Ondernemingsnr  BE0805149983",
      "Gedeconventioneerd",
      "Afgestudeerd in 2023 aan de Universiteit van Gent",
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <HeroCarousel slides={heroSlides} />
        <h1 className={styles.heroTitle}>Jouw lichaam onze zorg</h1>
      </section>

      <section className={styles.welcome}>
        <div className={styles.welcomeLeft}>
          <h2 className={styles.sectionTitle}>Welkom bij de praktijk</h2>
          <div>
            <p>
              Nabij het centrum van Oostakker vindt u onze praktijk die garant
              staat voor een professionele en individuele behandeling op maat
              van de patiënt.
            </p>
            <p>
              Wij volgen regelmatig bijscholingen om de patiënt de best
              mogelijke revalidatie te garanderen.
            </p>
          </div>
        </div>
        <div className={styles.welcomeRight}>
          <p>
            Het doel dat we hierbij voor ogen hebben is om onze patiënten zo
            efficiënt mogelijk te helpen teneinde het aantal vereiste
            behandelingen te kunnen minimaliseren. Daarnaast staan we onze
            patiënten bij met houdingsadvies om klachten in de toekomst te
            vermijden en leren we hen hier desgevallend oefeningen voor aan.
          </p>
          <p>
            Tevens zijn wij gewaardeerde stagebegeleiders voor kinestudenten van
            de Universiteit Gent.
          </p>
        </div>
      </section>

      <section className={styles.therapists}>
        <h2 className={styles.sectionTitle}>Therapeuten</h2>
        <div className={styles.therapistList}>
          {therapists.map((therapist) => (
            <div key={therapist.name} className={styles.therapist}>
              <h3 className={styles.therapistName}>{therapist.name}</h3>
              {therapist.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          ))}
        </div>
        <Link to="/over-ons" className={`pill-button ${styles.more}`}>
          More Of Us
        </Link>
      </section>
    </>
  );
}
