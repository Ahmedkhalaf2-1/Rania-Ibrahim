import PortfolioGrid from './PortfolioGrid'
import GridItem from './GridItem'
import MediaFrame from './MediaFrame'

interface CompositeMediaProps {
  image?: string | null
  alt?: string
}

/**
 * Full-bleed-within-the-grid editorial composite: spans all 12 columns so
 * every project's artwork shares the exact same left/right edges. No
 * aspect-ratio is forced — MediaFrame's "natural" mode (width:100%;
 * height:auto) lets each image keep its own proportions uncropped.
 */
function CompositeMedia({ image, alt = '' }: CompositeMediaProps) {
  return (
    <PortfolioGrid>
      <GridItem span={12}>
        <div className="editorial-media-container" style={{ borderRadius: 'var(--radius-md)' }}>
          {image ? (
            <img src={image} alt={alt} />
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'var(--color-neutral-200)' }} />
          )}
        </div>
      </GridItem>
    </PortfolioGrid>
  )
}

export default CompositeMedia
