import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaTrabajador from '../../componentes/Trabajador/TablaTrabajador';

const VistaTrabajador = () => {
    const { datos: listaTrabajador} = useFetch('/trabajador');

    return (
        <TablaTrabajador
            listaTrabajador={listaTrabajador}
        />
    );
}

export default VistaTrabajador;
