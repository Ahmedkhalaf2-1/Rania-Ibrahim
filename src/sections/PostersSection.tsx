import SectionHeader from '../components/SectionHeader'
import PortfolioContainer from '../components/PortfolioContainer'
import PortfolioGrid from '../components/PortfolioGrid'
import GridItem from '../components/GridItem'
import PosterMediaItem, { type PosterItem } from '../components/PosterMediaItem'
import Reveal from '../components/Reveal'
import './PostersSection.css'

const posterModules = import.meta.glob('../assets/posters/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' })
const POSTER_IMAGES = Object.keys(posterModules)
  .sort()
  .map(key => posterModules[key] as string)

const POSTER_ITEMS: PosterItem[] = POSTER_IMAGES.length > 0
  ? POSTER_IMAGES.map((img, i) => ({ id: `poster-${i + 1}`, image: img }))
  : [
      { id: 'poster-1' },
      { id: 'poster-2' },
      { id: 'poster-3' },
      { id: 'poster-4' },
    ]

/** Stagger: item 1 -> 0ms, item 2 -> 60ms, item 3 -> 120ms, item 4 -> 180ms. */
function staggerDelay(index: number) {
  return index * 60
}

function PostersSection() {
  return (
    <section id="s02" className="posters">
      <PortfolioContainer>
        <SectionHeader
          number="02"
          title="Posters"
          subtitle="One sheet at a time, at full width."
          numberColor="#c4a254"
          titleColor="var(--color-neutral-900)"
          subtitleColor="var(--color-neutral-300)"
        />

        {/* Each poster spans all 12 columns — same master grid edges as every other section. */}
        <PortfolioGrid className="posters__stack">
          {POSTER_ITEMS.map((item, i) => (
            <GridItem key={item.id} span={12}>
              <Reveal delay={staggerDelay(i)}>
                <PosterMediaItem item={item} />
              </Reveal>
            </GridItem>
          ))}
        </PortfolioGrid>
      </PortfolioContainer>
    </section>
  )
}

export default PostersSection
