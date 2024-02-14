import { useRef } from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  console.log(props);
  // Function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <div id="moviesContainer">
          {props.movies.map((movie, i) => {
            return <MovieCard key={i + 1} movie={movie} />;
          })}
        </div>
        ;
      </>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h3>...loading your movie!</h3>;
  };

  // Ternary operator will determine which functions JSX we will return
  return props.movies ? loaded() : loading();
}

export default MovieList;
