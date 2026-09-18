import './SpecimenTile.css'

export interface SpecimenItem {
  id: string
  index: number
  image?: string | null
  alt?: string
}

interface SpecimenTileProps {
  item: SpecimenItem
}

/**
 * One numbered typography specimen. The media area stays fully transparent
 * (no placeholder rectangle) until real artwork is added — future <img>
 * uses width:88%; max-height:100%; object-fit:contain, so letterforms get
 * breathing room inside the cell without being stretched or cropped.
 */
function SpecimenTile({ item }: SpecimenTileProps) {
  return (
    <div className="specimen-tile">
      <span className="specimen-tile__index">{item.index})</span>
      <div className="specimen-tile__frame">
        {item.image ? (
          <img src={item.image} alt={item.alt ?? ''} className="specimen-tile__img" />
        ) : null}
      </div>
    </div>
  )
}

export default SpecimenTile
