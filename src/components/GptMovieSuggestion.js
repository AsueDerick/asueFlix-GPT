import React from "react";
import { useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";

export const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  if (!movieNames || !movieResults || movieResults.length === 0) return null;

  return (
    <div className="bg-black px-8 py-6">
      <h1 className="text-2xl font-bold text-white mb-4">
        AI Movie Recommendations
      </h1>

      {/* Horizontal Scroll */}
      <div className="flex overflow-x-scroll scrollbar-hide gap-4">
        {movieResults.map((movie) =>
          movie?.poster_path ? (
            <div
              key={movie.id}
              className="min-w-[160px] hover:scale-110 transition-transform duration-300"
            >
              <img
                src={IMG_URL + movie.poster_path}
                alt={movie.title}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-semibold transition">
                {movie.title}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
