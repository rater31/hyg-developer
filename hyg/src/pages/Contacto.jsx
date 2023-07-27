import React from 'react';
import logoInstagram from '../assets/instagram.png'
import logoLinkedin from '../assets/linkedin.png'
import logoTiktok from '../assets/tik-tok.png'
import logoWp from '../assets/whatsapp.png'
import logoGmail from '../assets/gmail.png'
import logoTel from '../assets/mensaje-de-telefono.png'

import '../css/contacto.css'

const Contacto = () => {
  return (
    <div className='text-light container-fluid fondo-pc'>
      <div className="row mt-5 fondo-niga">
        <div className="col-6 text-center">
          <h3 className=''>Nos encantaría conocerte mejor</h3>
          <h1 className="">Contáctanos</h1>
          <p className='mt-5 contact'>Estamos encantados de escuchar de usted. Si tiene alguna pregunta o inquietud, no dude en contactarnos. Estamos aquí para ayudarlo a lograr sus objetivos y cumplir sus ideas.</p>
          <div className="row mt-5 text-start">
            <div className="col-6 ">
              <h3 className='text-start mediante'>Tambien puedes contarcarnos mediante:</h3>
              <div className="row">
                <div className="col-12 mt-3">
                  <span ><img src={logoWp} className='logo-contacto me-2' alt="" srcset="" /> (+54)123 123123</span>
                </div>
                <div className="col-12 mt-3">
                  <span ><img src={logoTel} className='logo-contacto me-2' alt="" srcset="" />(+54)123 123123</span>
                </div>
                <div className="col-12 mt-3">
                <span ><img src={logoGmail} className='logo-contacto me-2' alt="" srcset="" />correo@correo.com</span>

                </div>

              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="line3"></div>
            </div>
            <div className="col-5 text-center">
              <h4>Seguinos en nuestras redes</h4>
              <a href="#"><img src={logoInstagram} alt="" srcset="" className='logo-redes' /></a>
              <br></br>
              <a href="#"><img src={logoLinkedin} alt="" srcset="" className='logo-redes' /></a>
              <br></br>
              <a href="#"><img src={logoTiktok} alt="" srcset="" className='logo-redes' /></a>

            </div>
          </div>

        </div>

        <div className="col-6  ">
          <form className="row g-3 needs-validation  justify-content-center" noValidate>
            <div className="col-7 mt-4">
              {/* <label htmlFor="validationCustom01" className="form-label">Nombre</label> */}
              <input type="text" className="form-control" id="validationCustom01" placeholder="Nombre y Apellido" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            {/* <div className="col-7 mt-4">
              <label htmlFor="validationCustom02" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Apellido" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div> */}
            <div className="col-7 mt-4">
              {/* <label htmlFor="validationCustomUsername" className="form-label">Usuario de Instagram</label> */}
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder='Tu.instagram' required />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div className="col-7 mt-4">
              {/* <label htmlFor="validationCustom03" className="form-label">Email de Contacto</label> */}
              <input type="email" className="form-control" id="validationCustom03" placeholder="Email" required />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>

            <div className="col-7 mt-4">
              {/* <label htmlFor="validationCustom05" className="form-label">Número de Telefono o Celular</label> */}
              <input type="tel" className="form-control" id="validationCustom05" placeholder='Tu Número de Teléfono o Celular' required />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-7 mt-4">
              {/* <label htmlFor="validationCustom05" className="form-label">Dejenos su mensaje</label> */}
              <textarea className='form-label' name="" id="" cols="45" rows="5" placeholder='Mensaje'></textarea>
            </div>
            <div className="col-7 mt-4 text-center">
              <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>

    </div>


  );
}

export default Contacto;
