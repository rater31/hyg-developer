import React from 'react';

const Contacto = () => {
    return (
        <div>
            <h1 className="text-center">Contactenos</h1>
            <form className="row g-3 needs-validation d-grid justify-content-center" noValidate>
        <div className="col-md-12">
          <label htmlFor="validationCustom01" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="validationCustom01" defaultValue="Nombre" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationCustom02" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="validationCustom02" defaultValue="Apellido" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationCustomUsername" className="form-label">Usuario de Instagram</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="validationCustomUsername"  aria-describedby="inputGroupPrepend" required />
            <div className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationCustom03" className="form-label">Email de Contacto</label>
          <input type="email" className="form-control" id="validationCustom03" defaultValue="Email" required />
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        
        <div className="col-md-12">
          <label htmlFor="validationCustom05" className="form-label">Numero de Telefono</label>
          <input type="tel" className="form-control" id="validationCustom05" required />
          <div className="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Enviar</button>
        </div>
      </form>

        </div>

        
    );
}

export default Contacto;
