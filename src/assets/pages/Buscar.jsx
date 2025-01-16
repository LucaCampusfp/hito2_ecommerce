import React from 'react';
import Search from '../components/SearchBar/search'; 
import Tcg from '../components/PokeCard/tcg';
import './inicio.css'


// Asegúrate de usar la ruta correcta al archivo

const Producto = () => {
  return (
    <div>
      <Search/>
      <Tcg />

    </div>
  );
};

export default Producto;
