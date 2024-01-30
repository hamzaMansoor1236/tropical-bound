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

function App() {
  return (
    <div>
      <ThirdComponent/>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <SixthSection></SixthSection>
      <SeventhSection></SeventhSection>
      <EighthSection></EighthSection>
    </div>
  )
}

export default App
