import Reveal from './Reveal'
import Tag from './Tag'
import Button from './Button'
import './AboutSection.css'

const SKILLS = ['Brand identity', 'UI/UX', 'Packaging', 'Editorial', 'Typography', 'Illustration']

const BIO =
  'Creative and detail-oriented Graphic Designer and 2026 graduate of the Faculty of Fine Arts, Alexandria University. Experienced in crafting cohesive brand identity systems, UI/UX designs, packaging, and digital media solutions with hands-on freelance experience. Skilled at translating complex concepts into functional visual solutions, combining strong artistic aesthetics with user-centered design principles.'

const EXPERIENCE = [
  'Freelance Graphic Designer —',
  'Sanad app identity & UI/UX,',
  'Alexandria Opera House rebrand,',
  'Addison (Canada) logo,',
  'Romance Palace Hotels promo,',
  '2024–2026.',
]
const EDUCATION = [
  'Bachelor of Fine Arts, Graphic Design —',
  'Faculty of Fine Arts,',
  'Alexandria University.',
  'Graduated 2026, Very Good with Honors.',
]
const SOFTWARE = ['Illustrator,', 'Photoshop,', 'InDesign,', 'After Effects,', 'Figma.']

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        <div className="about__left">
          <Reveal>
            <p className="about__intro">Hello! My name is</p>
            <h2 className="about__name">Rania Abdullah</h2>
          </Reveal>

          {/* Dormant portrait slot — intentionally hidden per design spec */}
          <div className="about__portrait" aria-hidden="true" />
        </div>

        <div className="about__right">
          <Reveal className="about__group">
            <span className="about__label">About Me</span>
            <p className="about__bio">{BIO}</p>
          </Reveal>

          <Reveal className="about__group" delay={80}>
            <span className="about__label">Skill Set</span>
            <div className="about__tags">
              {SKILLS.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Reveal>

          <Reveal className="about__group" delay={140}>
            <div className="about__meta-grid">
              <div className="about__meta-col">
                <span className="about__label">Experience</span>
                {EXPERIENCE.map((item) => (
                  <p className="about__meta-text" key={item}>
                    {item}
                  </p>
                ))}
              </div>
              <div className="about__meta-col">
                <span className="about__label">Education</span>
                {EDUCATION.map((item) => (
                  <p className="about__meta-text" key={item}>
                    {item}
                  </p>
                ))}
              </div>
              <div className="about__meta-col">
                <span className="about__label">Software</span>
                {SOFTWARE.map((item) => (
                  <p className="about__meta-text" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="about__group about__cta" delay={200}>
            <Button href="#s01" variant="primary">
              View the work
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
