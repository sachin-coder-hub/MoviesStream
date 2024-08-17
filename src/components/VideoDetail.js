import React from "react";

const VideoDetail = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-72 px-12 absolute bg-gradient-to-tr from-black">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black px-10 py-2 rounded-lg mr-2 text-lg hover:opacity-80">
          ▶️ Play
        </button>
        <button className="bg-slate-700 text-white px-10 py-2 rounded-lg m-2 text-lg bg-opacity-60">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoDetail;
