import React from 'react';
import Ecomerce1 from '../assets/Ecomerce1.png'
import Ecomerce2 from '../assets/Ecomerce2.png'
import basic from '../assets/basic.png'
import standard from '../assets/standard.png'
import premium from '../assets/premium.png'
import '../css/landing.css'

const Ecomerce = () => {
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
                <div className="col-6 text-center">
                    <h4>
                        Vende tus productos en línea con estilo y facilidad
                    </h4>
                    <div className="row justify-content-center">
                        <div className="line w-75"></div>
                    </div>
                    <p className='mt-3'>Nuestro equipo de diseño y programación garantiza que tu tienda en línea no sólo se vea genial, sino que también sea fácil de usar y mantener. Incrementa tus ventas y expande tu negocio.</p>
                </div>
                <div className="col-6 justify-content-center d-flex">
                    <img src={Ecomerce1} className='image' alt="" />
                </div>

            </div>
            <div className="row align-items-center  mt-5">
                <div className="col-6 justify-content-center d-flex">
                    <img src={Ecomerce2} className='image' alt="" />
                </div>
                <div className="col-6 text-center">
                    <h4>
                        Mantén a tus clientes felices y seguros
                    </h4>
                    <div className="row justify-content-center">
                        <div className="line w-50"></div>
                    </div>
                    <p className='mt-3'>La seguridad de tus clientes es nuestra prioridad. Aseguramos que los datos estén protegidos y ofrecemos opciones flexibles de pago para satisfacer todas las necesidades.</p>
                </div>
            </div>
            <div className="row text-center mt-5">
                <h3>¿Estás listo para revolucionar tu presencia online?</h3>
                <p>No esperes más, aumenta tus ingresos y conquista el mercado con nuestros servicios de E-Comerce.</p>
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

export default Ecomerce;
