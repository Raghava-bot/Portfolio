import React from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import '../styles/projects.module.css'


export default function Projects(){
return (
<section className="container">
<h2>Projects</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1rem'}}>
{projects.map(p=> <ProjectCard key={p.slug} {...p} />)}
</div>
</section>
)
}