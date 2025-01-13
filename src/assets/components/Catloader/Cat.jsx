import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cat = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2')
      .then((response) => {
        setData(response.data); // response.data es un array con los hechos
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
    <div>
      <h2>Datos del Gato</h2>
      <ul>
        {/* Mapear los datos de los hechos sobre gatos */}
        {data && data.map((fact, index) => (
          <li key={index}>{fact.text}</li> // Mostrar el hecho sobre el gato
        ))}
      </ul>
    </div>
  );
};

export default Cat;
