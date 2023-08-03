import {React, useRef} from 'react';
import Ecomerce1 from '../assets/Ecomerce1.png'
import Ecomerce2 from '../assets/Ecomerce2.png'
import basic from '../assets/basic.png'
import standard from '../assets/standard.png'
import premium from '../assets/premium.png'
import '../css/landing.css'
import { motion, useTime, useTransform, useInView } from 'framer-motion'

const Ecomerce = () => {
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
                    <h1 className="">E-comerce</h1>
                    <div className="row justify-content-center">
                        <div className="line w-25"></div>
                    </div>
                    <h3 className='mt-3'>Despega tu negocio en línea y conquista el mercado con nuestra plataforma de comercio electrónico personalizada. Diseñada específicamente para empresas, ¡tu éxito es nuestra misión!</h3>
                </div>
            </div>
            <div className="row align-items-center mt-5">
                <div className="col-12 col-md-5 text-center">
                    <IzDer><h4>
                        Vende tus productos en línea con estilo y facilidad
                    </h4></IzDer>
                    <IzDer><div className="row justify-content-center">
                        <div className="line w-75"></div>
                    </div></IzDer>
                    <IzDer><p className='mt-3'>Nuestro equipo de diseño y programación garantiza que tu tienda en línea no sólo se vea genial, sino que también sea fácil de usar y mantener. Incrementa tus ventas y expande tu negocio.</p></IzDer>
                </div>
                <div className="col-6 justify-content-center d-flex">
                    <DerIz><img src={Ecomerce1} className='image d-none d-md-block' alt="" /></DerIz>
                </div>

            </div>
            <div className="row align-items-center  mt-5">
                <div className="col-6 justify-content-center d-flex">
                    <IzDer><img src={Ecomerce2} className='image d-none d-md-block' alt="" /></IzDer>
                </div>
                <div className="col-12 col-md-5 text-center">
                    <DerIz><h4>
                        Mantén a tus clientes felices y seguros
                    </h4></DerIz>
                    <DerIz><div className="row justify-content-center ">
                        <div className="line w-50"></div>
                    </div></DerIz>
                    <DerIz><p className='mt-3 '>La seguridad de tus clientes es nuestra prioridad. Aseguramos que los datos estén protegidos y ofrecemos opciones flexibles de pago para satisfacer todas las necesidades.</p></DerIz>
                </div>
            </div>
            <div className="row text-center mt-5">
                <h3>¿Estás listo para revolucionar tu presencia online?</h3>
                <p>No esperes más, aumenta tus ingresos y conquista el mercado con nuestros servicios de E-Comerce.</p>
            </div>
            <AbAr><div className="row justify-content-around mt-5">
                <div className="card mb-5" style={{ width: '18rem' }}>
                    <img src={basic} className="card-img-top logo-carta" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Servicio Basico</h5>
                        <ul className="card-text">El servicio que ofrecemos cuenta con:
                        <li> Sitio creado en WordPress </li>
                        <li> 3 Secciones de precargada </li>
                        <li> Hasta 5 productos precargadas </li>
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
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card mb-5" style={{ width: '18rem' }}>
                    <img src={standard} className="card-img-top logo-carta" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card mb-5" style={{ width: '18rem' }}>
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

export default Ecomerce;
