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
          <img src={logo} alt="" srcset="" />
        </motion.div>

            <div className="col">
                <h1>H&G</h1>
                <p>Developers</p>
            </div>
            <div className="col d-flex  justify-content-center">
          {/* <nav className="navbar navbar-expand-md ">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="button2">inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/formas-de-trabajo" className="button2 "> Formas de trabajo </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/landing-page" className="button2"> Landing page</Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/e-comerce" id='e-commerce' className="button2"> e-commerce </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/web-corporativa" className="button2"> Web corporativa </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contacto" className="button2"> Contacto </Link>
                  </li>
                </ul>
              </div>
            </div>

          </nav> */}
          <nav class="navbar navbar-dark ">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <Link to="/" className="button2 ">Inicio</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/formas-de-trabajo" className="button2">Formas de Trabajo</Link>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle button2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Servicios
                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark">
                        <li>
                          <Link to="/landing-page" className="button2 " >Landing Page</Link>
                          </li>
                          <li>
                              <hr class="dropdown-divider"></hr>
                          </li>
                          <li>
                          <Link to="/e-comerce" id='e-commerce' className="button2">E-comerce</Link>
                          </li>
                          <li>
                              <hr class="dropdown-divider"></hr>
                          </li>
                          <li>
                            <Link to="/web-corporativa" className="button2" >Web Corporativa</Link>
                          </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <Link to="/contacto" className="button2">Contacto</Link>
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
