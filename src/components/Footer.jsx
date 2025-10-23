import React from "react";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Raghava | All Rights Reserved</p>
      <div className={styles.socials}>
        <a href="https://github.com/Raghava-bot" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/araveti-raghavendra-01a49b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}
