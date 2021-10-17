import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';


const TablaEUsuario = ({ listaUsuario }) => {
    const encabezado = () => {
        return (
            <tr>                
                <th>NombreU</th>
                <th>ClaveU</th>
                <th>VigenciaU</th>
                <th>Trabajador</th>  
            </tr>
        );
    }
 

    const celdas = () => {
        
        return (
            listaUsuario.map((usuario) => (
                <tr key={usuario.id}>                 
                    <td>{usuario.nombreU}</td>
                    <td>{usuario.claveU}</td>
                    <td>{usuario.vigenciaU}</td>
                    <td>{usuario.nombreTrabajador}</td>
                    <td>
                        <Link to={"/editarEditorial/" + usuario.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Usuario</h3>
            <Link to="/agregarUsuario" className="btn btn-primary mb-2">
                Agregar
            </Link>
            <Table responsive>
                <thead className="bg-dark text-light">
                    { encabezado() }
                </thead>
                <tbody>
                    { celdas() }
                </tbody>
            </Table>
        </>
    );
}

export default TablaEUsuario;