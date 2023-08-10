import { useEffect, useState, useRef } from 'react'
import React from 'react'
import pcOscura from '../assets/pc-oscura.jpg'
import '../css/somos.css'
import Servicios from './Servicios'
import { motion, useTime, useTransform, useInView } from 'framer-motion'

const Somos = () => {
  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }

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

  return (
    <div className="container-fluid w-100">
      <div className="row">
        <div className="col ">

          <div className='row justify-content-around text-light '>
            <div className="col-12 col-md-6 col-xxl-2  mt-5 ">
              <IzDer>
                <img className='image d-none d-md-block' src={pcOscura} alt="" srcset="" />
              </IzDer>
            </div>
            <div className="col-12 col-md-6 col-xxl-4 text-center mt-5 " >
              <h3>Quienes Somos</h3>
              <div className="row justify-content-center">
                <div className="line w-50"></div>
              </div>
              <div className="col-12 col-md-11 text-center">
                <Section><p className='mt-3'>Somos H&G, una sociedad dedicada a la programación especializada en fullstack, nos destacamos por ofrecer la creación de páginas web de alta calidad y soluciones innovadoras para nuestros clientes.</p></Section>
              </div>
            </div>
            <div className="col-12 text-center mt-5 ">
              <Servicios />
            </div>
            <div className="col-12 text-center mt-5 ">

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Somos