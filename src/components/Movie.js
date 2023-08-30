import { Link } from "react-router-dom";
import { IMG_CDN } from "../utils/constant";

function Movie({ posterPath }) {
  if (!posterPath) return;

  return (
    <div className="w-36 md:w-48 m-2">
      <Link>
        <img
          src={IMG_CDN + posterPath}
          alt="Movie_poster"
          className="rounded-md transition duration-500 hover:scale-125"
        />
      </Link>
    </div>
  );
}

export default Movie;
