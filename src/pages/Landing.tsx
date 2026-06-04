import Nav from '../components/Nav'
import Hero from '../components/Hero'
import StatStrip from '../components/StatStrip'
import Features from '../components/Features'
import Attributes from '../components/Attributes'
import HowItWorks from '../components/HowItWorks'
import Gallery from '../components/Gallery'
import Pricing from '../components/Pricing'
import FinalCta from '../components/FinalCta'
import Footer from '../components/Footer'

/** The Virtus marketing landing page. */
export default function Landing() {
  return (
    <>
      <Nav />
      <Hero />
      <StatStrip />
      <Features />
      <Attributes />
      <HowItWorks />
      <Gallery />
      <Pricing />
      <FinalCta />
      <Footer />
    </>
  )
}
