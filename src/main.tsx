import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar/Navbar.tsx'
import About from './components/about/About.tsx'
import Footer from './components/footer/Footer.tsx'
import MyProjects from './components/about/MyProjects.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <About/>
    <MyProjects/>
    <Footer/>
  </StrictMode>,
)
