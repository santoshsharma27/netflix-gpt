import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

function useUpcomingMovies() {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;
