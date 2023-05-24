import React from "react";

interface SearchResultsProps {
  results: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        <div className="games">
          {results.map((game: any) => (
            <div className="game" key={game.id}>
              <img src={game.background_image} alt={game.name} />
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No game found</p>
      )}
    </div>
  );
};

export default SearchResults;
