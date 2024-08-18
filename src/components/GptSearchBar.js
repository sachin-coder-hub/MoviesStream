import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
        <input
          className="col-span-9 py-2 px-4 m-4 rounded-md"
          type="text"
          placeholder="What would you like to watch today?"
        ></input>
        <button className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg">
          Find
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
