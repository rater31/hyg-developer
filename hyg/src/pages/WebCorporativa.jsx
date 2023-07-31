import React from 'react';
import '../css/web-corporativa.css'
import WebCorp1 from '../assets/WebCorp1.jpg'
import WebCorp2 from '../assets/WebCorp2.jpg'
import basic from '../assets/basic.png'
import standard from '../assets/standard.png'
import premium from '../assets/premium.png'


const WebCorporativa = () => {
    return (
        <div className='text-light container-fluid'>
        <div className="row mt-3">
            <div className="col text-center">
                <h1 className="">Web Corporativa</h1>
                <div className="row justify-content-center">
                        <div className="line w-25"></div>
                    </div>
                <h3 className='mt-4'>Servicios Que Transforman</h3>
                <p className='mt-3'> Nos especializamos en ofrecer soluciones web corporativas innovadoras y efectivas. Nuestro equipo de expertos trabajará incansablemente para elevar tu negocio al siguiente nivel.</p>
            </div>
        </div>
        <div className="row align-items-center mt-5">
            <div className="col-6 text-center">
                <h4>
                Diseño Web Único Y Atractivo
                </h4>
                <div className="row justify-content-center">
                        <div className="line w-50"></div>
                    </div>
                <p className='mt-3'>Nuestros expertos en diseño crean sitios web asombrosos que encajan perfectamente con la identidad visual de tu empresa, capturando la atención de tus clientes.</p>
            </div>
            <div className="col-6 justify-content-center d-flex">
                <img src={WebCorp1} className='image' alt="" />
            </div>
        </div>

        <div className="row align-items-center  mt-5">
            <div className="col-6 justify-content-center d-flex">
                <img src={WebCorp2} className='image' alt="" />
            </div>
            <div className="col-6 text-center">
                <h4>
                Optimización Y Promoción Online
                </h4>
                <div className="row justify-content-center">
                        <div className="line w-50"></div>
                    </div>
                <p className='mt-3'>Incrementa tus métricas y conecta con tu público objetivo. Nos encargamos de la optimización SEO y la promoción de tus redes sociales.</p>
            </div>
        </div>
        <div className="row text-center mt-5">
            <h3>¿Estás listo para revolucionar tu presencia online?</h3>
            <p>No esperes más, aumenta tus ingresos y conquista el mercado con nuestros servicios de web corporativa.</p>
        </div>
        <div className="row justify-content-around mt-pajarito">
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
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
        </div>
    </div>
    );
}

export default WebCorporativa;
