import Link from 'next/link'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal'

const focusAreas = ['Distributed systems', 'Data platforms', 'Backend engineering']

export default function Hero() {
  return (
    <section id="home" className="hero section-wrap">
      <div className="page-grid hero-grid" aria-hidden="true" />
      <div className="hero-layout content-width">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow"><span className="status-dot" /> Software engineer <span className="eyebrow-divider">/</span> Bangalore, India</p>
            <h1 className="hero-title">Building systems<br />that <span>hold up.</span></h1>
            <p className="hero-intro">
              I&apos;m Atharva Jadhav, a backend-focused engineer working across distributed systems,
              real-time data, and the details that make software feel considered.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#work">Explore my work <FiArrowDownRight aria-hidden="true" /></Link>
              <a className="text-link" href="mailto:jadhavatharva499@gmail.com">Let&apos;s talk <FiArrowUpRight aria-hidden="true" /></a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="hero-focus" aria-label="Areas of focus">
              {focusAreas.map((area, index) => <span key={area}>{index > 0 && <i aria-hidden="true" />}{area}</span>)}
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-visual-wrap" delay={0.16}>
          <div className="hero-visual">
            <div className="profile-scene" role="img" aria-label="Atharva's engineering toolkit: Java, Kafka, Flink, Go, AWS, and Docker, with Go and AWS marked as learning.">
              <div className="profile-scene-grid" />
              <div className="profile-scene-orbit profile-scene-orbit-a" />
              <div className="profile-scene-orbit profile-scene-orbit-b" />
              <div className="profile-tech-chip profile-chip-java"><i />JAVA</div>
              <div className="profile-tech-chip profile-chip-kafka"><i />KAFKA</div>
              <div className="profile-tech-chip profile-chip-flink"><i />FLINK</div>
              <div className="profile-tech-chip profile-chip-go"><i />GO <span>LEARNING</span></div>
              <div className="profile-tech-chip profile-chip-aws"><i />AWS <span>LEARNING</span></div>
              <div className="profile-terminal">
                <div className="profile-terminal-bar">
                  <span className="terminal-lights"><i /><i /><i /></span>
                  <span>ATHARVA / FIELD NOTES</span>
                  <span className="terminal-live"><i />LIVE</span>
                </div>
                <div className="profile-terminal-body">
                  <p><span>$</span> whoami</p>
                  <strong>Curiosity first.<br />Systems thinking always.</strong>
                  <div className="profile-terminal-rule" />
                  <p><span>$</span> building</p>
                  <div className="profile-terminal-value">Java services <b>+</b> data platforms</div>
                  <div className="profile-terminal-tech">Kafka <i /> Flink <i /> Docker</div>
                  <p><span>$</span> exploring</p>
                  <div className="profile-terminal-value">Go <b>/</b> AWS <b>/</b> cloud <b>/</b> delivery<span className="terminal-cursor" /></div>
                </div>
              </div>
            </div>
            <div className="visual-index"><span>ENGINEERING / FIELD NOTES</span><strong>AJ—001</strong></div>
            <div className="visual-caption">
              <div><span className="caption-kicker">BUILD / LEARN / REPEAT</span><strong>Curious by design.</strong></div>
              <span className="caption-arrow" aria-hidden="true"><FiArrowUpRight /></span>
            </div>
          </div>
          <p className="visual-note"><span>01</span> Production-minded backend work, with room left for the next thing to learn.</p>
        </Reveal>
      </div>
      <a href="#work" className="hero-scroll" aria-label="Scroll to selected work"><span>SCROLL TO EXPLORE</span><FiArrowDownRight aria-hidden="true" /></a>
    </section>
  )
}
