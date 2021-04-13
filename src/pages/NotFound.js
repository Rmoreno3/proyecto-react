import React from 'react';
import './styles/NotFound.css';
import Img404 from '../images/error.svg';

function NotFound() {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="row contenido">
          <div className="col">
            <div>
              <img className="img-fluid img" src={Img404} alt=""/>
            </div>
            <h1>NO EH ENCONTRADO NADA!!!</h1>
            <h3>404</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
