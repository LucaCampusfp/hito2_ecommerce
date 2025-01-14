import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../icons/pokemon.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo o título */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo img-fluid" />
          <h1 className="text-center fs-8">POKÉMON TCG</h1>
        </Link>
        
        {/* Botón de hamburguesa en pantallas pequeñas */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/producto" className="nav-link text-white">Buscar cartas</Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre-nosotros" className="nav-link text-white">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
