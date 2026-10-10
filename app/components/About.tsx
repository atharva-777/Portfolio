import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import Reveal from './Reveal'

const resumeUrl = process.env.NEXT_PUBLIC_RESUME_LINK

export default function About() {
  return (
    <section id="about" className="about-section section-wrap">
      <div className="content-width about-layout">
        <Reveal className="about-aside">
          <p className="eyebrow">A little context</p>
          <div className="about-monogram" aria-label="Atharva Jadhav">
            <Image src="/assets/profilePic.png" alt="Portrait of Atharva Jadhav" fill sizes="240px" />
          </div>
          <p className="aside-note">Curiosity first.<br />Systems thinking always.</p>
        </Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <p className="section-index">01 <span>/ ABOUT</span></p>
          <h2 className="section-title">Good software is<br />quietly <em>reliable.</em></h2>
          <div className="about-prose">
            <p>
              I&apos;m a software engineer at Raja Software Labs, building Java microservices and data
              pipelines for large-scale products. My day-to-day work touches Kafka, Apache Beam,
              Flink, and the operational details around distributed systems.
            </p>
            <p>
              Before that, I led backend work at Yoliday. Outside the workbench, I enjoy turning
              rough ideas into useful products and learning my way into Go, cloud infrastructure,
              and modern delivery workflows.
            </p>
          </div>
          <div className="about-meta">
            <div><span>NOW</span><strong>Backend & data systems</strong></div>
            <div><span>ALSO</span><strong>Flipkart Grid 5.0 semi-finalist</strong></div>
          </div>
          <div className="about-links">
            {resumeUrl && <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">Resume <FiDownload aria-hidden="true" /></a>}
            <Link className="text-link" href="/blog">Notes from the field <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
