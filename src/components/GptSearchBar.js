import React, { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addSearchResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(" ");
  const dispatch = useDispatch();
  const handleGptsearchClick = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(
      addSearchResults({ searchResults: json.results, searchKey: movie })
    );
  };
  return (
    <div className="pt-[50%] flex justify-center md:pt-[10%] p-0">
      <form
        className="w-full m-2 md:w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 py-2 px-4 m-4 rounded-md"
          type="text"
          placeholder="What would you like to watch today?"
        ></input>
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={() => handleGptsearchClick(searchText.current.value)}
        >
          Find
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
