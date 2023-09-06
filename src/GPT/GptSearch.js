import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";
import Loader from "../components/Loader";

function GptSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const language = useSelector((store) => store.config.lang);

  async function searchMovieTMDB(movie) {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS,
      );

      const data = await res.json();
      return data.results;
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGptSearchForm(e) {
    e.preventDefault();

    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
    );
  }

  return (
    <div>
      <form
        className="flex items-center justify-center space-x-6 pt-32"
        onSubmit={handleGptSearchForm}
      >
        <input
          className="w-48 rounded-md border px-5 py-3 md:w-[600px]"
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          ref={searchText}
        />
        <div>
          <button className="rounded-lg bg-red-500 px-8 py-3 text-white">
            {lang[language].search}
          </button>
        </div>
      </form>
      {isLoading ? <Loader /> : <GptMovieSuggestions />}
    </div>
  );
}

export default GptSearch;
