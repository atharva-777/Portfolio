import Reveal from './Reveal'

const skillGroups = [
  {
    number: '01',
    title: 'Backend & services',
    description: 'Building APIs and service boundaries that stay understandable as systems grow.',
    skills: ['Java', 'Spring Boot', 'Microservices', 'Go', 'Node.js', 'Express'],
  },
  {
    number: '02',
    title: 'Data & storage',
    description: 'Streaming, processing, and storing data with reliable operational patterns.',
    skills: ['Kafka', 'Apache Beam', 'Flink', 'Airflow', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    number: '03',
    title: 'Cloud & delivery',
    description: 'Packaging applications and learning the infrastructure that runs them.',
    skills: ['Docker', 'AWS · learning', 'Cloud · learning', 'Git', 'GitHub Actions', 'Postman'],
  },
  {
    number: '04',
    title: 'Web & interface',
    description: 'Enough frontend fluency to take a product from service to polished experience.',
    skills: ['TypeScript', 'React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
]

export default function Skills() {
  return (
    <section id="expertise" className="expertise-section section-wrap">
      <div className="content-width">
        <Reveal className="section-heading-row">
          <div>
            <p className="section-index">02 <span>/ EXPERTISE</span></p>
            <h2 className="section-title">Tools I use.<br /><em>Ideas I explore.</em></h2>
          </div>
          <p className="section-heading-note">A working map, not a leaderboard. The cloud and Go are active learning tracks.</p>
        </Reveal>
        <div className="skill-list">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 0.06}>
              <article className="skill-row">
                <span className="skill-number">{group.number}</span>
                <div className="skill-description"><h3>{group.title}</h3><p>{group.description}</p></div>
                <ul className="skill-tags" aria-label={`${group.title} technologies`}>
                  {group.skills.map((skill) => <li key={skill} className={skill.includes('learning') ? 'is-learning' : undefined}>{skill}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
