import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Inicio = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        correo: "",
        contrasenia: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const { correo, contrasenia } = formData;
      

        if (correo === 'usuario' && contrasenia === 'contraseña') {
            alert('Inicio de sesión exitoso');
        } else {
            alert('Inicio de sesión fallido');
        }
    }
//para navegar
    const crearUsuario = () => {

        navigate('/User');

    }

    const Menu = ()=>{
        navigate('/Menu');
    }

    return (

        <div className="container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="correo">Usuario</label>
                    <input
                        type="text"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleInputChange}
                        className="form-control mb-3"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="contrasenia">Contraseña</label>
                    <input
                        type="password"
                        name="contrasenia"
                        value={formData.contrasenia}
                        onChange={handleInputChange}
                        className="form-control mb-3"
                    />
                </div>

                <button onClick={Menu} type="submit" className="btn btn-outline-primary " >Iniciar Sesión</button>
                <button onClick={crearUsuario} className="btn btn-outline-secondary">Crear Usuario</button>
            </form>
        </div>
    )
}


