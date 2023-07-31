import React from 'react';
import '../css/landing.css'
import Landing2 from '../assets/Landing2.png'
import Landing1 from '../assets/Landing1.png'
import basic from '../assets/basic.png'
import standard from '../assets/standard.png'
import premium from '../assets/premium.png'

const LandinPage = () => {
    return (
        <div className='text-light container-fluid'>
            <div className="row mt-3">
                <div className="col text-center">
                    <h1 className="">Landin Page</h1>
                    <h3 className=''>Siempre queremos lo mejor para nuestros clientes por eso ofrecemos el siguiente servicio:</h3>
                </div>
            </div>
            <div className="row align-items-center mt-5">
                <div className="col-6 text-center">
                    <h4>
                        Diseño Personalizado y Funcionalidad Única
                    </h4>
                    <p>Ofrecemos diseños personalizados y funciones únicas para garantizar que tu página de aterrizaje destaque en el mercado.</p>
                </div>
                <div className="col-6 justify-content-center d-flex">
                    <img src={Landing2} className='image' alt="" />
                </div>

            </div>
            <div className="row align-items-center  mt-5">
                <div className="col-6 justify-content-center d-flex">
                    <img src={Landing1} className='image' alt="" />
                </div>
                <div className="col-6 text-center">
                    <h4>
                        Diseño Personalizado y Funcionalidad Única
                    </h4>
                    <p>Nuestro talentoso equipo de diseñadores y desarrolladores trabajará contigo para crear la página de aterrizaje perfecta para tu negocio.</p>
                </div>
            </div>
            <div className="row text-center mt-5">
            <h3>¿Estás listo para revolucionar tu presencia online?</h3>
            <p>No esperes más, aumenta tus ingresos y conquista el mercado con nuestros servicios de Landing Page.</p>
        </div>
            <div className="row justify-content-around mt-5">
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

export default LandinPage;
