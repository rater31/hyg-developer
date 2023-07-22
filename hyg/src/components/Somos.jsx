import React from 'react'
import pcOscura from '../assets/pc-oscura.jpg'
import '../css/somos.css'
import Servicios from './Servicios'
const Somos = () => {
  return (
    <div className='row text-light '>
        <div className="col-6 mt-5 ">
            <img className='image' src={pcOscura} alt="" srcset="" />
        </div>
        <div className="col-6 text-center mt-5 " >
            <h3>Quienes Somos</h3>
            <div className="row justify-content-center">
                <div className="line w-50"></div>
            </div>
            <p className='mt-5'>Somos H&G, una sociedad dedicada a la programación especializada en la parte de fullstack, nos destacamos por ofrecer la creación de páginas web de alta calidad y soluciones innovadoras para nuestros clientes.</p>
        </div>
        <div className="col-12 text-center mt-5 bg-warning">
            <Servicios/>
        </div>
    </div>
  )
}

export default Somos