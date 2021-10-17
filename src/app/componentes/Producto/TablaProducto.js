import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaProducto = ({ listaProductos }) => {
    const encabezado = () => {
        return (
            <tr>
                
                <th>Nombre</th>
                <th>Vigencia</th>
                <th>idMarca</th>   
                <th>accion</th>
            </tr>
        );
    }

    const celdas = () => {
        
        return (
            listaProductos.map((producto) => (
                <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>{producto.vigencia}</td>
                    <td>{producto.idMarca}</td>
                    <td>
                        <Link to={"/editarProducto/" + producto.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Productos</h3>
            <Link to="/agregarProducto" className="btn btn-primary mb-2">
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

export default TablaProducto;