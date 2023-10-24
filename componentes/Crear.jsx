import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../componentes/CSS/Crear.css';

const url = 'http://localhost:4000/api/Usuarios/User';

export const Crear = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        correo: '',
        contrasenia: '',
        nombre: '',
        apellido: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const resultJson = await result.json();
        console.log(resultJson);
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">
                        Correo:
                    </label>
                    <input
                        type="text"
                        name="correo"
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contrasenia" className="form-label">
                        Contraseña:
                    </label>
                    <input
                        type="password"
                        name="contrasenia"
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">
                        Apellido:
                    </label>
                    <input
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-outline-secondary">
                    Registrarse
                </button>
            </form>
            <Link to="/Menu">Menu</Link>
        </div>
    );
};
