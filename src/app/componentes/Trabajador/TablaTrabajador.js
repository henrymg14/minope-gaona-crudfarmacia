import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaTrabajador = ({ listaTrabajador }) => {
    const encabezado = () => {
        return (
            <tr>
                
                <th>Nombre</th>
                <th>Apellido</th>
                <th>ApellidoM</th>
                <th>TipoDocumento</th>
                <th>NumeroDocumento</th>           
                <th>Correo</th>
                <th>Celular</th>
                <th>Opi</th>
            </tr>
        );
    }

    const celdas = () => {
        return (
            listaTrabajador.map((trabajador) => (
                <tr key={trabajador.id}>
                    <td>{trabajador.nombres}</td>
                    <td>{trabajador.apellidoPaterno}</td>
                    <td>{trabajador.apellidoMaterno}</td>
                    <td>{trabajador.tipoDocumento}</td>
                    <td>{trabajador.numeroDocumento}</td>
                    <td>{trabajador.correo}</td>
                    <td>{trabajador.celular}</td>
                    <td>
                        <Link to={"/editarTrabajador/" + trabajador.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Trabajador</h3>
            <Link to="/agregarTrabajador" className="btn btn-primary mb-2">
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

export default TablaTrabajador;