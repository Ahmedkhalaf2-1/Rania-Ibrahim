import './LogoTile.css'

export interface LogoItem {
  index: number
  image?: string
  alt?: string
  id?: string
}

interface LogoTileProps {
  item: LogoItem
}

/**
 * Renders one numbered logo slot. The `.logo-tile__frame` is the future
 * image mount point — when `item.image` is supplied, swap the placeholder
 * span for an <img> using width:100%; height:100%; object-fit:contain.
 */
function LogoTile({ item }: LogoTileProps) {
  return (
    <div className="logo-tile">
      <span className="logo-tile__index">{item.index})</span>
      <div className="logo-tile__frame">
        {item.image ? (
          <img src={item.image} alt={item.alt || `Logo ${item.index}`} />
        ) : (
          <span className="logo-tile__placeholder" aria-hidden="true" />
        )}
      </div>
    </div>
  )
}

export default LogoTile
