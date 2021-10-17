import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import useFetch from '../../hooks/useFetch';
import AgregarFormularioTrabajador from '../../componentes/Trabajador/AgregarFormularioTrabajador';
const EditarTrabajador = () => {
    const [trabajador, setTrabajador] = useState({
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        tipoDocumento: '',
        numeroDocumento: '',
        correo: '',
        celular: ''       
    });

  
    const history = useHistory();

       
    const handleChange = (event) => {   
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setTrabajador({
            ...trabajador,
            [nombre]: valor
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const nuevoTrabajador = await crear('/trabajador', trabajador);
                console.log(nuevoTrabajador);                
                history.push('/trabajadores');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al registrar");
        }
    }

    return (
        <>
            <AgregarFormularioTrabajador
                trabajador={trabajador}
                onChange={handleChange}
                onSubmit={handleSubmit}
            /> 
        </>
    );
}

export default EditarTrabajador;