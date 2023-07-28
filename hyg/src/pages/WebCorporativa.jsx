import React from 'react';
import '../css/web-corporativa.css'
const WebCorporativa = () => {
    return (
        <div className='container-fluid'>
            <h1 className='text-center text-light mt-5'>Web Corporativa</h1>
            <div className="row">
                <div className="col">
                    <h2 className='text-center text-light mt-5'>¿Qué incluye?</h2>
                </div>
            </div>
            <div className="row text-start d-grid justify-content-center">
                <div className="col">
                    <div className="contenedor">
                        <ul>
                            <li>6 Secciones</li>
                            <li>Hasta 10 fotos</li>
                            <li>Optimización para todos los dispositivos (móvil, tablet, pc, tv)</li>
                            <li>1 carrusel con hasta 5 imagenes</li>
                            <li>1 formulario de contacto</li>
                            <li>Links a las redes sociales</li>
                            <li>Botón Flotante de whatsapp</li>
                            <li>Hosting por 1 año</li>
                            <li>Dominio por 1 año</li>
                            <li>Certificado SSL por 1 año</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default WebCorporativa;
