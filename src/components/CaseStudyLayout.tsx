import type { ReactNode } from 'react'
import PortfolioGrid from './PortfolioGrid'
import GridItem from './GridItem'
import Reveal from './Reveal'
import './CaseStudyLayout.css'

interface CaseStudyLayoutProps {
  left: ReactNode
  right: ReactNode
  /** Space above the grid. Defaults to the standard case-study top spacing. */
  topSpacing?: string
}

/**
 * Shared case-study composition on the master 12-column grid: a 4-column
 * information column and an 8-column visual/spec column, both collapsing
 * to the full 12 columns at <=860px (see GridItem's mobileSpan).
 */
function CaseStudyLayout({ left, right, topSpacing = 'var(--section-gap-small)' }: CaseStudyLayoutProps) {
  return (
    <PortfolioGrid className="case-study" style={{ marginTop: topSpacing }}>
      <GridItem span={4} mobileSpan={12}>
        <Reveal className="case-study__col">{left}</Reveal>
      </GridItem>
      <GridItem span={8} mobileSpan={12}>
        <Reveal className="case-study__col" delay={80}>
          {right}
        </Reveal>
      </GridItem>
    </PortfolioGrid>
  )
}

export default CaseStudyLayout
