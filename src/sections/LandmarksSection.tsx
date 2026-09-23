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

        {/* Photos (3 × 2) on the left, the large map beside them on the right. */}
        <div className="landmarks-showcase">
          <div className="landmarks-showcase__photos">
            {landmarks.map((landmark, index) => (
              <Reveal key={landmark.id} delay={(index % 3) * 60}>
                <LandmarkItem
                  nameAr={landmark.nameAr}
                  icon={landmark.icon}
                  photo={landmark.photo}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="landmarks-showcase__map" delay={120}>
            <LandmarkMap imageSrc={landmarkMapImage} />
          </Reveal>
        </div>
      </PortfolioContainer>
    </section>
  )
}

export default LandmarksSection
