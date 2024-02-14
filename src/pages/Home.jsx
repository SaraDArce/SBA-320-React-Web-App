import React from "react";
import MovieList from "../components/MovieList";
import Form from "../components/Form";

const Home = (props) => {
  return (
    <>
      <div>
        <Form setSearchTerm={props.setSearchTerm} />
      </div>
      <div>
        <MovieList movies={props.movies} />
      </div>
    </>
  );
};

export default Home;
