import SectionHeader from '../components/SectionHeader'
import PortfolioContainer from '../components/PortfolioContainer'
import CaseStudyLayout from '../components/CaseStudyLayout'
import SpecRow from '../components/SpecRow'
import ColorSwatch from '../components/ColorSwatch'
import MediaFrame from '../components/MediaFrame'
import PhoneRail from '../components/PhoneRail'
import type { PhoneItem } from '../components/PhoneFrame'
import './UiDesignSection.css'

/*
  Structure-only pass — no final assets yet. `null` values are swapped for
  real image paths in the dedicated image pass; every consumer already
  knows how to render either state (see MediaFrame / PhoneFrame).
*/
const uiDesignModules = import.meta.glob('../assets/ui-design/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' })

function getAsset(name: string) {
  const key = Object.keys(uiDesignModules).find(k => k.toLowerCase().includes(name.toLowerCase()));
  return key ? uiDesignModules[key] as string : null;
}

const sanadMedia = {
  logo: getAsset('sanad-logo'),
  typography: getAsset('sanad-typography'),
  screensBoard: getAsset('sanad-screens-board'),
  phoneScreens: Array.from({ length: 8 }, (_, i) => getAsset(`sanad-phone-${i + 1}`)),
}

const smartHomeMedia = {
  hero: getAsset('smart-home-hero'),
}

const SANAD_COLORS = [
  { hex: '#195651', text: 'white' },
  { hex: '#ECBF64', text: '#111111' },
  { hex: '#FEE7B1', text: '#111111' },
  { hex: '#FFFFFF', text: '#111111', hasBorder: true },
]
const SMART_HOME_COLORS = ['#14100C', '#1F1A15', '#E8973A', '#C9C2B6', '#F5F0E8']

const sanadPhoneItems: PhoneItem[] = sanadMedia.phoneScreens.map((image, i) => ({
  id: `sanad-s${i + 1}`,
  image,
}))

function UiDesignSection() {
  return (
    <section id="s03" className="ui-design">
      <PortfolioContainer>
      <SectionHeader
        number="03"
        title="UI UX DESIGN"
        subtitle="App interfaces, from the identity through to the screens."
        numberColor="#eeb42b"
        titleColor="var(--color-neutral-900)"
      />

      <CaseStudyLayout
        left={
          <>
            <div className="case-study__intro">
              <h3 className="case-study__title">Sanad</h3>
              <p className="case-study__eyebrow">branding + app</p>
              <p className="case-study__body">
                The app connects users who need support with verified volunteers whose data and
                identity have been fully checked, ensuring the highest degree of safety and
                trust. A user can request services such as temporary care, daily assistance or
                delivery — particularly in emergencies, or when no family member is available.
              </p>
              <p className="case-study__body">
                The project aims to strengthen volunteering within the community and offer fast,
                practical solutions to those who need them most, while keeping its humanitarian
                and charitable character: the service is provided for a nominal fee that sustains
                the app.
              </p>
              <p className="case-study__body">
                The app also includes a rating system for volunteers, which helps improve service
                quality and builds a community grounded in trust and responsibility.
              </p>
            </div>

            <div className="ui-divider" />

            <div className="case-study__specs">
              <SpecRow label="Year" value="2026" />
              <SpecRow label="Role" value="UI/UX design" />
            </div>

            <div className="case-study__block">
              <span className="ui-label">(4) Screens</span>
              <MediaFrame
                aspectRatio="829 / 1600"
                image={sanadMedia.screensBoard}
                alt="Sanad app screens board"
              />
            </div>
          </>
        }
        right={
          <>
            <div className="case-study__block">
              <span className="ui-label">(1) Primary Logo</span>
              <MediaFrame
                aspectRatio="16 / 7"
                image={sanadMedia.logo}
                alt="Sanad primary logo"
                background="#ffffff"
              />
            </div>

            <div className="ui-divider" />

            <div className="case-study__block">
              <span className="ui-label">(2) Colour Palette</span>
              <div className="ui-design__palette-grid">
                {SANAD_COLORS.map((color) => (
                  <div
                    key={color.hex}
                    className={`ui-design__color-card ${
                      color.hasBorder ? 'ui-design__color-card--bordered' : ''
                    }`}
                    style={{ backgroundColor: color.hex, color: color.text }}
                  >
                    <span className="ui-design__color-card__hex">{color.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ui-divider" />

            <div className="case-study__block">
              <span className="ui-label">(3) Typography</span>
              <MediaFrame
                aspectRatio="16 / 5"
                image={sanadMedia.typography}
                alt="Sanad typography specimen"
                background="#ffffff"
              />
            </div>
          </>
        }
      />

      <div className="ui-design__rail-block">
        <span className="ui-label">(5) Screens in Motion</span>
        <PhoneRail items={sanadPhoneItems} />
      </div>

      <div className="ui-design__divider" />

      <CaseStudyLayout
        left={
          <>
            <div className="case-study__intro">
              <h3 className="case-study__title">Smart Home</h3>
              <p className="case-study__eyebrow">mobile app UI</p>
              <p className="case-study__body">
                A dark-mode control app for a connected home — lighting, climate and room scenes
                brought into one calm, elegant interface. Every screen favors soft ambient light
                over flat brightness, so the product feels like the home it's controlling.
              </p>
            </div>

            <div className="ui-divider" />

            <div className="case-study__block">
              <span className="ui-label">Focus Areas</span>
              <p className="case-study__body">
                Lighting &amp; ambiance, environment control, smart automation, unified device
                dashboard.
              </p>
            </div>

            <div className="ui-divider" />

            <div className="case-study__block">
              <span className="ui-label">Color Palette</span>
              <div className="case-study__palette">
                {SMART_HOME_COLORS.map((hex) => (
                  <ColorSwatch key={hex} hex={hex} size={44} labelSize={11} />
                ))}
              </div>
            </div>
          </>
        }
        right={
          <div className="case-study__block">
            <span className="ui-label">Screens</span>
            <MediaFrame
              image={smartHomeMedia.hero}
              alt="Smart Home app hero screens"
              background="#14100c"
            />
          </div>
        }
      />
      </PortfolioContainer>
    </section>
  )
}

export default UiDesignSection
