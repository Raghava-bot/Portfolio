import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}><NavLink to="/">Raghava</NavLink></h1>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({isActive}) => isActive ? styles.active : undefined}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? styles.active : undefined}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? styles.active : undefined}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? styles.active : undefined}>Contact</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
