import React from "react";
import MovieList from "../components/MovieList";

const Home = (props) => {
  return (
    <div>
      <MovieList movies={props.movies} />
    </div>
  );
};

export default Home;
