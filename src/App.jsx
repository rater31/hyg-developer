import { useState } from 'react'
import Header from './components/Header'
import Somos from './components/Somos'
import Footer from './components/Footer'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Ecomerce from './pages/Ecomerce'
import FormasdeTrabajo from './pages/FormasdeTrabajo'
import LandinPage from './pages/LandinPage'
import WebCorporativa from './pages/WebCorporativa'
import Contacto from './pages/Contacto'
function App() {

  return (
    <>
    <Header/>
    <HashRouter> 
  
    <Route path="/" element={<Somos />}/>


    <Route path="/#/formas-de-trabajo" element={<FormasdeTrabajo />}/>

    <Route path="/#/landing-page" element={<LandinPage />}/>

    <Route path="/#/e-comerce" element={<Ecomerce />}/>

    <Route path="/#/web-corporativa" element={<WebCorporativa />}/>

    <Route path="/#/contacto" element={<Contacto/>}> 

    

    </Route>
    </HashRouter>
    <Footer/>
    </>
  )
}

export default App
