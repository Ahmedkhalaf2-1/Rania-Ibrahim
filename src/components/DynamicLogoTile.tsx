import { useEffect, useState } from 'react'
import type { LogoItem } from './LogoTile'
import LogoImage from './LogoImage'
import './LogoTile.css'
import './DynamicLogoTile.css'

interface DynamicLogoTileProps {
  items: LogoItem[]
  /** Time each logo stays on screen, in ms. */
  interval?: number
}

/**
 * One logo slot that cycles through several logos in place. Every logo is
 * stacked inside the same fixed-size frame and only the active one is
 * opaque, so switching never changes the tile's size or position.
 */
function DynamicLogoTile({ items, interval = 1600 }: DynamicLogoTileProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (items.length < 2) return
    const id = window.setInterval(() => {
      setActive(current => (current + 1) % items.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [items.length, interval])

  return (
    <div className="logo-tile logo-tile--labeled">
      <span className="logo-tile__index">Dynamic Logo</span>
      <div className="logo-tile__frame dynamic-logo__frame">
        {items.map((item, i) => (
          <LogoImage
            key={item.index}
            className={`dynamic-logo__img${i === active ? ' is-active' : ''}`}
            src={item.image}
            alt={item.alt || `Logo ${item.index}`}
            aria-hidden={i !== active}
          />
        ))}
      </div>
    </div>
  )
}

export default DynamicLogoTile
