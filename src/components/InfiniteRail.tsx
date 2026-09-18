import { Fragment, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import './InfiniteRail.css'

interface InfiniteRailProps<T> {
  items: T[]
  getKey: (item: T, index: number) => string
  renderItem: (item: T, index: number, ariaHidden: boolean) => ReactNode
  /** Constant scroll speed, in px/s. Duration is derived from the measured track width. */
  speed?: number
  /** Gap between items. Defaults to the shared grid gap. */
  gap?: string
}

/**
 * Shared continuous horizontal rail used by every auto-scrolling media
 * strip in the portfolio (Section 03's phone rail, Section 04's dieline
 * rail, etc). The item sequence renders twice (the second pass
 * aria-hidden) and the track animates exactly one pass' width, so the
 * loop has no visible seam. Duration is derived from the measured pass
 * width via ResizeObserver, so perceived speed stays constant regardless
 * of viewport size or item count. Full-bleed to the viewport edges but
 * clipped by its own wrapper — this can never cause page-level scroll.
 */
function InfiniteRail<T>({ items, getKey, renderItem, speed = 55, gap }: InfiniteRailProps<T>) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    const node = trackRef.current
    if (!node) return

    const measure = () => setDistance(node.scrollWidth / 2)
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [items])

  const duration = distance > 0 ? distance / speed : 0
  const sequence = [...items, ...items]

  return (
    <div className="infinite-rail">
      <div
        ref={trackRef}
        className="infinite-rail__track"
        style={
          {
            gap,
            ...(distance > 0
              ? { '--rail-distance': `-${distance}px`, animationDuration: `${duration}s` }
              : {}),
          } as CSSProperties
        }
      >
        {sequence.map((item, i) => (
          <Fragment key={getKey(item, i)}>{renderItem(item, i, i >= items.length)}</Fragment>
        ))}
      </div>
    </div>
  )
}

export default InfiniteRail
