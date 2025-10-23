import React from 'react';
import styles from '../styles/about.module.css';

export default function About() {
  return (
    <section className={styles.container}>
      <h2>About Me</h2>
      <p>
        Hi! I'm <strong>Raghava</strong>, a passionate Frontend Engineer and Machine Learning enthusiast. 
        I specialize in building fast, accessible, and responsive web applications. 
        I love combining clean, modern UI with intelligent ML-driven solutions.
      </p>

      <h3>Skills</h3>
      <ul className={styles.skills}>
        <li>React, Redux, Vite, and modern JS</li>
        <li>HTML5, CSS3, TailwindCSS, and Responsive Design</li>
        <li>Python & Machine Learning (scikit-learn, TensorFlow, NLP)</li>
        <li>REST APIs, Node.js, and Full-Stack Development</li>
        <li>Git, GitHub, and collaborative development</li>
      </ul>

      <h3>Interests</h3>
      <p>
        I enjoy experimenting with AI/ML applications, optimizing web performance, and learning about emerging frontend technologies.
      </p>

      <h3>Experience</h3>
      <p>
        I have worked on multiple personal and academic projects, creating production-ready interfaces and small ML models. 
        My goal is to build applications that are both functional and user-friendly.
      </p>
    </section>
  );
}
