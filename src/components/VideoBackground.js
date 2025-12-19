import React, { useEffect, useState } from "react";
import { options } from "../utils/constants";

export const VideoBackground = ({ movie_id }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  const getMovieVideos = async () => {
    if (!movie_id) return;

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      options
    );

    const json = await response.json();

    const trailers = json.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    if (trailers.length > 0) {
      setTrailerKey(trailers[0].key);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movie_id]);

  if (!trailerKey) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};
