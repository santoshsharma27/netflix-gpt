import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

function GptMovieSuggestions() {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="my-8 bg-black bg-opacity-90">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
}
export default GptMovieSuggestions;
