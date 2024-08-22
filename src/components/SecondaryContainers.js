import React from "react";
import MovieCategory from "./MovieCategory";
import { useSelector } from "react-redux";

const SecondaryContainers = () => {
  const moviesList = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 relative z-20">
        <MovieCategory
          title={"Now Playing"}
          movies={moviesList.nowPlayingMovies}
        />
        <MovieCategory
          title={"Top Rated Movies"}
          movies={moviesList.topRatedMovies}
        />
        <MovieCategory
          title={"Most Popular"}
          movies={moviesList.popularMovies}
        />
        <MovieCategory
          title={"Upcoming Movies"}
          movies={moviesList.upComingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainers;
