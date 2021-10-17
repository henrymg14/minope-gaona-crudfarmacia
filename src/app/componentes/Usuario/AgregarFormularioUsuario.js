import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const AgregarFormularioEditorial = ({
    usuario,
    listaTrabajador,
    onChange,
    onSelectedTypeahead,
    onChangeInputTypeahead,
    onChangeTypeahead,   
    onSubmit

}) => {

    return (
        <div>
            <h3>Agregar Usuario</h3>
            <Form onSubmit={onSubmit}>
            <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>NombreU:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                name="nombreU"
                                placeholder="Ingrese nombreU"
                                value={usuario.nombreU}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>ClaveU:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                name="claveU"
                                placeholder="Ingrese claveU"
                                value={usuario.claveU}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>VigenciaU:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                name="vigenciaU"
                                placeholder="Ingrese vigenciaU"
                                value={usuario.vigenciaU}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Trabajador:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                placeholder="Elige una opción"
                                options={listaTrabajador}
                                labelKey={opcion => String(opcion.nombre)}
                                selected={onSelectedTypeahead('idTrabajador', libro.idTrabajador)}
                                onInputChange={(valorNuevo) =>
                                    onChangeInputTypeahead('idTrabajador', valorNuevo)}
                                onChange={(valorNuevo) => valorNuevo.length > 0 &&
                                    onChangeTypeahead('idTrabajador', valorNuevo[0].id)}
                                inputProps = {{ required: true }}
                            />
                        </Form.Group>
                    </Col>                         
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                            Registrar
                        </Button>
                        <Link to="/usuarios" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default AgregarFormularioEditorial;