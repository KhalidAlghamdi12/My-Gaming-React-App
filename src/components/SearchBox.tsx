import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBoxProps {
  handleSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ handleSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
    navigate("/search-results");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for games..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
