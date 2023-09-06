import Movie from "./Movie";

function MovieList({ title, movies }) {
  return (
    <div className="px-6">
      <h1 className="py-4 text-lg text-white md:text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll pb-8">
        <div className="flex">
          {movies?.map((movie) => (
            <Movie key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
