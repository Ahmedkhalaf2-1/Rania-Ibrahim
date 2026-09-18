import PortfolioGrid from './PortfolioGrid'
import GridItem from './GridItem'
import './EditorialProjectHeader.css'

interface EditorialProjectHeaderProps {
  id: string
  title: string
  subtitle: string
  description: string
  logo?: string | null
  hasLogo: boolean
}

/**
 * One project's info strip: title / italic subtitle, description, and an
 * optional logo slot. Desktop maps to the shared 12-column grid as
 * 3/7/2 (with logo) or 3/9 (without) — CSS Grid auto-placement drops the
 * logo to its own row on narrower tiers with no extra layout logic needed.
 */
function EditorialProjectHeader({
  id,
  title,
  subtitle,
  description,
  logo,
  hasLogo,
}: EditorialProjectHeaderProps) {
  return (
    <div className={`editorial-header editorial-header--${id}`}>
      <PortfolioGrid className="editorial-header__grid">
        <GridItem span={3} tabletSpan={4} phoneSpan={12}>
          <div className="editorial-header__title-block">
            <h3 className="editorial-header__title">{title}</h3>
            <p className="editorial-header__subtitle">{subtitle}</p>
          </div>
        </GridItem>

        <GridItem
          span={hasLogo ? 7 : 9}
          tabletSpan={8}
          phoneSpan={12}
          className="editorial-header__desc-col"
        >
          <p className="editorial-header__description">{description}</p>
        </GridItem>

        {hasLogo ? (
          <GridItem span={2} tabletSpan={12} phoneSpan={12} className="editorial-header__logo-col">
            <div className="editorial-header__logo">
              {logo ? <img src={logo} alt={`${title} logo`} /> : null}
            </div>
          </GridItem>
        ) : null}
      </PortfolioGrid>
    </div>
  )
}

export default EditorialProjectHeader
