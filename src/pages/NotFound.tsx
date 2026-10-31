import { Link } from "react-router";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <h1 className={styles.title}>Pagina niet gevonden</h1>
      <p>Deze pagina bestaat niet (meer).</p>
      <Link to="/" className={`pill-button ${styles.home}`}>
        Naar de homepagina
      </Link>
    </section>
  );
}
