import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import PortfolioContainer from '../components/PortfolioContainer'
import PortfolioGrid from '../components/PortfolioGrid'
import GridItem from '../components/GridItem'
import LandmarkItem from '../components/LandmarkItem'
import LandmarkMap from '../components/LandmarkMap'
import ColorSwatch from '../components/ColorSwatch'
import landmarkPhoto1 from '../assets/landmarks/Untitled-2-01.webp'
import landmarkPhoto2 from '../assets/landmarks/Untitled-2-02.webp'
import landmarkPhoto3 from '../assets/landmarks/Untitled-2-03.webp'
import landmarkPhoto4 from '../assets/landmarks/Untitled-2-04.webp'
import landmarkPhoto5 from '../assets/landmarks/Untitled-2-05.webp'
import landmarkPhoto6 from '../assets/landmarks/Untitled-2-06.webp'
import landmarkMapPhoto from '../assets/landmarks/Untitled-1 (1).webp'
import './LandmarksSection.css'

const landmarks = [
  {
    id: 'landmark-1',
    nameAr: 'معبد ام عبيدة',
    icon: null,
    photo: landmarkPhoto1,
  },
  {
    id: 'landmark-2',
    nameAr: 'مكتبة سيوة',
    icon: null,
    photo: landmarkPhoto2,
  },
  {
    id: 'landmark-3',
    nameAr: 'فندق ادرار',
    icon: null,
    photo: landmarkPhoto3,
  },
  {
    id: 'landmark-4',
    nameAr: 'الورشة اليدوية',
    icon: null,
    photo: landmarkPhoto4,
  },
  {
    id: 'landmark-5',
    nameAr: 'البيت الشعبي',
    icon: null,
    photo: landmarkPhoto5,
  },
  {
    id: 'landmark-6',
    nameAr: 'القرية البدوية',
    icon: null,
    photo: landmarkPhoto6,
  },
]

const landmarkMapImage = landmarkMapPhoto

const LANDMARK_COLORS = ['#DAAC66', '#466B32']

function LandmarksSection() {
  return (
    <section id="s08" className="landmarks-section">
      <PortfolioContainer>
        <SectionHeader
          number="08"
          title="Landmarks"
          subtitle="Icon marks paired with the sites that inspired them."
          numberColor="#DAAC66"
        />

        <Reveal>
          <PortfolioGrid className="landmarks__intro-grid">
            <GridItem span={12}>
              <p className="landmarks-intro">
                The design showcases the distinctive architectural landmarks of Siwa through a
                collection of illustrated buildings that reflect the city's unique character and
                heritage. Each landmark is presented through its architectural form and
                distinctive details, combining traditional Siwan architecture with a clean,
                contemporary visual style.
              </p>
            </GridItem>
          </PortfolioGrid>
        </Reveal>

        <Reveal>
          <div className="landmarks-palette">
            {LANDMARK_COLORS.map((hex) => (
              <ColorSwatch key={hex} hex={hex} size={44} labelSize={11} />
            ))}
          </div>
        </Reveal>

        <div className="landmarks-grid-container">
          <PortfolioGrid className="landmarks-grid">
            {landmarks.map((landmark, index) => {
              // 3 items per row on desktop, calculate stagger delay based on column position (0, 1, 2)
              const colIndex = index % 3
              const delay = `${colIndex * 0.06}s`

              return (
                <div key={landmark.id} className="landmarks-grid-item">
                  <Reveal delay={delay}>
                    <LandmarkItem
                      nameAr={landmark.nameAr}
                      icon={landmark.icon}
                      photo={landmark.photo}
                    />
                  </Reveal>
                </div>
              )
            })}
          </PortfolioGrid>
        </div>

        <div className="landmarks-map-container">
          <Reveal>
            <PortfolioGrid>
              <div className="landmarks-map-wrapper">
                <LandmarkMap imageSrc={landmarkMapImage} />
              </div>
            </PortfolioGrid>
          </Reveal>
        </div>
      </PortfolioContainer>
    </section>
  )
}

export default LandmarksSection
