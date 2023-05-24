import React, { useEffect, useState } from "react";

const Games: React.FC = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=1847b165eb094898a7129fd5c47f6078" // that's my RAWG API connected to my steam account
        );
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h2>Games :</h2>
      <div className="games">
        {games.map((game: any) => (
          <div className="game" key={game.id}>
            <img src={game.background_image} alt={game.name} />
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
