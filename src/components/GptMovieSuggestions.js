import React from "react";
import { useSelector } from "react-redux";
import MovieCategory from "./MovieCategory";

const GptMovieSuggestions = () => {
  const { searchResults, searchKey } = useSelector((store) => store.gpt);
  if (!searchResults) return;
  else if (searchResults.length === 0) {
    return (
      <div>
        <h1 className="text-white text-xs md:text-xl xl:text-4xl font-bold text-center mt-10 xl:mt-20">
          Sorry, I could'nt suggest anything that matches your search. <br />
          Please try again !!
        </h1>
      </div>
    );
  } else
    return (
      <div className="p-4 m-4 bg-black bg-opacity-70">
        <h1>
          <MovieCategory title={searchKey} movies={searchResults} />
        </h1>
      </div>
    );
};

export default GptMovieSuggestions;
