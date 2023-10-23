import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div>
      <h1>Menú</h1>
      <img src="./mario.png" alt="Imagen" />
      <ul>
        <li>
          <Link to="/task">Registro de Personal</Link>
        </li>
        <li>
          <Link to="/tareas">Tareas Pendientes</Link>
        </li>
      </ul>
    </div>
  );
};


