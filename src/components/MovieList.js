import React, { useRef } from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  const rowRef = useRef(null);

  if (!movies || movies.length === 0) return null;

  const scrollLeft = () => {
    rowRef.current.scrollLeft -= 800;
  };

  const scrollRight = () => {
    rowRef.current.scrollLeft += 800;
  };

  return (
    <div className="relative px-6 py-6 bg-black group">
      {/* Title */}
      <h1 className="text-lg md:text-xl font-semibold text-white mb-4">
        {title}
      </h1>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="hidden group-hover:flex absolute left-2 top-1/2 z-40 -translate-y-1/2 bg-black/60 hover:bg-black text-white w-12 h-12 rounded-full items-center justify-center"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="hidden group-hover:flex absolute right-2 top-1/2 z-40 -translate-y-1/2 bg-black/60 hover:bg-black text-white w-12 h-12 rounded-full items-center justify-center"
      >
        ❯
      </button>

      {/* Movie Row */}
      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};
