import {React, useRef} from 'react';
import '../css/web-corporativa.css'
import WebCorp1 from '../assets/web1.png'
import WebCorp2 from '../assets/web2.png'
import basic from '../assets/basico.png'
import standard from '../assets/standard2.png'
import premium from '../assets/premium2.png'
import { motion, useTime, useTransform, useInView } from 'framer-motion'


const WebCorporativa = () => {
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
                    <h2 className="">Web Corporativa</h2>
                    <div className="row justify-content-center">
                        <div className="line w-25"></div>
                    </div>
                    <h3 className='mt-4'>Servicios Que Transforman</h3>
                    <p className='mt-3'> Nos especializamos en ofrecer soluciones web corporativas innovadoras y efectivas. Nuestro equipo de expertos trabajará incansablemente para elevar tu negocio al siguiente nivel.</p>
                </div>
            </div>
            <div className="row align-items-center mt-5">
                <div className="col-12 col-md-5 text-center">
                    <IzDer><h4>
                        Diseño Web Único Y Atractivo
                    </h4></IzDer>
                    <IzDer><div className="row justify-content-center">
                        <div className="line w-50"></div>
                    </div></IzDer>
                    <IzDer><p className='mt-3'>Nuestros expertos en diseño crean sitios web asombrosos que encajan perfectamente con la identidad visual de tu empresa, capturando la atención de tus clientes.</p></IzDer>
                </div>
                <div className="col-6 justify-content-center d-flex">
                    <DerIz><img src={WebCorp1} className='image d-none d-md-block' alt="" /></DerIz>
                </div>
            </div>

            <div className="row align-items-center  mt-5">
                <div className="col-6 justify-content-center d-flex">
                    <IzDer><img src={WebCorp2} className='image d-none d-md-block' alt="" /></IzDer>
                </div>
                <div className="col-12 col-md-5 text-center">
                    <DerIz><h4>
                        Optimización Y Promoción Online
                    </h4></DerIz>
                    <DerIz><div className="row justify-content-center">
                        <div className="line w-50"></div>
                    </div></DerIz>
                    <DerIz><p className='mt-3'>Incrementa tus métricas y conecta con tu público objetivo. Nos encargamos de la optimización SEO y la promoción de tus redes sociales.</p></DerIz>
                </div>
            </div>
            <div className="row text-center mt-5">
                <h3>¿Estás listo para revolucionar tu presencia online?</h3>
                <p>No esperes más, aumenta tus ingresos y conquista el mercado con nuestros servicios de web corporativa.</p>
            </div>
            <AbAr><div className="row justify-content-around mt-pajarito">
                <div className="card mb-5" style={{ width: '18rem' }}>
                    <img src={basic} className="card-img-top logo-carta" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

export default WebCorporativa;
