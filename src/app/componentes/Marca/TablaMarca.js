import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaMarca = ({ listaMarca }) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Nombre</th>
                <th>Vigencia</th>
                <th>opcion</th>
            </tr>
        );
    }

    const celdas = () => {
    
        return (
            listaMarca.map((marca) => (
                <tr key={marca.id}>
                    <td>{marca.nombre}</td>
                    <td>{marca.vigencia}</td>
                    <td>
                        <Link to={"/editarMarca/" + marca.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Marcas</h3>
            <Link to="/agregarMarca" className="btn btn-primary mb-2">
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

export default TablaMarca;