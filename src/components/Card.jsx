import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <article className="cursor-pointer p-2 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border border-slate-400 m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={640}
          height={300}
          style={{ maxWidth: "100%", height: "auto" }}
          className="sm:round-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt={`Poster for ${result.title || result.name}`}
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <div className="flex justify-between ">
            <p>{result.release_date || result.first_air_date}</p>
            <p className="flex items-center">
              <FiThumbsUp className="h-5 mr-1" />
              {result.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
