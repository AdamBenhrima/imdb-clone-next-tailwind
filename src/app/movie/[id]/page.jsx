import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

const getMovie = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
};

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <section className="w-full">
      <article className="p-4 md:pt-8 flex flex-col md:flex-row items-center max-w-6xl mx-auto md:space-x-6 w-full">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "100%" }}
          className="rounded-lg md:w-1/2 md:self-start lg:self-auto"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt={`Poster for ${movie.title || movie.name}`}
        ></Image>
        <div className="p-2 pt-0">
          <h2 className="text-lg mb-3 font-bold text-amber-500">
            {movie.title || movie.name}
          </h2>
          <p className="xl:text-lg mb-3">
            <span className="font-semibold">Overview: </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3 flex items-center">
            <span className="font-semibold mr-1">Rating:</span>
            <FiThumbsUp className="h-5 mr-1" />
            <span className="text-amber-500">{movie.vote_count}</span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default MoviePage;
