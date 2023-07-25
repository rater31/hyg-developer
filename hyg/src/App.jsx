import { useState } from 'react'
import Header from './components/Header'
import Somos from './components/Somos'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import Ecomerce from './pages/Ecomerce'
import FormasdeTrabajo from './pages/FormasdeTrabajo'
import LandinPage from './pages/LandinPage'
import WebCorporativa from './pages/WebCorporativa'
import Contacto from './pages/Contacto'
function App() {

  return (
    <>
    <Header/>
    <Routes> 
    <Route path="/" element={<Somos />}/>
    <Route path="/fromas-de-trabajo" element={<FormasdeTrabajo />}/>
    <Route path="/landing-page" element={<LandinPage />}/>
    <Route path="/e-comerce" element={<Ecomerce />}/>
    <Route path="/web-corporativa" element={<WebCorporativa />}/>
    <Route path="/contacto" exact component={<Contacto/>}> 
    </Route>
    </Routes>
    
    {/* <div className="container-fluid w-100">
      <div className="row">
        <div className="col ">
          
          
        </div>
      </div>
    </div> */}
    </>
  )
}

export default App
