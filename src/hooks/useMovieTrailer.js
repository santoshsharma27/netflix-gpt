import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();

  // fetch trailer data
  const getMovieVideo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();

    const filterData = data.results.filter(
      (video) => video?.type === "Trailer"
    );

    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
}

export default useMovieTrailer;
