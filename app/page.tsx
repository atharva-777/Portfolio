import Image from 'next/image'
import Hero from './components/Hero'
export default function Home() {
  return (
    <main className='mx-auto mx-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <Hero/>
    </main>
  )
}
