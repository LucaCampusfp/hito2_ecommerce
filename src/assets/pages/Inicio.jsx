

import React from 'react';
import Tcg from '../components/PokeCard/tcg'; 
import Footer from "./components/Footer";
import logo from "./assets/logo.png";

const Home = () => {
  return (
    <div>
   <h1 className="text-center text-white p-5 fs-7">TCG CARDS</h1>

   
         {/* Inserta el componente tcg aquí */}
         <Tcg />

               <Footer/>
    </div>
  );
};

export default Home;
