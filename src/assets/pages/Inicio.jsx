

import React from 'react';
import Tcg from '../components/PokeCard/tcg'; 



const Home = () => {
  return (
    <div>
   <h1 className="text-center text-white p-5 fs-7">TCG CARDS</h1>

   
         {/* Inserta el componente tcg aquí */}
         <Tcg />

         
    </div>
  );
};

export default Home;
