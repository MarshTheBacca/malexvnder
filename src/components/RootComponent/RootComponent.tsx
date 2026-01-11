import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeContent } from '../HomeContent/HomeContent'
import { NavBar } from '../NavBar/NavBar'
import { AboutContent } from '../AboutContent/AboutContent'
import { AnimatePresence } from 'framer-motion'
import { ProductsContent } from '../ProductsContent/ProductsContent'
import { ContactContent } from '../ContactContent/ContactContent'

export function RootComponent(): React.ReactElement<HTMLDivElement> {
  return (
    <div className={'v relative flex h-screen w-screen flex-col'}>
      <BrowserRouter basename={'/'}>
        <NavBar />
        <div className={'relative flex-1 overflow-hidden'}>
          <AnimatePresence mode={'wait'}>
            <Routes>
              <Route path={'/'} element={<HomeContent />} />
              <Route path={'/about'} element={<AboutContent />} />
              <Route path={'/products'} element={<ProductsContent />} />
              <Route path={'/contact'} element={<ContactContent />} />
            </Routes>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </div>
  )
}
