import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import VideoDetail from "./VideoDetail";
import { useSelector } from "react-redux";

const MainContainers = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[3];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoDetail title={original_title} overview={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
};

export default MainContainers;
