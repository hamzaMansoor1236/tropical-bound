import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThirdComponent from './Components/ThirdSection/ThirdSection'
import FourthSection from './Components/FourthSection/FourthSection'

function App() {
  return (
    <div>
      <ThirdComponent/>
      <FourthSection></FourthSection>
    </div>
  )
}

export default App
