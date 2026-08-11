import React from 'react'
import Index from './pages/Index'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './pages/Header'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
