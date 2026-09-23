import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import AboutSection from './components/AboutSection'
import LogofolioSection from './sections/LogofolioSection'
import PostersSection from './sections/PostersSection'
import UiDesignSection from './sections/UiDesignSection'
import PackagingSection from './sections/PackagingSection'
import TypographySection from './sections/TypographySection'
import MagazinesSection from './sections/MagazinesSection'

import StationerySection from './sections/StationerySection'
import LandmarksSection from './sections/LandmarksSection'
import SiteFooter from './components/SiteFooter'

const GREETINGS = ['HELLO', 'BONJOUR', 'السلام عليكم', 'CIAO']
const SKILL_WORDS = [
  'UI DESIGN',
  'PACKAGING',
  'BRAND IDENTITY',
  'POSTERS',
  'TYPOGRAPHY',
  'EDITORIAL',
  'SOCIAL MEDIA',
  'STATIONERY',
]

// Page 1 + Sections 01–08 + footer.
function App() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Marquee items={GREETINGS} direction="left" duration="30s" />
      <AboutSection />
      <Marquee items={SKILL_WORDS} direction="right" duration="44s" />
      <LogofolioSection />
      <PostersSection />
      <UiDesignSection />
      <PackagingSection />
      <StationerySection />
      <TypographySection />
      <MagazinesSection />
      <LandmarksSection />
      <SiteFooter />
    </>
  )
}

export default App
