import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
        className="rounded-md shadow-2xl"
      />
    </div>
  );
};

export default MovieCard;
