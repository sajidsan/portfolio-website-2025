import { useState } from 'react'
import '@/index.css'
import TextRotate from '@/fancy/components/text/text-rotate'
import VerticalCutReveal from '@/fancy/components/text/vertical-cut-reveal'
import { motion, LayoutGroup } from 'framer-motion'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectCard from '@/components/ProjectCard'
import Header from '@/components/Header'
import TherachatPage from './pages/Therachat'
import JutPage from './pages/Jut'
import YahooResearchPage from './pages/YahooResearch'
import RelayPage from './pages/Relay'
import CoCreationPage from './pages/CoCreation'
import HomePage from '@/pages/HomePage'
import ScrollToTop from './components/ScrollToTop'







function App() {
  

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
      </Routes>
    
      

    
     
    </main>
    </BrowserRouter>
  );
}

export default App
