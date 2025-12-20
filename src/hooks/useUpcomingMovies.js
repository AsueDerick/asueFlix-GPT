import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    if (upcomingMovies) return;

    const getUpcomingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          options
        );

        const json = await response.json();
        dispatch(addUpcomingMovies(json.results));
      } catch (error) {
        console.error("Failed to fetch upcoming movies:", error);
      }
    };

    getUpcomingMovies();
  }, [dispatch, upcomingMovies]);
};

export default useUpcomingMovies;
