import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { IMG_SearchPageBg } from "../utils/constant";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={IMG_SearchPageBg} alt="Bg-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
