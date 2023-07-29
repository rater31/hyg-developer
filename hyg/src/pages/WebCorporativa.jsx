import React from 'react';
import '../css/web-corporativa.css'
import secciones from '../assets/anadir.png'


const WebCorporativa = () => {
    return (
        <div className='container-fluid'>
            <h1 className='text-center text-light mt-5'>Web Corporativa</h1>
            <div className="row">
                <div className="col">
                    <h2 className='text-center text-light mt-5'>¿Qué incluye?</h2>
                </div>
            </div>
            <div className="row text-center mt-5 justify-content-center ">
                <div className="col-3 mt-4 mx-4  contenedor">
                    <p>6 Secciones</p>
                </div>
                <div className="col-3 mt-4 mx-4 contenedor">
                    <p>Hasta 10 Fotos</p>
                </div>
                <div className="col-3 mt-4 mx-4 contenedor text-center">
                    <p>1 carrusel con hasta 5 imagenes</p>
                </div>
                <div className="col-3 mt-4 mx-4 text-center contenedor">
                    <p>formulario de contacto</p>
                </div>
                <div className="col-3 mt-4 mx-4 contenedor velozin">
                    <p>Links de las Redes </p>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <img src={secciones} className='image-contacto my-2 ' alt="" srcset="" />

            </div>
            <div className="row text-center  justify-content-center ">
                <div className="col-4 mt-4 mx-4  contenedor">
                    <p>6 Secciones</p>
                </div>
                <div className="col-4 mt-4 mx-4 contenedor">
                    <p>Hasta 10 Fotos</p>
                </div>
                <div className="col-4 mt-4 mx-4 contenedor text-center">
                    <p>1 carrusel con hasta 5 imagenes</p>
                </div>
                <div className="col-3 mt-4 mx-4 text-center contenedor">
                    <p>formulario de contacto</p>
                </div>
                <div className="col-3 mt-4 mx-4 contenedor">
                    <p>Links de las Redes </p>
                </div>
            </div>


        </div>
    );
}

export default WebCorporativa;
