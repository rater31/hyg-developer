import React from 'react'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import '../css/header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    // const [clase, setClase] = useState("button2");
  // Acá estoy jugando para lograr que se seleccione un solo color cada vez que se le hace click pero ta medio complicado che 
    // const handleClick2 = () =>{
    //   const inicio = document.getElementById('inicio')
    //   const forma = document.getElementById('forma-de-trabajo')
    //   const landingP = document.getElementById('landing-page')    

    //   let cl2 = clase
    //   if (inicio.classList=="button2 select"){
    //     cl2="button2"
    //     setClase(cl2)
    //   }else{
    //     cl2="button2 select"
    //     setClase(cl2)

    //   }
    // }

  //==============================================
    // const [activeLink, setActiveLink] = useState("");
    
    // useEffect(() => {
    //   // Get the current URL
    //   const currentUrl = window.location.pathname;
    
    //     // Set the active link to the current URL
    //     setActiveLink(currentUrl);
    //   }, [setActiveLink]);
    const [activeLink, setActiveLink] = useState("");  
      useEffect(() => {
        // Get the current URL
        // Set the active link to the current URL
        nav.render(activeLink);
        console.log(activeLink)
      }, []);
      
    



  //===============================================

    // const handleClick = () =>{
    //   let cl = clase
    //   cl=cl.includes("select")?"button2":"button2 select"
    //   setClase(cl)
    // }



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
                <Link to="/"    className={activeLink === "/" ? "button2 select" : "button2"}>inicio</Link> 
              </li>
              <li className="nav-item">
                <Link to="/formas-de-trabajo" className={activeLink === "/formas-de-trabajo" ? "button2 select" : "button2"}> Formas de trabajo </Link>
              </li>
              <li className="nav-item">
                <Link to="/landing-page"  className={activeLink === "/landing-page" ? "button2 select" : "button2"}> Landing page</Link> 
              </li>
              <li className="nav-item ">
                <Link to="/e-comerce" id='e-commerce' className={activeLink === "/e-comerce" ? "button2 select" : "button2"}> e-commerce </Link>
              </li>
              <li className="nav-item">
                <Link to="/web-corporativa" className={activeLink === "/web-corporativa" ? "button2 select" : "button2"}> Web corporativa </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className={activeLink === "/contacto" ? "button2 select" : "button2"}> Contacto </Link> 
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
