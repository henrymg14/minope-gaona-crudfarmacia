import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import useFetch from '../../hooks/useFetch';
import AgregarFormularioProducto from '../../componentes/Producto/AgregarFormularioProducto';

const AgregarProducto = () => {
    const [ producto, setProducto ] = useState({
        nombre: '',
        vigencia: 1,
        idMarca: 0        
    });
   
    const listaMarca = useFetch('/marca');   
    const history = useHistory();

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
                const productoModificado = await crear('/producto', producto);
                console.log(productoModificado);
                history.push('/productos');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }
    
    return (
        <>  
             <AgregarFormularioProducto
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

export default AgregarProducto;