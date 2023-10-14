import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
        <Link to={`/movies/${title}`}>View Details</Link>
    </article>
  );
};

export default MovieCard;