import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Components/About/About'
import Apply from '../Components/Apply/Apply'
import Contact from '../Components/Contact/Contact'
import Courses from '../Components/Courses/Courses'
import Details from '../Components/Details/Details'
import Home from '../Components/Home/Home'
import Meeting from '../Components/Meeting/Meeting'

function Body() {
  return (
    <div>
        <Home />
        <Meeting />
        <Apply />
        <Courses />
        <About />
        <Contact />
        
    </div>
  )
}

export default Body