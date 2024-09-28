import { Play } from "lucide-react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoDetail = ({ title, overview }) => {
  const id = useSelector((store) => store?.movies?.nowPlayingMovies[0]?.id);
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3 text-white">
        {overview}
      </p>
      <div className="my-4 md:m-0">
        <Link to={"/browse/" + id}>
          <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
            <Play fill="black" className="inline mb-1" /> Play
          </button>
          <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
            <Info className="inline mb-1 " /> Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoDetail;
