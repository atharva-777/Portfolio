import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
export default function Home() {
  return (
    <main
      // className='mx-auto mx-w-3xl px-4 sm:px-6 md:max-w-5xl'
      className="md:max-w-7xl md:mx-auto  sm:max-w-5xl mx-8 sm:mx-4"
    >
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}
