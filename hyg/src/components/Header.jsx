import React from 'react'
import logo from '../assets/logo.png'
import '../css/header.css'
import { Oulet, Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="fondoheader container-fluid">
        <div className=" row text-center d-grid ">

            <div className="col ">
                <img src={logo} alt="" srcset="" />
            </div>
            <div className="col ">
                <h1>H&G</h1>
                <p>Developers</p>
            </div>
            <div className="col d-flex  justify-content-center">
            <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/"><a className="nav-link select" href="#">Inicio</a></Link> 
              </li>
              <li className="nav-item">
                <Link to="/formas-de-trabajo"><a className="nav-link button2" href="#">Formas de trabajo</a></Link>
              </li>
              <li className="nav-item">
                <Link to="/landing-page"><a className="nav-link button2" href="#">Landing page</a></Link> 
              </li>
              <li className="nav-item ">
                <Link to="/e-comerce"><a className="nav-link button2" href="#">e-commerce</a></Link>
              </li>
              <li className="nav-item">
                <Link to="/web-corporativa"><a className="nav-link button2" href="#">Web corporativa</a></Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto"><a className="nav-link button2" href="#">Contacto</a></Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
            </div>

        </div>
      <Oulet/>
    </div>
  )
}

export default Header
