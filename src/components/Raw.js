import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";
// import { mdChevronLeft, mdChevronRight } from "react-icons";

const Raw = ({ title, fetchURl }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURl).then((response) => {
      setmovies(response.data.results);
    });
  }, [fetchURl]);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((items, id) => (
            <Movie items={items} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Raw;
