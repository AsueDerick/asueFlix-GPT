import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="relative z-20 mt-[70vh] bg-black">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Popular Movies" movies={movies?.popularMovies} />
      <MovieList title="Trending Movies" movies={movies?.topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
      
    </div>
  );
};

export default SecondaryContainer;
