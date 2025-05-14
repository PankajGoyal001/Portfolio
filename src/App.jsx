import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './component/Footer'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/project' element={<Projects />}/>
      <Route path='/resume' element={<Resume />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
