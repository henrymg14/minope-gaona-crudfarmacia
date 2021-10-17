import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BarraNavegacion from './app/comunes/barraNavegacion/BarraNavegacion';
import VistaMarca from './app/paginas/Marca/VistaMarca';
import AgregarMarca from './app/paginas/Marca/AgregarMarca';
import EditarMarca from './app/paginas/Marca/EditarMarca'; 

import VistaProducto from './app/paginas/Producto/VistaProducto';
import AgregarProducto from './app/paginas/Producto/AgregarProducto';
import EditarProducto from './app/paginas/Producto/EditarProducto'; 

import VistaTrabajador from './app/paginas/Trabajador/VistaTrabajador';
import AgregarTrabajador from './app/paginas/Trabajador/AgregarTrabajador';
import EditarTrabajador from './app/paginas/Trabajador/EditarTrabajador'; 


import Inicio from './app/paginas/inicio/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <BarraNavegacion />
            <div className="container mt-4">
                <Switch>
                    <Route path="/inicio" exact><Inicio/></Route>
                    
                    <Route path="/marcas" exact><VistaMarca/></Route>
                    <Route path="/agregarMarca" exact><AgregarMarca/></Route>
                    <Route path="/editarMarca/:id" exact><EditarMarca/></Route>  

                    <Route path="/productos" exact><VistaProducto/></Route>
                    <Route path="/agregarProducto" exact><AgregarProducto/></Route>
                    <Route path="/editarProducto/:id" exact><EditarProducto/></Route> 

                    <Route path="/trabajadores" exact><VistaTrabajador/></Route>
                    <Route path="/agregarTrabajador" exact><AgregarTrabajador/></Route>
                    <Route path="/editarTrabajador/:id" exact><EditarTrabajador/></Route> 
                  
                    <Redirect to="/inicio"></Redirect>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;