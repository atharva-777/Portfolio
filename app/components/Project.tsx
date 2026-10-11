import Image from 'next/image'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import type { ProjectType } from '../lib/interface'
import { urlFor } from '../lib/sanityImageUrl'
import Reveal from './Reveal'

export default function Project({ projects }: { projects: ProjectType }) {
  return (
    <section id="work" className="work-section section-wrap">
      <div className="content-width">
        <Reveal className="section-heading-row work-heading">
          <div>
            <p className="section-index">03 <span>/ SELECTED WORK</span></p>
            <h2 className="section-title">Built with intent.<br /><em>Made to matter.</em></h2>
          </div>
          <p className="section-heading-note">A selection of experiments and shipped work across backend, data, and product.</p>
        </Reveal>

        {projects.length > 0 ? (
          <div className="project-list">
            {projects.map((project, index) => {
              const imageRef = project.poster?.asset?._ref ?? project.content?.[0]?.asset?._ref
              const imageUrl = imageRef ? urlFor(imageRef).width(1400).height(900).fit('crop').url() : null

              return (
                <Reveal key={project._id} delay={Math.min(index * 0.06, 0.24)}>
                  <article className="project-row">
                    <div className="project-visual">
                      {imageUrl ? (
                        <Image src={imageUrl} alt={`${project.title} project preview`} fill sizes="(min-width: 900px) 48vw, 100vw" priority={index === 0} />
                      ) : (
                        <div className="project-image-empty"><span>{String(index + 1).padStart(2, '0')}</span><strong>{project.title}</strong></div>
                      )}
                      <span className="project-counter">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="project-info">
                      <p className="eyebrow">CASE STUDY <span>/</span> {String(index + 1).padStart(2, '0')}</p>
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.description}</p>
                      {!!project.technologies?.length && (
                        <ul className="project-tech" aria-label="Technologies used">
                          {project.technologies.map((technology) => <li key={technology._key}>{technology.name}</li>)}
                        </ul>
                      )}
                      {!!project.all_links?.length && (
                        <div className="project-links">
                          {project.all_links.map((link) => {
                            const external = /^https?:\/\//.test(link.url)
                            return (
                              <a key={link._key} href={link.url} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                                {link.name === 'Github' ? <FiGithub aria-hidden="true" /> : <FiArrowUpRight aria-hidden="true" />}
                                {link.name}
                              </a>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        ) : (
          <p className="empty-work">New work is being prepared. Come back soon.</p>
        )}
      </div>
    </section>
  )
}
