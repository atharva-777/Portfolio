import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
export default function Home() {
  return (
    <main className='mx-auto mx-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
    </main>
  )
}
