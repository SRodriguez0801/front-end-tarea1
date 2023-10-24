import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center align-items-center">Menú</h1>
      <div className="d-flex justify-content-center align-items-center">
        <img src="./mario.png" alt="Imagen" className="img-fluid" />
      </div>
      <ul className="list-group mt-3">
        <li className="list-group-item">
          <Link to="/task" className="text-decoration-none">Registro de Personal</Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none">Inicio</Link>
        </li>
      </ul>
    </div>
  );
};



