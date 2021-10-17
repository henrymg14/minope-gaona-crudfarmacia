import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../servicios/api';
import EditarFormularioMarca from '../../componentes/Marca/EditarFormularioMarca';

const EditarMarca = () => {
    const [marca, setMarca] = useState({
        nombre: '',
        vigencia: '',
    });

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchMarca = async () => {
            try {
                const datos = await buscar('/marca', id);
                setMarca({
                    nombre: datos.nombre,
                    vigencia: datos.vigencia
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchMarca();
    }, [id])

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
                const marcaModificada = await modificar('/marca', id, marca);
                console.log(marcaModificada);
                history.push('/marcas');
            }           
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <EditarFormularioMarca
                marca={marca}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditarMarca;