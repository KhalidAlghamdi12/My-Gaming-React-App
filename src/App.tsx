import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBox from "./components/SearchBox";
import Games from "./components/Games";
import About from "./components/About";
import SearchResults from "./components/SearchResults";
import TopRatedGames from "./components/TopRatedGames";
import "./App.css";
function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=1847b165eb094898a7129fd5c47f6078&search=${query}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error searching games:", error);
    }
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/top-rated">Top Rated</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <SearchBox handleSearch={handleSearch} />

        <Routes>
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/search-results"
            element={<SearchResults results={searchResults} />}
          />
          <Route path="/top-rated" element={<TopRatedGames />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
