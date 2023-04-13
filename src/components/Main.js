import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Request";

function Main() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestToprated).then((response) => {
      // console.log("Response===>", response);
      setMovies(response?.data?.results);
    });
  }, []);

  const truncateToString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full text-white">
        <div className="absolute w-full h-[500px] bg-gradient-to-l from-black">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movies?.title}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold pb-4">
              {movie?.title}
            </h1>
            <div my-4>
              <button className="border bg-gray-300  text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white  border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released:{movie?.release_date}
            </p>
            <p className="w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
              {truncateToString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
