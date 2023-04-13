import React from "react";

const Movie = ({ items }) => {
  console.log("items====>", items);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        alt={items?.title}
        src={`https://image.tmdb.org/t/p/w500/${items.backdrop_path}`}
      />
      <div className="absolute top-0 left-0 h-full  font-bold w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal font-bold text-white text-xs md:text-sm h-full flex justify-center items-center text-center ">
          {items?.title}
        </p>
      </div>
    </div>
  );
};

export default Movie;
