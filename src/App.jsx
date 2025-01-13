
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar/Navbar';  // Importa el Navbar
import Home from './assets/pages/Home';          // Importa la página Home
import Producto from './assets/pages/Producto';    
import SobreNosotros from './assets/pages/SobreNosotros';  // Importa la página Sobre Nosotros
import React from 'react';


const App = () => {
  
  
  return (
    <Router>
      <Navbar /> {/* El Navbar se muestra siempre */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Ruta para Home */}
        <Route path="/producto" element={<Producto />} />  {/* Ruta para Alcohol */}
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />  {/* Ruta para Sobre Nosotros */}
      </Routes>
    </Router>
  );
};

export default App;

