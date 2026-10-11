import type { ProjectType } from './lib/interface'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Project from './components/Project'
import Skills from './components/Skills'
import { fetchProjects } from './lib/fetchData'

export const revalidate = 3600

export default async function Home() {
  const projects = (await fetchProjects()) as ProjectType
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Atharva Jadhav',
    jobTitle: 'Software Engineer',
    worksFor: { '@type': 'Organization', name: 'Raja Software Labs' },
    knowsAbout: ['Backend engineering', 'Distributed systems', 'Data engineering', 'Java', 'Apache Kafka'],
    sameAs: [
      'https://github.com/atharva-777',
      'https://www.linkedin.com/in/atharva-jadhav-/',
      'https://leetcode.com/atharva_777/',
    ],
  }

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }} />
      <Hero />
      <Project projects={projects}/>
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
