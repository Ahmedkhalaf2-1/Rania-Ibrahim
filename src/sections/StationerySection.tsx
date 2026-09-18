import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import PortfolioContainer from '../components/PortfolioContainer'
import PortfolioGrid from '../components/PortfolioGrid'
import InfiniteRail from '../components/InfiniteRail'
import './StationerySection.css'

const stationeryModules = import.meta.glob('../assets/stationery/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' })

function getAsset(name: string) {
  const key = Object.keys(stationeryModules).find(k => k.toLowerCase().includes(name.toLowerCase()))
  return key ? (stationeryModules[key as keyof typeof stationeryModules] as string) : null
}

const stationeryCases = [
  {
    id: 'sanad',
    title: 'SANAD',
    subtitle: 'branding + app',
    description:
      "The stationery and printed materials extend Sanad's visual identity into practical everyday applications. Consistent typography, colors, and graphic elements create a unified system that reflects the brand's values of trust, support, and community.",
    patterns: [getAsset('sanad-pattern-1'), getAsset('sanad-pattern-2')],
    patternsLabel: '(4) PATTERNS',
    primaryLogo: getAsset('sanad-logo'),
    primaryTypography: getAsset('sanad-typography'),
    merchandising: [
      getAsset('sanad-merch-5'),
      getAsset('sanad-merch-4'),
      getAsset('sanad-merch-3'),
      getAsset('sanad-merch-2'),
      getAsset('sanad-merch-1'),
      getAsset('sanad-merch-6'),
    ],
    applications: [
      getAsset('sanad-app-4'),
      getAsset('sanad-app-3'),
      getAsset('sanad-app-2'),
      getAsset('sanad-app-1'),
    ],
  },
  {
    id: 'opera',
    title: 'OPERA',
    subtitle: 'brand family',
    description:
      'A closer look at the Opera identity carried across physical touchpoints — letterheads, folders, envelopes and business cards, styled together as a cohesive stationery suite.',
    patterns: [getAsset('opera-pattern-1')],
    patternsLabel: '(6) PATTERNS',
    primaryLogo: getAsset('opera-logo'),
    palette: [
      {
        name: 'Aubergine',
        hex: '#260817',
        cmyk: '50, 90, 70, 70',
        rgb: '38, 8, 23',
        text: 'white',
      },
      {
        name: 'Sand',
        hex: '#E6CCB3',
        cmyk: '10, 20, 30, 0',
        rgb: '230, 204, 179',
        text: '#111111',
      },
      {
        name: 'White',
        hex: '#FFFFFF',
        cmyk: '0, 0, 0, 0',
        rgb: '255, 255, 255',
        text: '#111111',
        hasBorder: true,
      },
    ],
    stationery: [getAsset('opera-stationery-1'), getAsset('opera-stationery-2')],
  },
]

function StationerySection() {
  return (
    <section id="s05" className="stationery-section">
      <PortfolioContainer>
        <SectionHeader
          number="05"
          title="Stationery & Printed Materials"
          subtitle="Brand guideline system — logo, palette, typography, applications."
          numberColor="#EEB42B"
        />

        {stationeryCases.map((guidelineCase, caseIndex) => (
          <div
            key={guidelineCase.id}
            className={`stationery-case ${caseIndex > 0 ? 'stationery-case--subsequent' : ''}`}
          >
            <Reveal>
              <PortfolioGrid className="stationery-main-composition">
                {/* ROW 1: INTRO & LOGO */}
                <div className="stationery-cell-intro">
                  <div className="stationery-intro">
                    <h3 className="stationery-intro__eyebrow">{guidelineCase.subtitle}</h3>
                    <h4 className="stationery-intro__title">{guidelineCase.title}</h4>
                    <p className="stationery-intro__desc">{guidelineCase.description}</p>
                  </div>
                </div>

                <div className="stationery-cell-logo">
                  <div className="stationery-logo">
                    <span className="stationery-label">(1) PRIMARY LOGO</span>
                    <div className="stationery-logo-frame">
                      {guidelineCase.primaryLogo ? (
                        <img src={guidelineCase.primaryLogo} alt="Primary Logo" />
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* ROW 2: PATTERNS & TYPOGRAPHY */}
                <div className="stationery-cell-patterns">
                  {guidelineCase.patterns && (
                    <div className="stationery-patterns">
                      <span className="stationery-label">{guidelineCase.patternsLabel}</span>
                      <div className="stationery-patterns__list">
                        {guidelineCase.patterns.map((img, i) => (
                          <div key={i} className="stationery-pattern-frame">
                            {img ? <img src={img as string} alt={`Pattern ${i + 1}`} /> : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {guidelineCase.primaryTypography && (
                  <div className="stationery-cell-typography">
                    <div className="stationery-typography">
                      <span className="stationery-label">(3) PRIMARY TYPOGRAPHY</span>
                      <div className="stationery-typography-frame">
                        <img src={guidelineCase.primaryTypography} alt="Primary Typography" />
                      </div>
                    </div>
                  </div>
                )}

                {/* ROW 2: left=PATTERNS already rendered above | right=COLOR PALETTE */}
                {guidelineCase.palette && (
                  <div className="stationery-cell-palette">
                    <span className="stationery-label">(4) COLOR PALETTE</span>
                    <div className="stationery-palette__grid">
                      {guidelineCase.palette.map((color, i) => (
                        <div
                          key={i}
                          className={`stationery-color-card ${
                            color.hasBorder ? 'stationery-color-card--bordered' : ''
                          }`}
                          style={{ backgroundColor: color.hex, color: color.text }}
                        >
                          <div className="stationery-color-card__name">{color.name}</div>
                          <div className="stationery-color-card__values">
                            <div>HEX {color.hex}</div>
                            <div>CMYK {color.cmyk}</div>
                            <div>RGB {color.rgb}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ROW 3: left=spacer | right=STATIONERY (below palette) */}
                {guidelineCase.stationery && (
                  <>
                    <div className="stationery-cell-patterns stationery-cell-patterns--spacer" />
                    <div className="stationery-cell-stationery">
                      <span className="stationery-label">(5) STATIONERY</span>
                      <div className="stationery-stationery__grid">
                        {guidelineCase.stationery.map((img, i) => (
                          <div key={i} className="stationery-stationery-frame">
                            {img ? <img src={img as string} alt={`Stationery ${i + 1}`} /> : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </PortfolioGrid>
            </Reveal>

            {guidelineCase.merchandising && (
              <Reveal>
                <div className="stationery-merchandising">
                  <span className="stationery-label">(5) MERCHANDISING</span>
                  <InfiniteRail
                    items={guidelineCase.merchandising}
                    getKey={(_, i) => `merch-${i}`}
                    gap="clamp(18px, 2vw, 28px)"
                    renderItem={(img, index, ariaHidden) => (
                      <div className="stationery-merch-item" aria-hidden={ariaHidden}>
                        {img ? <img src={img as string} alt={`Merchandising ${index + 1}`} /> : null}
                      </div>
                    )}
                  />
                </div>
              </Reveal>
            )}

            {guidelineCase.applications && (
              <Reveal>
                <div className="stationery-applications-wrapper">
                  <hr className="stationery-divider" />
                  <span className="stationery-label">(6) APPLICATIONS</span>
                  <div className="stationery-applications">
                    {guidelineCase.applications.map((img, i) => (
                      <div key={i} className="stationery-application-frame">
                        {img ? <img src={img as string} alt={`Application ${i + 1}`} /> : null}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        ))}
      </PortfolioContainer>
    </section>
  )
}

export default StationerySection
