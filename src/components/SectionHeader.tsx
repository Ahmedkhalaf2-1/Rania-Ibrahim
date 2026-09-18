import type { CSSProperties } from 'react'
import Reveal from './Reveal'
import './SectionHeader.css'

interface SectionHeaderProps {
  number: string
  title: string
  /** Omit entirely for sections with no subtitle line (e.g. Section 06). */
  subtitle?: string
  /** Optional per-section color overrides. Omit to use each element's default. */
  numberColor?: string
  titleColor?: string
  subtitleColor?: string
}

function SectionHeader({
  number,
  title,
  subtitle,
  numberColor,
  titleColor,
  subtitleColor,
}: SectionHeaderProps) {
  return (
    <Reveal className="section-header">
      <span
        className="section-header__number"
        style={numberColor ? ({ color: numberColor } as CSSProperties) : undefined}
      >
        {number}
      </span>
      <div className="section-header__text">
        <h2
          className="section-header__title"
          style={titleColor ? ({ color: titleColor } as CSSProperties) : undefined}
        >
          {title}
        </h2>
        {subtitle ? (
          <p
            className="section-header__subtitle"
            style={subtitleColor ? ({ color: subtitleColor } as CSSProperties) : undefined}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </Reveal>
  )
}

export default SectionHeader
