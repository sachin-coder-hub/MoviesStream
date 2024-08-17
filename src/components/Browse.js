import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainers from "./MainContainers";
import SecondaryContainers from "./SecondaryContainers";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainers />
      <SecondaryContainers />
    </div>
  );
};

export default Browse;
