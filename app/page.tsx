import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import { fetchProjects } from './lib/fetchData'
import { ProjectType } from './lib/interface'
export default async function Home() {

  const projects = (await fetchProjects()) as ProjectType;
  return (
    <main >
      <Hero />
      <About />
      <Skills />
      <Project projects={projects}/>
      <Contact />
    </main>
  );
}
