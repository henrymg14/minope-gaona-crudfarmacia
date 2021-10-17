import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaProducto from '../../componentes/Producto/TablaProducto';
const VistaProducto = () => {
    const { datos: listaProductos } = useFetch('/producto');

    return (
        <TablaProducto
        listaProductos={listaProductos}
        />
    );
}

export default VistaProducto;