import React, { useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieCategory = ({ title, movies }) => {
  const scrollRef = useRef(null);

  // Add event listener for the scroll container
  useEffect(() => {
    const scrollElement = scrollRef.current;

    const handleScroll = (e) => {
      if (scrollElement && e.deltaY !== 0) {
        e.preventDefault(); // Prevent the default page scroll
        scrollElement.scrollLeft += e.deltaY * 0.5; // Scroll horizontally
      }
    };

    // Add wheel event listener
    if (scrollElement) {
      scrollElement.addEventListener("wheel", handleScroll, { passive: false });
    }

    // Clean up event listener on component unmount
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className="px-6 py-4">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll scrollbar-hide"
        ref={scrollRef}
        style={{ overflowY: "hidden" }} // Disable vertical scrolling inside the container
      >
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCategory;
