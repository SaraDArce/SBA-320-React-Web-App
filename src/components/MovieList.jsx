import { useRef } from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  let allMovies = props.movie.map((movie, i) => {
    return <MovieCard key={movie.Title + 1} movie={movie} />;
  });

  return <div id="moviesContainer">{allMovies}</div>;
}

export default MovieList;
