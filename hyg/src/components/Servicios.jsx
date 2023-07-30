import { React, useRef } from 'react'
import landing from '../assets/page-landing.png'
import ecomerce from '../assets/Ecomerce.png'
import WebCorporativa from '../assets/web-corporativa.png'
import { Link } from 'react-router-dom'
import { motion, useTime, useTransform, useInView } from 'framer-motion'


const Servicios = () => {

   // viene de izquierda a derecha

   function Section({ children }) {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });

      return (
         <section ref={ref}>
            <span
               style={{
                  transform: isInView ? "none" : "translateX(-200px)",
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

   function Image({ children }) {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });
      return (
         <section ref={ref}>
            <span
               style={{
                  transform: isInView ? "none" : "translateX(500px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
               }}
            >
               {children}
            </span>
         </section>
      );
   }






   return (
      <>
         <h3>Servicios</h3>
         <div className="row justify-content-center ">
            <div className="line2"></div>
         </div>
         <div className="row  align-items-center">
            <div className="col-5 ms-3  mt-5">
               <h3>Landing page</h3>
               <div className="row justify-content-center">
                  <div className="line w-25"></div>
               </div>
               <Section className='mt-5'>Una landing page es una página web independiente que está diseñada para una campaña de marketing o publicidad específica. Está diseñada para persuadir a los visitantes a realizar una acción específica, como registrarse para una newsletter, realizar una compra o programar una cita.</Section>
               <Link to="/landing-page"><button className='boton'> Más Info</button></Link>
            </div>
            <div className="col-6   mt-5 ">
               <img className='landing' src={landing} alt="" srcset="" />
            </div>
         </div>
         <div className='row  align-items-center'>
            <div className="col-7 ms-3 mt-5">
               <img src={ecomerce} alt="" className='landing' />
            </div>
            <div className='col-4 ms-3 mt-5'>
               <h3>E-Comerce</h3>
               <div className="row justify-content-center">
                  <div className="line w-25"></div>
               </div>
               <Section className='mt-5'>Una tienda de comercio electrónico es un sitio web que permite a los clientes comprar bienes y servicios en línea. Las tiendas de comercio electrónico suelen utilizar plataformas de comercio electrónico para gestionar sus pedidos, inventario y pagos..</Section>
               <Link to="/e-comerce"><button className='boton'> Más Info</button></Link>
            </div>
         </div>
         <div className='row align-items-center'>
            <div className='col-6 ms-3 mt-5'>
               <h3>Web Corporativa</h3>
               <div className="row justify-content-center">
                  <div className="line w-25"></div>
                  <Section className='mt-5'>Una web corporativa es un sitio web que representa a una empresa o organización. Su propósito es dar información sobre la empresa, sus productos o servicios  y sus empleados. También puede utilizarse para comercializar los mismos, generar un Cliente potencial y aumentar la visibilidad de la marca.</Section>
                  <Link to="/web-corporativa"><button className='boton'> Más Info</button></Link>
               </div>
            </div>
            <div className='col-5 ms-3 mt-5'>
               <img src={WebCorporativa} className='landing' alt="" />

            </div>
            {/* div de prueba */}
            <div className="col-6">

               <Image className='col-5'>
                  <img src={WebCorporativa} className='landing' alt="" />

               </Image>
            </div>
            {/* f div */}
         </div>

      </>
   )
}

export default Servicios