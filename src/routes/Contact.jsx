import React from 'react';
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <section className={styles.container}>
      <h2>Contact Me</h2>
      <p>
        I’m always open to discussing new projects, opportunities, or collaborations. 
        Reach me at <a href="mailto:raghava@example.com">raghava@example.com</a>
      </p>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input type="text" placeholder="Your Name" required />
        </label>

        <label>
          Email
          <input type="email" placeholder="Your Email" required />
        </label>

        <label>
          Message
          <textarea placeholder="Your Message" required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      <div className={styles.socials}>
        <p>Or find me on:</p>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a> •
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a> •
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </section>
  );
}
