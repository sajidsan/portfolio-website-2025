import '@/index.css'
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from '@/components/Header'
import TherachatPage from './pages/Therachat'
import JutPage from './pages/Jut'
import YahooResearchPage from './pages/YahooResearch'
import RelayPage from './pages/Relay'
import CoCreationPage from './pages/CoCreation'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/About'
import WritingPage from '@/pages/Writing'
import ScrollToTop from './components/ScrollToTop'
import { initSoundEffects } from './lib/soundEffects'

function App() {
  useEffect(() => initSoundEffects(), [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main className="mt-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/therachat" element={<TherachatPage />} />
          <Route path="/jut" element={<JutPage />} />
          <Route path="/yahooResearch" element={<YahooResearchPage />} />
          <Route path="/relay" element={<RelayPage />} />
          <Route path="/coCreation" element={<CoCreationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/writing" element={<WritingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
