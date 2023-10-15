import React, { useEffect, useState } from 'react';

const apiUrl = 'http://localhost:4000/api/task';

export const Semana1 = () => {
  const [tasks, setTasks] = useState([]);
  const [taskForm, setTaskForm] = useState({
    nombre: '',
    edad: '',
    fecha_ingreso: '',
    finish: false
  });

  useEffect(() => {
    getDataTask();
  }, []);

  const getDataTask = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/task`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createTask = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskForm),
      });

      const data = await response.json();
      console.log('Created task:', data);

      // Refresh task data
      getDataTask();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const formChange = (event) => {
    const { name, value } = event.target;
    setTaskForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    
    createTask();
    setTaskForm({
      nombre: '',
      edad: '',
      fecha_ingreso: '',
      finish: false
    });
  };

  return (
    <div className="container">
      <h1>REGISTRO PERSONAL</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            NOMBRE
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={taskForm.nombre}
            onChange={formChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            EDAD
          </label>
          <input
            type="number"
            className="form-control"
            id="edad"
            name="edad"
            value={taskForm.edad}
            onChange={formChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha_ingreso" className="form-label">
            FECHA  DE INGRESO
          </label>
          <input
            type="date"
            className="form-control"
            id="fecha_ingreso"
            name="fecha_ingreso"
            value={taskForm.fecha_ingreso}
            onChange={formChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Crear
        </button>
      </form>
      {/* Render your task list */}
      <h2>LISTADO </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Fecha de ingreso</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.nombre}</td>
              <td>{task.edad}</td>
              <td>{task.fecha_ingreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
