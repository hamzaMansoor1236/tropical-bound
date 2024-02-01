import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThirdComponent from './Components/ThirdSection/ThirdSection'
import FourthSection from './Components/FourthSection/FourthSection'
import FifthSection from './Components/FifthSection.js/FifthSection'
import SixthSection from './Components/SixthSection/SixthSection'
import SeventhSection from './Components/SeventhSection/SeventhSection'
import EighthSection from './Components/EighthSection/EighthSection'
import NinthSection from './Components/NinthSection/NinthSection'

import EleventhSection from './Components/EleventhSection/EleventhSection'
import TenthSection from './Components/TenthSection/TenthSection'
import FooterSection from './Components/FooterSection/FooterSection'

function App() {
  return (
    <div>
      <ThirdComponent />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection />
      <EleventhSection />
      <FooterSection></FooterSection>
    </div>
  )
}

export default App
