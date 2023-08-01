<<<<<<< Updated upstream
import {React, useRef} from 'react';
=======
import {React,useRef} from 'react';
>>>>>>> Stashed changes
import '../css/landing.css'
import Landing2 from '../assets/Landing2.png'
import Landing1 from '../assets/Landing1.png'
import basic from '../assets/basic.png'
import standard from '../assets/standard.png'
import premium from '../assets/premium.png'
import { motion, useTime, useTransform, useInView } from 'framer-motion'
<<<<<<< Updated upstream
const LandinPage = () => {
    function IzDer({ children }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
  
        return (
           <section ref={ref}>
              <span
                 style={{
                    transform: isInView ? "none" : "translateX(-100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                 }}
              >
                 {children}
              </span>
           </section>
        );
     }
  
     // peligro prueba experimental viene de derecha a izquierda
  
     function DerIz({ children }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
        return (
           <section ref={ref}>
              <span
                 style={{
                    transform: isInView ? "none" : "translateX(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                 }}
              >
                 {children}
              </span>
           </section>
        );
     }
=======


const LandinPage = () => {
    // prueba de abajo para arriba
// esta aca va para las cartas de abajo juancho
    function AbAr({ children }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
            <div className='seccion' ref={ref}>
                <div className='span' 
                    style={{
                        transform: isInView ? "none" : "translateY(100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    {children}
                </div>
            </div>
        );
    }

>>>>>>> Stashed changes

    return (
        <div className='text-light container-fluid'>
            <div className="row mt-3">
                <div className="col text-center">
                    <h1 className="">Landing Page</h1>
                    <div className="row justify-content-center">
                        <div className="line w-25"></div>
                    </div>
                    <h3 className='mt-3'>Siempre queremos lo mejor para nuestros clientes por eso ofrecemos el siguiente servicio:</h3>
                </div>
            </div>
            <div className="row align-items-center mt-5">
                <div className="col-5 text-center">
                    <IzDer><h4>
                        Diseño Personalizado y Funcionalidad Única
                    </h4></IzDer>
                    <IzDer><div className="row justify-content-center">
                        <div className="line w-50"></div>
                    </div></IzDer>

                    <IzDer> <p className='mt-3'> Ofrecemos diseños personalizados y funciones únicas para garantizar que tu página de aterrizaje destaque en el mercado.</p></IzDer> 
                </div>
                <div className="col-6 justify-content-center d-flex">
                    <DerIz><img src={Landing2} className='image' alt="" /></DerIz>
                </div>

            </div>
            <div className="row align-items-center  mt-5">
                <div className="col-6 justify-content-center d-flex">
                    <IzDer> <img src={Landing1} className='image' alt="" /></IzDer> 
                </div>
                <div className="col-5 text-center">
                    <DerIz> <h4>
                        Diseño Personalizado y Funcionalidad Única
                    </h4></DerIz>
                    <DerIz> <div className="row justify-content-center">
                        <div className="line w-50"></div>
                    </div></DerIz>
                    <DerIz><p className='mt-3'>Nuestro talentoso equipo de diseñadores y desarrolladores trabajará contigo para crear la página de aterrizaje perfecta para tu negocio.</p></DerIz>
                </div>
            </div>
            <div className="row text-center mt-5">
                <h3>¿Estás listo para revolucionar tu presencia online?</h3>
                <p>No esperes más, aumenta tus ingresos y conquista el mercado con nuestros servicios de Landing Page.</p>
            </div>
            <AbAr><div className="row justify-content-around mt-5">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={basic} className="card-img-top logo-carta" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={standard} className="card-img-top logo-carta" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Servicio Standard</h5>
                        <ul className="card-text">
                            <li>+ Servicio Basico</li>
                            <li>mundo</li>
                            <li>mundo</li>
                            <li>mundo</li>
                            <li>mundo</li>

                        </ul>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={premium} className="card-img-top logo-carta" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div></AbAr>
        </div>
    );
}

export default LandinPage;
