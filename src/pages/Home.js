import { movies } from "../data";
import MovieCard from '../components/MovieCard'

function Home() {
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        { movies.map((movie) => {
          return (
            <MovieCard key={movie.title} title={movie.title} time={movie.time} genres={movie.genres}/>
          )
        })}
       

      </main>
    </>
  );
};

export default Home;
