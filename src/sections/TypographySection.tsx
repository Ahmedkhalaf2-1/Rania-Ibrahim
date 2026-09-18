import SectionHeader from '../components/SectionHeader'
import PortfolioContainer from '../components/PortfolioContainer'
import PortfolioGrid from '../components/PortfolioGrid'
import GridItem from '../components/GridItem'
import SpecimenTile, { type SpecimenItem } from '../components/SpecimenTile'
import Reveal from '../components/Reveal'
import './TypographySection.css'

const typographyModules = import.meta.glob('../assets/typography/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' })
const sortedKeys = Object.keys(typographyModules).sort()

const TYPOGRAPHY_ITEMS: SpecimenItem[] = Array.from({ length: 11 }, (_, i) => {
  const imageKey = sortedKeys[i]
  return {
    id: `type-${i + 1}`,
    index: i + 1,
    image: imageKey ? typographyModules[imageKey] as string : null,
    alt: `Typography specimen ${i + 1}`,
  }
})

/** Diagonal cascade: each row starts a beat after the previous one, and
 *  within a row each column follows the one before it — so specimens fall
 *  into place one after another instead of resetting every 3 items. */
function staggerDelay(index: number) {
  const col = index % 3
  const row = Math.floor(index / 3)
  return row * 90 + col * 60
}

function TypographySection() {
  return (
    <section id="s06" className="typography">
      <PortfolioContainer>
        <SectionHeader
          number="06"
          title="Typography"
          subtitle="Letterforms treated as artwork, not thumbnails."
          numberColor="#d29b46"
          titleColor="var(--color-neutral-900)"
        />

        {/* 3 specimens per row on desktop, each spanning 4 of the shared 12 columns. */}
        <PortfolioGrid className="typography__grid">
          {TYPOGRAPHY_ITEMS.map((item, i) => (
            <GridItem key={item.id} span={4} tabletSpan={6} phoneSpan={12}>
              <Reveal delay={staggerDelay(i)}>
                <SpecimenTile item={item} />
              </Reveal>
            </GridItem>
          ))}
        </PortfolioGrid>
      </PortfolioContainer>
    </section>
  )
}

export default TypographySection
