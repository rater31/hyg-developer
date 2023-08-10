import React from 'react'
import logo from '../assets/logo.png'
import '../css/header.css'
import { Link } from 'react-router-dom'
import { motion, useTime, useTransform } from 'framer-motion'

const Header = () => {
  const time = useTime()
  const rotate = useTransform(
    time,
    [0, 10000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  )

  return (
    <div className="fondoheader container-fluid">
      <div className=" row d-grid text-center justify-content-center  ">
        <motion.div style={{ rotate }} className="col">
          <Link to="/"><img src={logo} alt="" srcset="" /></Link>
        </motion.div>

        <div className="col">
          <h1>H&G</h1>
          <p>Developers</p>
        </div>
        <div className="col d-flex  justify-content-center">
          <nav class="navbar navbar-dark navbar-expand-md">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  {/* <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">H&G | Developers</h5> */}
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <Link to="/" className="button2 mt-2 mt-md-0">Inicio</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/formas-de-trabajo" className="button2 mt-2 mt-md-0">Formas de Trabajo</Link>
                    </li>
                    <li>
                      <Link to="/landing-page" className="button2 mt-2 mt-md-0 " >Landing Page</Link>
                    </li>
                    <li>
                      <Link to="/e-comerce" id='e-commerce' className="button2 mt-2 mt-md-0">E-comerce</Link>
                    </li>
                    <li>
                      <Link to="/web-corporativa" className="button2 mt-2 mt-md-0" >Web Corporativa</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/contacto" className="button2 mt-2 mt-md-0">Contacto</Link>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </nav>
        </div>

      </div>

    </div>
  )
}

export default Header
