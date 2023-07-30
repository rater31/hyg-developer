import {React, useRef} from 'react';
import desarrollo from '../assets/desarrollo.svg'
import testeo from '../assets/testeo-y-prueba.jpg'
import diseño from '../assets/diseño.jpg'
import {motion, useTime, useTransform, useInView } from 'framer-motion'




const FormasdeTrabajo = () =>{

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
   return (
      <div className='container-fluid text-light  mt-5 justify-content-center'>
         <div className="row justify-content-center text-light ">
            <h3 className='text-center'>Formas de trabajo</h3>
            <div className="line2"></div>
         </div>
         <div className="row text-center align-items-center">
            <div className="col-5 ms-3  mt-5">
               <h3 className='text-center'>Diseño</h3>
               <div className="row justify-content-center">
                  <div className="line w-25"></div>
               </div>
               <IzDer className='mt-5'>Convertimos sus diseños en páginas web que se vean y funcionen de manera excelente El primer paso es diseñar la página web. Esto implica decidir el contenido, la estructura  y el estilo de la página..</IzDer>
            </div>
            <div className="col-6 d-flex justify-content-center   mt-5 ">
            <DerIz>

               <img className='imageServicio' src={diseño} alt="" srcset="" />
            </DerIz>
            </div>
         </div>
         <div className='row text-center align-items-center'>
            <div className="col-7 ms-3 mt-5">
               <IzDer>
                  <img src={desarrollo} alt="" className='imageServicio' />
               </IzDer>
            </div>
            <div className='col-4 ms-3 mt-5'>
               <h3>Desarrollo</h3>
               <div className="row justify-content-center">
                  <div className="line w-25"></div>
               </div>
               <DerIz className='mt-5'>Una vez que el diseño de la página web está aprobado, se procede al desarrollo de la página web. Esto implica codificar la página web utilizando un lenguaje de programación</DerIz>
            </div>
         </div>
         <div className='row text-center align-items-center'>
            <div className='col-6 ms-3 mt-5'>
               <h3>Testeo y prueba</h3>
               <div className="row justify-content-center">
                  <div className="line w-25"></div>
                  <IzDer className='mt-5'>Una vez que la página web está desarrollada, se debe probar para asegurarse de que funciona correctamente. Esto implica probar la página web en diferentes navegadores, dispositivos y resoluciones de pantalla.</IzDer>
               </div>
            </div>
            <div className='col-5 ms-3 mt-5'>
               <DerIz>
               <img src={testeo} className='imageServicio' alt="" />

               </DerIz>

            </div>
         </div>
      </div>
   );
}

export default FormasdeTrabajo;
