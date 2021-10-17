import React from 'react';
import TablaEUsuario from 'componentes/Usuario/TablaEUsuario';

const VistaUsuario = () => {
    const { datos: listaUsuario} = useFetch('/editorial');

    return (
        <TablaEUsuario
            listaUsuario={listaUsuario}
        />
    );
}

export default VistaUsuario;