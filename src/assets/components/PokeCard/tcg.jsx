import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tcg = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '26edeaad-51b7-4402-9ba7-c3e065c92c34';
    
    axios
      .get('https://api.pokemontcg.io/v2/cards', {
        headers: {
          'X-Api-Key': apiKey, // Incluimos la API Key
        },
        params: {
          pageSize: 20, // Obtener solo 20 cartas
          q: 'supertype:Pokémon', // Filtramos para obtener solo cartas de Pokémon
        },
      })
      .then((response) => {
        console.log(response.data); // Inspecciona los datos en la consola
        setData(response.data.data); // Guardamos las cartas obtenidas
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
      <h2>Lista de Pokémon</h2>
      <div className="card-grid">
        {data.map((card) => (
          <div key={card.id} className="card-item">
            <h3 class="w-5 text-center mx-auto fs-6">{card.name}</h3>
            {card?.images?.small ? (
              <img src={card.images.small} alt={card.name} className="card-image" />
            ) : (
              <p>No hay imagen disponible.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tcg;
