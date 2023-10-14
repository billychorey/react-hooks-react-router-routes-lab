import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data";

//useparams here to get the one movie linked from home page and movie card
//try find and movies.find the title
function Movie() {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
      <header>
        <h1>Movies Page</h1>
      </header>
      <main>
        <div>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <span>Genres:</span>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Movie;




