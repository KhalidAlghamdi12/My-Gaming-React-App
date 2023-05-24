import React, { useEffect, useState } from "react";

const TopRatedGames: React.FC = () => {
  const [topRatedGames, setTopRatedGames] = useState([]);

  useEffect(() => {
    const fetchTopRatedGames = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=1847b165eb094898a7129fd5c47f6078&metacritic=85,100&ordering=-rating&page_size=10"
        );
        const data = await response.json();
        setTopRatedGames(data.results);
      } catch (error) {
        console.error("Error fetching top-rated games:", error);
      }
    };

    fetchTopRatedGames();
  }, []);

  return (
    <div>
      <h2>Top Rated Games</h2>
      <div className="games">
        {topRatedGames.map((game: any) => (
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

export default TopRatedGames;
