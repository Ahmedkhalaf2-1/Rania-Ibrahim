import Reveal from './Reveal'
import Button from './Button'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <Reveal className="hero__eyebrow-wrap">
        <p className="hero__eyebrow">Rania Abdullah — Graphic Designer</p>
      </Reveal>

      <Reveal delay={120} className="hero__title-wrap">
        <h1 className="hero__title">Portfolio</h1>
      </Reveal>

      <Reveal delay={220} className="hero__year-wrap">
        <p className="hero__year">2026</p>
      </Reveal>

      <Reveal delay={320} className="hero__cta">
        <Button href={`${import.meta.env.BASE_URL}Rania-Abdullah-CV.pdf`} variant="primary" download="Rania-Abdullah-CV.pdf">
          Download CV
        </Button>
      </Reveal>
    </section>
  )
}

export default Hero
