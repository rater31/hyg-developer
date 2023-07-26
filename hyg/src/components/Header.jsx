import React from 'react'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import '../css/header.css'
import { Link} from 'react-router-dom'

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
                <Link to="/"  className="button2">inicio</Link> 
              </li>
              <li className="nav-item">
                <Link to="/formas-de-trabajo" className="button2 "> Formas de trabajo </Link>
              </li>
              <li className="nav-item">
                <Link to="/landing-page"  className="button2"> Landing page</Link> 
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
        
      </nav>
            </div>

        </div>
      
    </div>
  )
}

export default Header
