import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const url = 'http://localhost:4000/api/task';

export const Semana1 = () => {



  const [boolEdit, setBoolEdit] = useState(false);
  const [idEdit, setIdeEdit] = useState(0);

  const [dataForm, setDataForm] = useState({
    nombre: "",
    edad: "0",
    fecha_ingreso: "",
  });

  const formChange = (event) => {
    const { name, value } = event.target;
    setDataForm(previo => ({ ...previo, [name]: value }));
  };

  const formSubmit = async (event) => {
    event.preventDefault();

    if (boolEdit) {

      await editData();
    } else {
      await createData();
    }


    setDataForm({
      nombre: "",
      edad: "0",
      fecha_ingreso: "",
    });
    setBoolEdit(false);
    setIdeEdit(0);
    getDataTask();
  };
  // Informacion de el reporte

  const [getTasks, setTasks] = useState([]);

  const getDataTask = async () => {
    const result = await fetch(url);
    const resultData = await result.json();
    setTasks(resultData);
    console.log(result);//para observar lo que pasa


  }

  //crear 
  const createData = async () => {
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const resultJson = await result.json();
    console.log(resultJson);

  }

  //delete para eliminar datos
  const deleteData = async (id = 0) => {
    const result = await fetch(url + "/" + id, {
      method: "DELETE"

    });
    const resultData = await result.json();
    getDataTask();

  }

  useEffect(() => {

    getDataTask();
  }, []

  )

  //Edit para editar los datos 

  const setDataFormEdit = (task) => {
    setBoolEdit(true);
    setIdeEdit(task.id);
    setDataForm({

      nombre: task.nombre,
      edad: task.edad,
      fecha_ingreso: task.fecha_ingreso
    });
  }

  const editData = async (task) => {
    try {
      const result = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const resultData = await result.json();
      console.log(resultData);
      getDataTask();
    } catch (error) {
      console.error('Error editing data:', error);
    }
  }

  const Menu = ()=>{
    navigate('/Menu');
}

  return (
    <div className="container">
      <form onSubmit={formSubmit}>
        <h1>REGISTRO DE EL PERSONAL</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={dataForm.nombre}
            name="nombre"
            onChange={formChange}
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Edad"
            value={dataForm.edad}
            name="edad"
            onChange={formChange}
          />
          <label htmlFor="floatingPassword">Edad</label>
        </div>

        <div className="form-floating md-3">
          <input
            type="date"
            className="form-control"
            placeholder="Fecha"
            value={dataForm.fecha_ingreso}
            name="fecha_ingreso"
            onChange={formChange}
          />
          <label htmlFor="floatingPassword">Fecha</label>
        </div>
        <button type="submit" className="btn btn-primary">
          {boolEdit ? 'Edit' : 'Create'} </button>
      </form>
      <h2>Listado</h2>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <td>Id</td>
            <td>Nombre</td>
            <td>Edad</td>
            <td>Fecha</td>
            <td colSpan={4}>Actions</td>
          </tr>
        </thead>
        <tbody>
          {getTasks.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.nombre}</td>
              <td>{x.edad}</td>
              <td>{x.fecha_ingreso}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={() => setDataFormEdit(x)}
                >
                  Edit
                </button>
              </td>
              <td>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => deleteData(x.id)}
                >
                  Delete

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <Link to="/Menu">Menu</Link>
    </div>
  );
};
