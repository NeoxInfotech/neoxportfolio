import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './screens/Contact'
import Pricing from './screens/Pricing'
import About from './screens/About'
import ScrollToTop from './components/ScrollToTop'
import Loader from './constant/Loader'
import NeoxEdu from './screens/NeoxEdu'


const App = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loader ? <Loader /> : <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/neoxedu' element={<NeoxEdu />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      }

    </>
  )
}

export default App
