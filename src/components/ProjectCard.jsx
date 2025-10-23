import React from 'react';
import styles from '../styles/projects.module.css';

export default function ProjectCard({ title, description, image, slug, tech, github, live }) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.img} />
      <div className={styles.body}>
        <h4>{title}</h4>
        <p className={styles.desc}>{description}</p>
        <div className={styles.meta}>{tech.join(' • ')}</div>

        <div className={styles.buttons}>
          {/* Live Button */}
          {live ? (
            <a href={live} target="_blank" rel="noopener noreferrer" className={styles.btnLive}>
              🔗 Live Demo
            </a>
          ) : (
            <button className={styles.btnLive} disabled>
              🔗 Live Demo
            </button>
          )}

          {/* GitHub Button */}
          {github ? (
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.btnCode}>
              💻 GitHub
            </a>
          ) : (
            <button className={styles.btnCode} disabled>
              💻 GitHub
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
