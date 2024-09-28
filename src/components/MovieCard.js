import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4 p-4 transform transition-transform duration-300 hover:scale-105">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
        className="rounded-md shadow-2xl"
      />
    </div>
  );
};

export default MovieCard;
