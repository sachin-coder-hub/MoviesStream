import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { CircleArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [video, setVideo] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovies();
    fetchMovieVideo();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      setMovies(json);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieVideo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);

      const filterData = json.results.filter(
        (video) =>
          video.type === "Trailer" ||
          video.type === "Official Trailer" ||
          video.type === "Teaser" ||
          video.type === "Featurette" ||
          video.type.toLowerCase().includes("trailer")
      );

      console.log(filterData);

      setVideo(json.results[0]);
      // setVideo(filterData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="w-screen">
        <div className="w-screen h-full absolute aspect-video">
          <iframe
            className="w-full h-full"
            src={"https://www.youtube.com/embed/" + video?.key + "?autoplay=1"} //
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullscreen
          ></iframe>
        </div>
      </div>
      <div className="absolute top-[0px] w-screen h-full bg-gradient-to-r from-black">
        <div
          className="cursor-pointer text-white p-4"
          onClick={() => navigate("/browse")} // Navigate back to the homepage when clicked
        >
          <CircleArrowLeft size={40} />{" "}
        </div>
        <div className="text-white absolute ml-14 top-[250px] ">
          <h1 className="font-semiboldbold text-6xl">{movies?.title}</h1>
          <p className="mt-2 w-[60%]">{movies?.overview}</p>
          <div className="flex ml-[-15px] mt-6">
            {movies?.genres?.map((genre) => {
              return (
                <p
                  key={genre?.id}
                  className="rounded-full ml-2 px-4 py-2 bg-brand-charcoal text-white"
                >
                  {genre?.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
