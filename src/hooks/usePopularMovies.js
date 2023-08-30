import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

function usePopularMovies() {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default usePopularMovies;
