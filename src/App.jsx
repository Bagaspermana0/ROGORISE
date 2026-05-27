import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Problem from './components/Problem'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Competitors from './components/Competitors'
import Pricing from './components/Pricing'
import MarketSize from './components/MarketSize'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Footer from './components/Footer'
import MobileApp from './app/MobileApp'

function LandingPage() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Features />
        <HowItWorks />
        <Competitors />
        <Pricing />
        <MarketSize />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<MobileApp />} />
        <Route path="/app/*" element={<MobileApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
