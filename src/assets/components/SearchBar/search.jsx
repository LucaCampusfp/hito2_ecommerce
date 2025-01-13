import React, { useState } from 'react';
import axios from 'axios';
import './search.css';

const Card = () => {
    const [search, setSearch] = useState(''); // Estado para el nombre de la carta
    const [data, setData] = useState([]); // Estado para almacenar múltiples cartas
    const [loading, setLoading] = useState(false); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    const apiKey = '26edeaad-51b7-4402-9ba7-c3e065c92c34';

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        axios
            .get(`https://api.pokemontcg.io/v2/cards`, {
                headers: {
                    'X-Api-Key': apiKey
                },
                params: {
                    q: `name:"${search}"`, // Filtro para buscar por nombre
                    pageSize: 10 // Establecemos el número de resultados que queremos (por ejemplo, 10 cartas)
                }
            })
            .then((response) => {
                const cards = response.data.data; // Obtenemos las cartas de la respuesta
                if (cards.length > 0) {
                    setData(cards); // Guardamos todas las cartas encontradas en lugar de solo una
                } else {
                    setData([]); // Si no hay resultados, limpiamos los datos
                }
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    };

    return (
        <div className="card-container">
            <h1>Busca tu carta Pokémon</h1>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Nombre de la carta"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    Buscar
                </button>
            </form>

            {loading && <div>Cargando...</div>}
            {error && <div className="error-message">Error: {error}</div>}

            {data.length > 0 ? (
                <div className="cards-list">
                    {data.map((card, index) => (
                        <div key={index} className="card-item">
                            <h2>{card.name}</h2>
                            <p>{card.set.name}</p>
                            {card.images && card.images.large ? (
                                <img
                                    src={card.images.large}
                                    alt={card.name}
                                    className="card-image"
                                />
                            ) : (
                                <p>No hay imagen disponible.</p>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <div>No se encontraron cartas con ese nombre.</div>
            )}
        </div>
    );
};

export default Card;
