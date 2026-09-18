import './PosterMediaItem.css'

export interface PosterItem {
  id: string
  image?: string
  alt?: string
}

interface PosterMediaItemProps {
  item: PosterItem
}

/**
 * One entry in the unified poster media stack. All 4 items share the same
 * width, aspect ratio, and crop behavior — no per-item overrides.
 * When `item.image` is supplied, swap the placeholder span for an <img>
 * using width:100%; display:block; aspect-ratio:3/2; object-fit:cover.
 */
function PosterMediaItem({ item }: PosterMediaItemProps) {
  return (
    <div className="poster-media-item">
      {item.image ? (
        <img src={item.image} alt={item.alt || `Poster ${item.id}`} />
      ) : (
        <span className="poster-media-item__placeholder" aria-hidden={!item.image} />
      )}
    </div>
  )
}

export default PosterMediaItem
