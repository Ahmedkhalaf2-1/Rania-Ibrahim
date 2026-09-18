import './MockupCard.css'

export interface MockupItem {
  id: string
  image?: string
  alt?: string
}

interface MockupCardProps {
  item: MockupItem
}

/**
 * Future image mount point: when `item.image` is supplied, swap for an
 * <img> using width:100%; height:100%; object-fit:cover (crops to fill).
 */
function MockupCard({ item }: MockupCardProps) {
  return (
    <div className="mockup-card" aria-hidden={!item.image}>
      {item.image && (
        <img src={item.image} alt={item.alt || `Mockup ${item.id}`} />
      )}
    </div>
  )
}

export default MockupCard
