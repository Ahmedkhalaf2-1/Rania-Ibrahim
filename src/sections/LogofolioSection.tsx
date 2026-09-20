import SectionHeader from '../components/SectionHeader'
import PortfolioContainer from '../components/PortfolioContainer'
import PortfolioGrid from '../components/PortfolioGrid'
import GridItem from '../components/GridItem'
import LogoTile, { type LogoItem } from '../components/LogoTile'
import MockupCard, { type MockupItem } from '../components/MockupCard'
import Reveal from '../components/Reveal'
import './LogofolioSection.css'

const imageModules = import.meta.glob('../assets/logo/*.webp', { eager: true, query: '?url', import: 'default' })
const LOGO_IMAGES = Object.keys(imageModules)
  .sort()
  .map(key => imageModules[key] as string)

const LOGO_ITEMS: LogoItem[] = Array.from({ length: 18 }, (_, i) => ({
  index: i + 1,
  image: LOGO_IMAGES[i]
}))

const mockupModules = import.meta.glob('../assets/mockups/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' })
const MOCKUP_IMAGES = Object.keys(mockupModules)
  .sort()
  .map(key => mockupModules[key] as string)

const MOCKUP_ITEMS: MockupItem[] = MOCKUP_IMAGES.length > 0 
  ? MOCKUP_IMAGES.map((img, i) => ({ id: `mockup-${i + 1}`, image: img }))
  : [{ id: 'mockup-1' }, { id: 'mockup-2' }, { id: 'mockup-3' }]

/** Diagonal cascade: each row starts a beat after the previous one, and
 *  within a row each column follows the one before it — so tiles fall
 *  into place one after another instead of resetting every 3 items. */
function staggerDelay(index: number) {
  const col = index % 3
  const row = Math.floor(index / 3)
  return row * 90 + col * 70
}

function LogofolioSection() {
  return (
    <section id="s01" className="logofolio">
      <PortfolioContainer>
        <SectionHeader number="01" title="Logofolio" subtitle="Logo Design & Brand Identity" />

        {/* 3 logo tiles per row, each spanning 4 of the shared 12 columns. */}
        <PortfolioGrid className="logofolio__grid">
          {LOGO_ITEMS.map((item, i) => (
            <GridItem key={item.index} span={4}>
              <Reveal delay={staggerDelay(i)}>
                <LogoTile item={item} />
              </Reveal>
            </GridItem>
          ))}
        </PortfolioGrid>

        <div className="logofolio__application">
          <Reveal>
            <span className="logofolio__application-label">In Application</span>
          </Reveal>
          {/* Same 3-column, span-4 alignment as the logo gallery above. */}
          <PortfolioGrid>
            {MOCKUP_ITEMS.map((item, i) => (
              <GridItem key={item.id} span={4}>
                <Reveal delay={staggerDelay(i)}>
                  <MockupCard item={item} />
                </Reveal>
              </GridItem>
            ))}
          </PortfolioGrid>
        </div>
      </PortfolioContainer>
    </section>
  )
}

export default LogofolioSection
