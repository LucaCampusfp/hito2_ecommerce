import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../icons/pokemon.svg';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <img
              src={logo}
              alt="logo"
              className="logo img-fluid"
              style={{ maxWidth: "50px", height: "auto" }}
            />
            <p className="mt-2">© 2025 Pokémon Fans. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
