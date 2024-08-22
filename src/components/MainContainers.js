import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import VideoDetail from "./VideoDetail";
import { useSelector } from "react-redux";

const MainContainers = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[35%] bg-black md:pt-0">
      <VideoDetail title={original_title} overview={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
};

export default MainContainers;
