import SectionHeader from '../components/SectionHeader'
import PortfolioContainer from '../components/PortfolioContainer'
import EditorialProject, { type EditorialProjectData } from '../components/EditorialProject'
import './MagazinesSection.css'

/*
  Structure-only pass — no final logos/composites yet. Legacy filenames are
  inconsistent in the source material but preserved here as a comment for
  the later asset pass: sanad-composite.jpg, sanad-composite-2.jpg,
  sanad-composite-3.jpg, sanad-composite-4.jpg, akhbar-alfan-full.png.
*/
const magazineModules = import.meta.glob('../assets/magazines/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' })

function getAsset(name: string) {
  const key = Object.keys(magazineModules).find(k => k.toLowerCase().includes(name.toLowerCase()))
  return key ? magazineModules[key] as string : null
}

const EDITORIAL_PROJECTS: EditorialProjectData[] = [
  {
    id: 'sanad-editorial',
    title: 'SANAD',
    subtitle: 'brand identity guidelines',
    description:
      "The magazine introduces Sanad, a community-based service connecting people in need with verified volunteers. It presents the project's humanitarian concept through a clean, organized visual approach, highlighting trust, safety, and community engagement.",
    logo: getAsset('sanad-logo'),
    composite: getAsset('sanad-composite'),
    hasLogo: true,
  },
  {
    id: 'tabak-shaaby-editorial',
    title: 'TABAK SHAABY',
    subtitle: 'brochure design',
    description:
      'Tabak Shaaby is a brochure that highlights some of the most famous traditional Egyptian desserts, presenting their variety and cultural character through a simple and engaging visual style. The brochure was fully designed from scratch, including its logo, typography, illustrations, and visual elements.',
    logo: getAsset('tabak-shaaby-logo'),
    composite: getAsset('tabak-shaaby-composite'),
    hasLogo: true,
  },
  {
    id: 'alexandria-opera-editorial',
    title: 'ALEXANDRIA OPERA',
    subtitle: 'brochure design',
    description:
      "The Alexandria Opera brochure introduces the different sections and facilities of the opera house, presenting its spaces and cultural activities through a clear and organized visual approach. The brochure was fully designed from scratch, including the logo, typography, and custom numbering system, creating a cohesive visual identity that reflects the opera's cultural and artistic character.",
    logo: getAsset('alexandria-opera-logo'),
    composite: getAsset('alexandria-opera-composite'),
    hasLogo: true,
  },
  {
    id: 'hayat-al-suqoor-editorial',
    title: 'HAYAT AL-SUQOOR',
    subtitle: 'magazine design',
    description:
      'Hayat Al-Suqoor is a magazine that explores the world of falcons, covering their anatomy, lifestyle, behavior, and different aspects of their lives. The magazine was fully designed from scratch, including its typography and custom illustrations, creating a cohesive visual style that reflects the nature and character of falcons.',
    logo: getAsset('hayat-al-suqoor-logo'),
    composite: getAsset('hayat-al-suqoor-composite'),
    hasLogo: false,
  },
  {
    id: 'akhbar-al-fan-editorial',
    title: 'AKHBAR AL-FAN',
    subtitle: 'newspaper design',
    description:
      'Akhbar Al-Fan is a daily newspaper covering the latest art news and events in Egypt. The newspaper was fully designed from scratch, including the content, layout, and image selection, creating a clear and organized editorial style that reflects the dynamic nature of the Egyptian art scene.',
    logo: getAsset('akhbar-al-fan-logo'),
    composite: getAsset('akhbar-al-fan-composite'),
    hasLogo: false,
    layout: 'side-by-side',
  },
]

function MagazinesSection() {
  return (
    <section id="s07" className="magazines">
      <PortfolioContainer>
        <SectionHeader
          number="07"
          title="Magazines , Brochures & Newspapers"
          numberColor="#cdae4b"
          titleColor="var(--color-neutral-900)"
        />

        <div className="magazines__list">
          {EDITORIAL_PROJECTS.map((project) => (
            <EditorialProject key={project.id} project={project} />
          ))}
        </div>
      </PortfolioContainer>
    </section>
  )
}

export default MagazinesSection
