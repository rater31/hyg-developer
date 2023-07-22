import React from 'react'
import logo from '../assets/logo.png'
import '../css/header.css'

const Header = () => {
  return (
    <div className="fondoheader ">
        <div className="row text-center">

            <div className="col-12 ">
                <img src={logo} alt="" srcset="" />
            </div>
            <div className="col">
                <h1>H&G</h1>
                <p>Developers</p>
            </div>
            <div className="col-12 d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Pricing</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="#">Dropdown link</a>
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
