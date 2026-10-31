import { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo-wit.webp";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="Je Kiné" width={165} height={110} />
        </Link>

        <button
          type="button"
          className={`${styles.menuButton} ${menuOpen ? styles.open : ""}`}
          aria-expanded={menuOpen}
          aria-controls="hoofdmenu"
          aria-label={menuOpen ? "Sluit menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* On desktop these sit inline in the bar; on mobile they form the dropdown menu */}
        <div
          id="hoofdmenu"
          className={`${styles.menu} ${menuOpen ? styles.open : ""}`}
        >
          <nav className={styles.nav}>
            <NavLink to="/over-ons" onClick={closeMenu}>
              Over Ons
            </NavLink>
            <NavLink to="/praktische-info" onClick={closeMenu}>
              Praktische Info
            </NavLink>
          </nav>
          <Link
            to="/contact"
            className={`pill-button ${styles.contact}`}
            onClick={closeMenu}
          >
            Contacteer Ons
          </Link>
        </div>
      </div>
    </header>
  );
}
