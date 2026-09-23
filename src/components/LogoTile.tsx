import LogoImage from './LogoImage'
import './LogoTile.css'

export interface LogoItem {
  index: number
  image?: string
  alt?: string
  id?: string
}

interface LogoTileProps {
  item: LogoItem
  /** Text label shown above the frame in place of the number. */
  label?: string
}

/**
 * Renders one numbered logo slot. The `.logo-tile__frame` is the future
 * image mount point — when `item.image` is supplied, swap the placeholder
 * span for an <img> using width:100%; height:100%; object-fit:contain.
 */
function LogoTile({ item, label }: LogoTileProps) {
  return (
    <div className={`logo-tile${label ? ' logo-tile--labeled' : ''}`}>
      <span className="logo-tile__index">{label ?? `${item.index})`}</span>
      <div className="logo-tile__frame">
        {item.image ? (
          <LogoImage src={item.image} alt={item.alt || `Logo ${item.index}`} />
        ) : (
          <span className="logo-tile__placeholder" aria-hidden="true" />
        )}
      </div>
    </div>
  )
}

export default LogoTile
