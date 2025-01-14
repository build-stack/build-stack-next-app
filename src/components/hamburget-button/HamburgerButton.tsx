'use client'
import { useState } from "react";
import styles from "./HamburgerButton.module.css";

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={`${styles.menu} ${isOpen ? styles.opened : ''} sm:hidden`}
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-label="Main Menu"
    >
      <svg
        className={styles.menuIcon}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`${styles.line} ${styles.line1}`}
          d="M 20,29 H 80 C 80,29 94.5,28.8 94.5,66.7 94.5,78 91,81.7 85.3,81.7 79.6,81.7 75,75 75,75 L 25,25"
        />
        <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
        <path
          className={`${styles.line} ${styles.line3}`}
          d="M 20,71 H 80 C 80,71 94.5,71.2 94.5,33.3 94.5,22 91,18.3 85.3,18.3 79.6,18.3 75,25 75,25 L 25,75"
        />
      </svg>
    </button>
  )
}