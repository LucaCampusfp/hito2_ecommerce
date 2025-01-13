import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Doge = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
   
        setData(response.data);
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
      <h2>Datos del Breed: {data.message.split('/')[4]}</h2>
      <img src={data.message} alt="Perro aleatorio" className="img-cuadrada" />
      </div> 
  );
};

export default Doge;

