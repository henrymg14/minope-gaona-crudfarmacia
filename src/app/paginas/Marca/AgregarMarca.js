import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import AgregarFormularioMarca from '../../componentes/Marca/AgregarFormularioMarca';

const AgregarMarca = () => {
    const [ marca, setMarca ] = useState({
        nombre: '',
        vigencia: ''
    });

    const history = useHistory();

    const handleChange = (event) => {    
        const target = event.target;        
        const valor = target.type === 'checkbox' ?
                        target.checked ? 1 : 0
                    : target.value;
        const nombre = target.name;
        setMarca({
            ...marca,
            [nombre]: valor
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const nuevoMarca = await crear('/marca', marca);
                console.log(nuevoMarca);
                history.push('/marcas');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return (
        <>  
            <AgregarFormularioMarca
                marca={marca}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AgregarMarca;