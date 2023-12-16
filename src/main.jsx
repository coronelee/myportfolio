import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import WelcomeFrame from './components/WelcomeFrame'
import Works from './components/Works'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WelcomeFrame />
    <Skills />
    <Works />
    <Contact />
    <Footer /> 
  </React.StrictMode>,
)
