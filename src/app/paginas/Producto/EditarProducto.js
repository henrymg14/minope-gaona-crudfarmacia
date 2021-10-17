import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../servicios/api';
import useFetch from '../../hooks/useFetch';
import EditarFormularioProducto from '../../componentes/Producto/EditarFormularioProducto';


const EditarProducto = () => {
 
    const [producto, setProducto] = useState({
        nombre: '',
        vigencia: 0,      
        idMarca: 0
    });
  
    const listaMarca = useFetch('/marca');
 
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const datos = await buscar('/producto', id);
                setProducto({
                    nombre: datos.nombre,
                    vigencia: datos.vigencia,                 
                    idMarca: parseInt(datos.idMarca)                    
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchProducto();
    }, [id])

    const handleChange = (event) => {    
        const target = event.target;        
        const valor = target.type === 'checkbox' ?
                        target.checked ? 1 : 0
                    : target.value;
        const nombre = target.name;
        setProducto({
            ...producto,
            [nombre]: valor
        });
    }

    const handleChangeTypeahead = (nombre, valor) => {
        setProducto({
            ...producto,
            [nombre]: valor
        });
    }

    const buscarObjeto = (fk, valorNuevo) => {
        switch (fk) {
            case 'idMarca':
                return listaMarca.datos.find((marca) => marca.nombre === valorNuevo);
            default:
                return undefined;
        }
    }

    const handleChangeInputTypeahead = (fk, valorNuevo) => {
        const datos = buscarObjeto(fk, valorNuevo);
        const id = datos ? datos.id : -1;
        const valor = valorNuevo === '' ? 0 : id;
        handleChangeTypeahead(fk, valor);
    }

    const buscarObjetoPorID = (fk, id) => {
        switch (fk) {
            case 'idMarca':
                return listaMarca.datos.find((marca) => marca.id === id);
            default:
                return undefined;
        }
    }

    const onSelectedTypeahead = (fk, id) => {
        const datos = buscarObjetoPorID(fk, id);
        const opcionSeleccionado = datos ? Array(datos) : [];
        return opcionSeleccionado;
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const productoModificado = await modificar('/producto', id, producto);
                console.log(productoModificado);
                history.push('/productos');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <EditarFormularioProducto
                producto={producto}                
                listaMarca={listaMarca.datos}             
                onChange={handleChange}
                onSelectedTypeahead={onSelectedTypeahead}
                onChangeInputTypeahead={handleChangeInputTypeahead}
                onChangeTypeahead={handleChangeTypeahead}
                onSubmit={handleSubmit}
            /> 
        </> 
    );
}

export default EditarProducto;