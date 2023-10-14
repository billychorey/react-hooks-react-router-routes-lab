import { directors } from "../data";

function Directors() {
  
  return (
    <>
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => {
          return(
            <div key={director.name}>
              <h3>Name: {director.name}</h3>
              <span>Movies:</span>
              <ul> 
                {director.movies.map((movie) => {
                  return(
                    <li>{movie}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </main>
    </>
  );
};

export default Directors;
