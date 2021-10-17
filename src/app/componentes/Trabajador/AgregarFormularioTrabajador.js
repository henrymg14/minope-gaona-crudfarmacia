import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const AgregarFormularioTrabajador = ({    
    trabajador,       
    onChange,
    onSubmit
}) => {

  
    return (
        <div>
            <h3>Agregar Trabajador</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                <Col>
                        <Form.Group>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="nombres"
                                placeholder="Ingrese nombres"
                                value={trabajador.nombre}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>  
                    <Col>
                        <Form.Group>
                            <Form.Label>ApellidoPaterno:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="apellidoPaterno"
                                placeholder="Ingrese apellidoPaterno"
                                value={trabajador.apellidoPaterno}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>  
                    <Col>
                        <Form.Group>
                            <Form.Label>ApellidoM:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="apellidoMaterno"
                                placeholder="Ingrese apellidoMaterno"
                                value={trabajador.apellidoMaterno}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>             
                    <Col>
                        <Form.Group>
                            <Form.Label>TipoDocumento:</Form.Label>
                            <Form.Control 
                                size="sm"
                                as="select"
                                name="tipoDocumento"
                                value={trabajador.tipoDocumento}
                                onChange={onChange}
                                required
                            >
                                <option value="">-- Seleccionar --</option>
                                <option value="DNI">dni</option>
                                <option value="Carnet Extranjeria">carnetE</option>
                                <option value="Pasaporte">pasaporte</option>
                                
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>NumeroDocumento:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="numeroDocumento"
                                placeholder="Ingrese numeroDocumento"
                                value={trabajador.numeroDocumento}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col> 
                    <Col>
                        <Form.Group>
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="correo"
                                placeholder="Ingrese correo"
                                value={trabajador.correo}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col> 
                    <Col>
                        <Form.Group>
                            <Form.Label>Celular:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="celular"
                                placeholder="Ingrese celular"
                                value={trabajador.celular}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col> 
                </Row>            
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                            Registrar
                        </Button>
                        <Link to="/trabajadores" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default AgregarFormularioTrabajador;