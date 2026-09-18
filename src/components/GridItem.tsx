import type { CSSProperties, ReactNode } from 'react'
import './GridItem.css'

interface GridItemProps {
  /** Columns spanned on desktop, out of the shared 12-column grid. */
  span: number
  /** Columns spanned at <=900px. Omit to inherit `span` (no change at this tier). */
  tabletSpan?: number
  /** Columns spanned at <=860px. Omit to inherit the tablet tier (or `span`). */
  mobileSpan?: number
  /** Columns spanned at <=560px. Omit to inherit the tier above. */
  phoneSpan?: number
  children: ReactNode
  className?: string
}

/**
 * A cell on the shared 12-column PortfolioGrid. Only `span` is required —
 * the three responsive tiers are independent and each falls back to the
 * next wider one when omitted, so existing two-tier call sites (span +
 * mobileSpan) are unaffected by sections that need the finer 900/560
 * breakpoints (e.g. Typography's 3 -> 6 -> 12 progression).
 */
function GridItem({ span, tabletSpan, mobileSpan, phoneSpan, children, className = '' }: GridItemProps) {
  const style = {
    '--grid-item-span': span,
    '--grid-item-span-tablet': tabletSpan,
    '--grid-item-span-mobile': mobileSpan,
    '--grid-item-span-phone': phoneSpan,
  } as CSSProperties

  return (
    <div className={`grid-item ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

export default GridItem
