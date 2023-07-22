import React from 'react'
import landing from '../assets/page-landing.png'
const Servicios = () => {
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
        <p className='mt-5'>Una landing page es una página web independiente que está diseñada para una campaña de marketing o publicidad específica. Está diseñada para persuadir a los visitantes a realizar una acción específica, como registrarse para una newsletter, realizar una compra o programar una cita.</p>
     </div>
     <div className="col-3   mt-5 ">
        <img className='landing' src={landing} alt="" srcset="" />
     </div>

     </div>
    </>
  )
}

export default Servicios