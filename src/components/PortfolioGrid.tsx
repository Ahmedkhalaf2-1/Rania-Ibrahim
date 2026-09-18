import type { CSSProperties, ReactNode } from 'react'
import './PortfolioGrid.css'

interface PortfolioGridProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

/** The shared 12-column grid every major piece of portfolio content aligns to. */
function PortfolioGrid({ children, className = '', style }: PortfolioGridProps) {
  return (
    <div className={`portfolio-grid ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

export default PortfolioGrid
