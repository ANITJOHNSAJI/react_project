import { useState } from 'react'
import { BrowserRouter ,Router, Route, Routes } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Courselist from './Components/Courselist'
import Coursedetails from './Components/Coursedetails'


export default function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='contact' element={<Contact/>}/>
   <Route path='about' element={<About/>}/>
   <Route path='courselist' element={<Courselist/>}/>
   <Route path="/courses/:id" element={<Coursedetails />} />
 </Routes>
 </BrowserRouter>
 </>
  )
}
