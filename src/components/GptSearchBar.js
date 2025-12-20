import React, { useRef } from "react";
import { client } from "../utils/openAi";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

export const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const serchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };
  const HandleGptSearchClick = async () => {
    const search_text = searchText.current.value;
    const gptQuery = `
You are a movie recommendation system.
Based on the following user query: "${search_text}",
recommend exactly five relevant movies.

Return only the movie titles, separated by commas.
Do not include any additional text or explanations.
`;

    const gptResults = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "developer", content: gptQuery },
        { role: "user", content: gptQuery },
      ],
    });
    console.log(gptResults.choices);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => serchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  };
  return (
    <div className="pt-32 flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-2xl flex bg-black/80 rounded-xl shadow-lg overflow-hidden border border-gray-700"
      >
        <input
          type="text"
          ref={searchText}
          placeholder="Search movies using AI..."
          className="flex-grow px-6 py-4 text-lg bg-transparent text-white placeholder-gray-400 outline-none"
        />

        <button
          type="submit"
          onClick={HandleGptSearchClick}
          className="px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};
