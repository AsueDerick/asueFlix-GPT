import React from "react";
import { GptSearchBar } from "./GptSearchBar";
import { GptMovieSuggestion } from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

export const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BG_URL} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
