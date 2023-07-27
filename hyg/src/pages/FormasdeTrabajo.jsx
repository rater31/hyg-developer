import React from 'react';
import desarrollo from '../assets/desarrollo.svg'
import testeo from '../assets/testeo-y-prueba.jpg'
import diseño from '../assets/diseño.jpg'



const FormasdeTrabajo = () => {
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
               <p className='mt-5'>Convertimos sus diseños en páginas web que se vean y funcionen de manera excelente El primer paso es diseñar la página web. Esto implica decidir el contenido, la estructura  y el estilo de la página..</p>
            </div>
            <div className="col-6 d-flex justify-content-center   mt-5 ">
               <img className='imageServicio' src={diseño} alt="" srcset="" />
            </div>
         </div>
         <div className='row text-center align-items-center'>
            <div className="col-7 ms-3 mt-5">
               <img src={desarrollo} alt="" className='imageServicio' />
            </div>
            <div className='col-4 ms-3 mt-5'>
               <h3>Desarrollo</h3>
               <div className="row justify-content-center">
                  <div className="line w-25"></div>
               </div>
               <p className='mt-5'>Una vez que el diseño de la página web está aprobado, se procede al desarrollo de la página web. Esto implica codificar la página web utilizando un lenguaje de programación</p>
            </div>
         </div>
         <div className='row text-center align-items-center'>
            <div className='col-6 ms-3 mt-5'>
               <h3>Testeo y prueba</h3>
               <div className="row justify-content-center">
                  <div className="line w-25"></div>
                  <p className='mt-5'>Una vez que la página web está desarrollada, se debe probar para asegurarse de que funciona correctamente. Esto implica probar la página web en diferentes navegadores, dispositivos y resoluciones de pantalla.</p>
               </div>
            </div>
            <div className='col-5 ms-3 mt-5'>
               <img src={testeo} className='imageServicio' alt="" />

            </div>
         </div>
      </div>
   );
}

export default FormasdeTrabajo;
