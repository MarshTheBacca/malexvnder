import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeContent } from '../HomeContent/HomeContent'
import { NavBar } from '../NavBar/NavBar'
import { AboutContent } from '../AboutContent/AboutContent'
import { AnimatePresence } from 'framer-motion'

export function RootComponent(): React.ReactElement<HTMLDivElement> {
  return (
    <div className={'relative min-h-screen w-screen bg-gray-400'}>
      <BrowserRouter basename={'/malexvnder'}>
        <NavBar />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='/about' element={<AboutContent />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  )
}
