import { actors } from "../data";


function Actors() {
  return (
    <>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
       {actors.map((actor) => {
        return(
          <div key={actor.name}>
            <h3> Name: {actor.name}</h3>
           
            <span>Movies:</span>
            <ul>
              {actor.movies.map((actorMovie) => {
               return(
                <li>
                  {actorMovie};
                </li>
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

export default Actors;
