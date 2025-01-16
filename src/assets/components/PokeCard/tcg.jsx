import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './tcg.css'; // Asegúrate de tener este archivo CSS

const InfiniteCarousel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '26edeaad-51b7-4402-9ba7-c3e065c92c34';
    
    axios
      .get('https://api.pokemontcg.io/v2/cards', {
        headers: {
          'X-Api-Key': apiKey,
        },
        params: {
          pageSize: 20, // Obtener solo 20 cartas
          q: 'supertype:Pokémon',
        },
      })
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2 className="text-secondary text-white">Lista de Pokémon</h2>
      <div className="slider">
        <div className="slide-track">
          {data.concat(data).map((card) => (
            <div key={card.id} className="slide">
              {card?.images?.small ? (
                <img
                  src={card.images.small}
                  alt={card.name}
                  className="card-image"
                />
              ) : (
                <p>No hay imagen disponible.</p>
              )}
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
  );
};

export default InfiniteCarousel;
