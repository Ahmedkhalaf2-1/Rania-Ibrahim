import SectionHeader from '../components/SectionHeader'
import PortfolioContainer from '../components/PortfolioContainer'
import PortfolioGrid from '../components/PortfolioGrid'
import GridItem from '../components/GridItem'
import CaseStudyLayout from '../components/CaseStudyLayout'
import MediaFrame from '../components/MediaFrame'
import InfiniteRail from '../components/InfiniteRail'
import Reveal from '../components/Reveal'
import './PackagingSection.css'

/*
  Structure-only pass — no final assets yet. `null` values are swapped for
  real image paths in the dedicated image pass.
*/
const packagingModules = import.meta.glob('../assets/packaging/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' })

function getAsset(name: string) {
  const key = Object.keys(packagingModules).find(k => k.toLowerCase().includes(name.toLowerCase()));
  return key ? packagingModules[key] as string : null;
}

const packagingMedia = {
  dieline: getAsset('packaging-dieline'),
  hero: getAsset('packaging-hero'),
  rail: getAsset('packaging-rail'),
  extraMockups: [getAsset('packaging-extra-1'), getAsset('packaging-extra-2')],
}

const SWATCHES = [
  { hex: '#E6CCB3', cmyk: 'C10 M20 Y30 K0' },
  { hex: '#5C1A3D', cmyk: 'C10 M75 Y40 K60' },
]

/* One dieline asset repeated across the rail so the strip visually fills the viewport before looping. */
const RAIL_ITEMS = Array.from({ length: 4 }, (_, i) => ({
  id: `pack-die-${i + 1}`,
  image: packagingMedia.rail,
}))

function PackagingSection() {
  return (
    <section id="s04" className="packaging">
      <PortfolioContainer>
        <SectionHeader
          number="04"
          title="Packaging Design"
          numberColor="#5c1a3d"
          titleColor="var(--color-neutral-900)"
        />

        <Reveal>
          <PortfolioGrid className="packaging__intro-grid">
            <GridItem span={12}>
              <p className="packaging__intro">
                The project reimagines the visual identity of Alexandria Opera House through a
                modern and refined approach while preserving its historical and cultural
                character. The identity is extended across a range of packaging designs, using
                visual elements inspired by the Opera's heritage to create a cohesive packaging
                system that balances authenticity, elegance, and contemporary aesthetics.
              </p>
            </GridItem>
          </PortfolioGrid>
        </Reveal>

        <CaseStudyLayout
          topSpacing="var(--section-gap-small)"
          left={
            <div className="packaging-left-grid">
              {SWATCHES.map((swatch) => (
                <div className="packaging-swatch" key={swatch.hex}>
                  <span
                    className="packaging-swatch__color"
                    style={{ background: swatch.hex }}
                  />
                  <span className="packaging-swatch__caption">
                    {swatch.hex} · {swatch.cmyk}
                  </span>
                </div>
              ))}

              <div className="packaging-dieline-cell">
                <MediaFrame
                  image={packagingMedia.dieline}
                  alt="Packaging dieline technical drawing"
                  background="#ffffff"
                  aspectRatio="auto"
                  objectFit="contain"
                />
              </div>
            </div>
          }
          right={
            <div className="packaging-hero">
              <MediaFrame
                aspectRatio="auto"
                image={packagingMedia.hero}
                alt="Packaging hero composition"
                objectFit="cover"
                radius="0"
              />
            </div>
          }
        />

        <div className="packaging__rail-block">
          <span className="packaging__label">(*) Packaging Design</span>
        </div>

        <InfiniteRail
          items={RAIL_ITEMS}
          gap="var(--grid-gap)"
          getKey={(item, i) => `${item.id}-${i}`}
          renderItem={(item, _i, ariaHidden) => (
            <div className="packaging-rail__item" aria-hidden={ariaHidden || undefined}>
              <MediaFrame
                aspectRatio="1220 / 600"
                image={item.image}
                alt="Packaging dieline"
                background="transparent"
              />
            </div>
          )}
        />

        <Reveal>
          <h3 className="packaging__extra-heading">Extra Packaging</h3>
        </Reveal>

        <PortfolioGrid className="packaging__extra-grid">
          {packagingMedia.extraMockups.map((image, i) => (
            <GridItem key={`extra-mockup-${i}`} span={6} mobileSpan={12}>
              <Reveal delay={i * 60}>
                <MediaFrame
                  aspectRatio="1 / 1"
                  image={image}
                  alt="Packaging mockup"
                  objectFit="cover"
                  background="var(--color-neutral-200)"
                  radius="var(--radius-lg)"
                />
              </Reveal>
            </GridItem>
          ))}
        </PortfolioGrid>
      </PortfolioContainer>
    </section>
  )
}

export default PackagingSection
