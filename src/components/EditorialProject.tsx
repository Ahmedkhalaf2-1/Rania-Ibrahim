import Reveal from './Reveal'
import EditorialProjectHeader from './EditorialProjectHeader'
import CompositeMedia from './CompositeMedia'
import PortfolioGrid from './PortfolioGrid'
import GridItem from './GridItem'
import './EditorialProject.css'

export interface EditorialProjectData {
  id: string
  title: string
  subtitle: string
  description: string
  logo?: string | null
  composite?: string | null
  hasLogo: boolean
  /** 'side-by-side' places the text data on the left and the photo on the
   *  right, top-aligned in the same row, instead of the default stacked layout. */
  layout?: 'stacked' | 'side-by-side'
}

interface EditorialProjectProps {
  project: EditorialProjectData
}

function EditorialProject({ project }: EditorialProjectProps) {
  if (project.layout === 'side-by-side') {
    return (
      <div className="editorial-project editorial-project--split">
        <Reveal>
          <PortfolioGrid className="editorial-project__split-grid">
            <GridItem span={4} tabletSpan={12} phoneSpan={12}>
              <div className="editorial-header__title-block">
                <h3 className="editorial-header__title">{project.title}</h3>
                <p className="editorial-header__subtitle">{project.subtitle}</p>
              </div>
              <p className="editorial-header__description editorial-project__split-desc">
                {project.description}
              </p>
            </GridItem>

            <GridItem span={8} tabletSpan={12} phoneSpan={12}>
              <div
                className="editorial-media-container editorial-project__split-media"
                style={{ borderRadius: 'var(--radius-md)' }}
              >
                {project.composite ? (
                  <img src={project.composite} alt={`${project.title} composite artwork`} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'var(--color-neutral-200)' }} />
                )}
              </div>
            </GridItem>
          </PortfolioGrid>
        </Reveal>
      </div>
    )
  }

  return (
    <div className="editorial-project">
      <Reveal>
        <EditorialProjectHeader
          id={project.id}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          logo={project.logo}
          hasLogo={project.hasLogo}
        />
      </Reveal>

      <Reveal className="editorial-project__media">
        <CompositeMedia image={project.composite} alt={`${project.title} composite artwork`} />
      </Reveal>
    </div>
  )
}

export default EditorialProject
