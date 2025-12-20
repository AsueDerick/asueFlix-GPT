import React from "react";
import { IMG_URL } from "../utils/constants";

export const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;

  return (
    <div className="min-w-[160px] md:min-w-[200px] transition-transform duration-300 ease-out hover:scale-110 hover:z-20 cursor-pointer">
      <img
        src={IMG_URL + poster_path}
        alt="movie poster"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};
