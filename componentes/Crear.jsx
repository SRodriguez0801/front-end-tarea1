import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import './App.css';
const url = 'http://localhost:4000/api/Usuarios/User';

export const Crear = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        correo: "",
        contrasenia: "",
        nombre: "",
        apellido: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const result = await fetch(url, {
            method: "POST",
            body: JSON.stringify(formData), 
            headers: {
                'Content-Type': 'application/json', 
            }
        });

        const resultJson = await result.json();
        console.log(resultJson);
        navigate("/");
    }

    return (
        <div className="Container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}> {}
                <div className="form-group mb-3">
                    <label htmlFor="correo">Correo:</label>
                    <input
                        type="text"
                        name="correo"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="contrasenia">Contraseña:</label>
                    <input
                        type="password"
                        name="contrasenia"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-outline-secondary">Registrarse</button>
            </form>

            <Link to="/Menu">Menu</Link>
        </div>
    );
}
