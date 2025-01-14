
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar/Navbar';  // Importa el Navbar
import Inicio from './assets/pages/Inicio';
         
import Producto from './assets/pages/Buscar';    
import SobreNosotros from './assets/pages/SobreNosotros';  // Importa la página Sobre Nosotros
import React from 'react';


const App = () => {
  
  
  return (
    
    <Router>

      <Navbar /> {/* El Navbar se muestra siempre */}
      <Routes>
        <Route path="/" element={<Inicio />} />  {/* Ruta para Home */}
        <Route path="/producto" element={<Producto />} />  {/* Ruta para Alcohol */}
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />  {/* Ruta para Sobre Nosotros */}
      </Routes>
    </Router>
  );
};
//https://pokemontcg.io/

export default App;

