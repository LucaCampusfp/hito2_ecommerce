import React from 'react';
import Tcg from '../components/PokeCard/tcg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tcg1 from '../components/PokeCard/tcg1';
import './inicio.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-white p-5 fs-7">TCG CARDS</h1>
      <Tcg />
      <div className="mazo container-fluid">
        

        <div className="row">
          <p className="w-auto">
            ¡Bienvenido a Pokémon TCG!

            Tu destino para todo lo relacionado con el juego de cartas Pokémon. Aquí encontrarás cartas, sobres, productos exclusivos y mucho más. Únete a nuestra comunidad, mantente al tanto de las últimas novedades y lleva tu colección al siguiente nivel.

            ¡Comienza a jugar y coleccionar hoy mismo!
          </p>
          <div className="col-12 col-md-6 p-5 border border-white">
            <p className="w-auto">
              ¡No te pierdas la nueva expansión de JCC Pokémon, ya a la venta: Escarlata y Púrpura-Chispas Fulgurantes!
            </p>
            <img
              src="https://tcg.pokemon.com/assets/img/news/items/es-es/sv08-news-es.jpg"
              alt="Imagen Pokémon"
              className="img-fluid rounded w-50"
            />

            <div className="text-center mt-5">
              <Link to="/sobre-nosotros">
                <button className="">
                  Comprar &gt;
                </button>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6 p-5 border border-white">
            <p className="w-auto">
              ¡No te pierdas la nueva expansión de JCC Pokémon, ya a la venta: Escarlata y Púrpura-Corona Astral!
            </p>
            <img
              src="https://tcg.pokemon.com/assets/img/news/items/es-es/sv07-news-es.jpg"
              alt="Imagen Pokémon"
              className="img-fluid rounded w-50"
            />

            <div className="text-center mt-5">
              <Link to="/sobre-nosotros">
                <button className="">
                  Comprar &gt;
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>



      {/* Inserta el componente tcg aquí */}
     
      <Tcg1 />
    </div>
  );
};

export default Home;
