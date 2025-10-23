import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import  styles from'../styles/home.module.css'


export default function Home(){
return (
<section className="Container">
<div className={styles.hero}>
<div>
<h2>Hi, I'm Raghava.</h2>
<p>Frontend engineer & ML enthusiast building fast, accessible web experiences.</p>
</div>
<img src="/src/assets/hero.jpg" alt="hero" className={styles.heroImg} />
</div>


<h3>Selected projects</h3>
<div className={styles.grid}>
{projects.slice(0,3).map(p=> <ProjectCard key={p.slug} {...p} />)}
</div>
</section>
)
}