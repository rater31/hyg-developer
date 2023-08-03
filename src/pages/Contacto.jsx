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

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
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
        <div className="row mt-5">
          {/* <div className="col ">
          <form className="row  d-grid g-3 needs-validation  justify-content-center" noValidate>
            <div className="col-12 mt-4">
            
              <input type="text" className=" transparente " id="validationCustom01" placeholder="Nombre y Apellido" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
        
            <div className="col-12 mt-4">
              
              <div className="input-group has-validation">
                <input type="text" className="transparente" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder='Tu.instagram' required />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div className="col-12 mt-4">

              <input type="email" className=" transparente" id="validationCustom03" placeholder="Email" required />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>

            <div className="col-12 mt-4">
              
              <input type="tel" className=" transparente" id="validationCustom05" placeholder='Tu Número de Teléfono o Celular' required />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-12 mt-4">
              
              <textarea className='form-label transparente' name="" id="" cols="45" rows="5" placeholder='Mensaje'></textarea>
            </div>
            <div className="col-12 mt-4 text-center">
              <button className="btn btn-primary px-5 py-1" type="submit">Enviar</button>
            </div>
          </form>
        </div> */}

          <form ref={form} onSubmit={sendEmail} className='row d-grid justify-content-center'>
            <div className="col-12  mt-4">
              <input className='transparente' type="text" name="user_name" placeholder='Nombre y Apellido' />
            </div>
            <div className="col-12 mt-4">
              <input className='transparente' type="email" name="user_email" placeholder='Email' />

            </div>

            <div className="col-12 mt-4">
              <input className='transparente' type="tel" name="user_number" placeholder='Tu número de teléfono o celular' />

            </div>

            <div className="col-12 mt-4">

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
