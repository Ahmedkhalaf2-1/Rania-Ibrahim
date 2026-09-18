import type { ReactNode } from 'react'
import './PortfolioContainer.css'

interface PortfolioContainerProps {
  children: ReactNode
  className?: string
}

/** Sole source of the global horizontal page gutters — reused by every section. */
function PortfolioContainer({ children, className = '' }: PortfolioContainerProps) {
  return <div className={`portfolio-container ${className}`.trim()}>{children}</div>
}

export default PortfolioContainer
