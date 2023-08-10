import {React, useRef} from 'react';
import '../css/landing.css'
import Landing2 from '../assets/landing-2.png'
import Landing1 from '../assets/landing-1.png'
import basic from '../assets/basico.png'
import standard from '../assets/standard-2.png'
import premium from '../assets/premium-2.png'
import {useInView } from 'framer-motion'
import { Link } from 'react-router-dom';
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
                    transform: isInView ? "none" : "translateX(10px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                 }}
              >
                 {children}
              </span>
           </section>
        );
     }
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


    return (
        <div className='text-light container-fluid'>
            <div className="row mt-3">
                <div className="col text-center">
                    <h2 className="">Landing Page</h2>
                    <div className="row justify-content-center">
                        <div className="line w-25"></div>
                    </div>
                    <h3 className='mt-3'>Siempre queremos lo mejor para nuestros clientes por eso ofrecemos el siguiente servicio:</h3>
                </div>
            </div>
            <div className="row align-items-center mt-5">
                <div className=" col-12 col-md-5 text-center">
                    <IzDer><h4>
                        Diseño Personalizado y Funcionalidad Única
                    </h4></IzDer>
                    <IzDer><div className="row justify-content-center">
                        <div className="line w-50"></div>
                    </div></IzDer>

                    <IzDer> <p className='mt-3'> Ofrecemos diseños personalizados y funciones únicas para garantizar que tu página de aterrizaje destaque en el mercado.</p></IzDer> 
                </div>
                <div className="col-12 col-md-6 justify-content-center d-flex">
                    <DerIz><img src={Landing1} className='image-landing d-none d-md-block' alt="" /></DerIz>
                </div>

            </div>
            <div className="row align-items-center  mt-5">
                <div className=" col-11 col-md-6 justify-content-center d-flex">
                    <IzDer> <img src={Landing2} className='image-landing d-none d-md-block' alt="" /></IzDer> 
                </div>
                <div className=" col-12 col-md-5 text-center">
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
                <div className="card bg-card mb-5 " style={{ width: '18rem', height:'43rem' }}>
                    <img src={basic} className="card-img-top logo-carta mt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Servicio Basico</h5>
                        <ul className="card-text">El servicio cuenta con:
                        <li> Sitio creado en Vanilla(HTML, CSS, JS) </li>
                        <li> Seccion de precargada </li>
                        <li> Hasta 5 fotos precargadas </li>
                        <li> Carrusel/ Slider hasta 3 fotos </li>
                        <li> Optimizacion para todos los dispositivos </li>
                        <li> Formulario de Contacto </li>
                        <li> Redireccionamiento a redes sociales</li>
                        <li> Boton WhatsApp con mensaje a tu gusto</li>
                        <li> sin necesidad de mantenimiento</li>
                        
                        </ul>
                        <Link to="/contacto"><a href="" className="btn btn-danger">Mas Info</a></Link>
                    </div>
                </div>
                <div className="card bg-card mb-5" style={{ width: '18rem', height:'53rem' }}>
                    <img src={standard} className="card-img-top logo-carta mt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Servicio Standard</h5>
                        <ul className="card-text"> El servicio cuenta con:
                        <li> Sitio creado en Vanilla(HTML, CSS, JS) </li>
                        <li> Seccion de precargada </li>
                        <li> Hasta 10 fotos precargadas </li>
                        <li> Carrusel/ Slider hasta 5 fotos </li>
                        <li> Optimizacion para todos los dispositivos </li>
                        <li> Formulario de Contacto </li>
                        <li> Redireccionamiento a redes sociales </li>
                        <li> Boton WhatsApp con mensaje a tu gusto </li>
                        <li> Dominio propio por un año </li>
                        <li> Servicio de Hosting por un año </li>
                        <li> E-mail personalizado </li>
                        <li> Optimizado con Google Adwords </li>
                        <li> Certificado SSL </li>
                        <li> sin necesidad de mantenimiento </li>

                        </ul>
                        <Link to="/contacto"><a href="#" className="btn btn-danger">Mas Info</a></Link>
                    </div>
                </div>
                <div className="card bg-card mb-5" style={{ width: '18rem' }}>
                    <img src={premium} className="card-img-top logo-carta mt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Servicio Premium</h5>
                        <ul className="card-text">El servicio cuenta con:
                        <li> Sitio creado en Vanilla(HTML, CSS, JS) </li>
                        <li> Seccion de precargada </li>
                        <li> Hasta 15 fotos precargadas </li>
                        <li> Carrusel/ Slider hasta 10 fotos </li>
                        <li> Optimizacion para todos los dispositivos </li>
                        <li> Formulario de Contacto </li>
                        <li> Videos Multimedia </li>
                        <li> Ubicacion en Google Maps </li>
                        <li> Soporte Tecnico por 2 años </li>
                        <li> Redireccionamiento a redes sociales </li>
                        <li> Boton WhatsApp con mensaje a tu gusto </li>
                        <li> Dominio propio por 2 años </li>
                        <li> Servicio de Hosting por 2 años </li>
                        <li> Hasta 3 E-mails personalizados </li>
                        <li> Optimizado con Google Adwords </li>
                        <li> Certificado SSL</li>
                        <li> sin necesidad de mantenimiento</li>
                        </ul>
                        <Link to="/contacto"><a href="#" className="btn btn-danger">Mas Info</a></Link>
                    </div>
                </div>
            </div></AbAr>
        </div>
    );
}

export default LandinPage;
