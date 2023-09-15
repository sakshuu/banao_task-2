import React from 'react'
import { MyNavbar } from './components'
import UxStrategy from './components/UxStrategy'
import Nasa from './components/Nasa'
import About from './pages/About'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import "./assets/css/index.css"
import FixedSvg from './components/FixedSvg'

const App = () => {
  return <>
   <BrowserRouter>
   {/* <MyNavbar/> */}
   <FixedSvg/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ux' element={<UxStrategy/>} />
          <Route path='/nasa' element={<Nasa/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
  </>
}

export default App