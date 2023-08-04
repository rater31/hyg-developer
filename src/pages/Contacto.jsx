import { React, useRef } from 'react';
import logoInstagram from '../assets/instagram.png'
import logoLinkedin from '../assets/linkedin.png'
import logoTiktok from '../assets/tik-tok.png'
import logoWp from '../assets/whatsapp.png'
import logoGmail from '../assets/gmail.png'
import logoTel from '../assets/mensaje-de-telefono.png'
import logoface from '../assets/facebook.png'
import emailjs from '@emailjs/browser'


import '../css/contacto.css'

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_azp5b3l', 'template_j7mav5a', form.current, 'tvgcCgdF9Aj2GPnr1')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='text-light container-fluid fondo-pc'>
      <div className="row mt-3 fondo-niga">
        <div className="col text-center">
          <h2 className="">Contáctanos</h2>
          <h3 className=''>Estaríamos encantados de escuchar de usted.</h3>
          <p className='mt-5 contact'> Si tiene alguna pregunta o inquietud, no dude en contactarnos. Estamos aquí para ayudarlo a lograr sus objetivos y cumplir sus ideas.</p>
          <div className="row mt-5 text-start">


            <div className="col-5 text-center">
              <h4>Seguinos en nuestras redes</h4>
              <a href="https://www.instagram.com/hgdevelopers/" target='-blanc'><img src={logoInstagram} alt="" srcset="" className='logo-redes' /></a>
              <br></br>
              <a href="#"><img src={logoLinkedin} alt="" srcset="" className='logo-redes' /></a>
              <br></br>
              <a href="#"><img src={logoface} alt="" srcset="" className='logo-redes' /></a>

            </div>
            <div className="col-6 ">
              <h3 className='text-center mediante'>Tambien puedes contarcarnos mediante:</h3>
              <div className="row d-grid justify-content-center">
                <div className="col mt-3">
                  <span ><img src={logoWp} className='logo-contacto me-2' alt="" srcset="" /> (+54) 351 2405292</span>
                </div>
                <div className="col mt-3">
                  <span ><img src={logoWp} className='logo-contacto me-2' alt="" srcset="" />(+54) 387 6333189</span>
                </div>
                <div className="col mt-3">
                  <span ><img src={logoGmail} className='logo-contacto me-2' alt="" srcset="" />hygdevelopers@gmail.com</span>

                </div>

              </div>
            </div>
          </div>

        </div>
        <div className="d-grid justify-content-center mt-5">
          <form ref={form} onSubmit={sendEmail} className='col-12 d-grid justify-content-center '>
            <div className=" mt-4">
              <input className='transparente' type="text" name="user_name" placeholder='Nombre y Apellido' />
            </div>
            <div className="mt-4">
              <input className='transparente' type="email" name="user_email" placeholder='Email' />

            </div>

            <div className=" mt-4">
              <input className='transparente' type="tel" name="user_number" placeholder='Tu número de teléfono o celular' />

            </div>

            <div className=" mt-4">

              <textarea className='transparente' cols="45" rows="5" name="message" placeholder='Mensaje' />
            </div>

            <input type="submit" value="Enviar" className='btn btn-primary px-5 py-1 mt-4' />
          </form>

        </div>

      </div>
    </div>





  );
}

export default Contacto;
