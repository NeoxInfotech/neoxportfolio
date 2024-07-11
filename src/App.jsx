import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './screens/Contact'
import Pricing from './screens/Pricing'
import About from './screens/About'
import ScrollToTop from './components/ScrollToTop'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
