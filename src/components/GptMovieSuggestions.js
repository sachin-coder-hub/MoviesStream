import React from "react";
import { useSelector } from "react-redux";
import MovieCategory from "./MovieCategory";

const GptMovieSuggestions = () => {
  const { searchResults, searchKey } = useSelector((store) => store.gpt);
  if (!searchResults) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-70">
      <h1>
        <MovieCategory title={searchKey} movies={searchResults} />
      </h1>
    </div>
  );
};

export default GptMovieSuggestions;
