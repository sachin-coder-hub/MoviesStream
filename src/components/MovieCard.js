import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  if (!posterPath) return null;
  if (!id) return null;
  return (
    <div className="w-48 p-3 transform transition-transform duration-300 hover:scale-110">
      <Link to={"/browse/" + id}>
        <img
          src={IMG_CDN_URL + posterPath}
          alt="Movie Card"
          className="rounded-md shadow-2xl"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
