import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Form from "./components/Form";

export default function App() {
  const apiKey = "aabdfa24";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    try {
      // Make fetch request and store the response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };
  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Deadpool");
  }, []);

  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form searchMovies={getMovie} />
      <MovieList movie={movie} />
    </div>
  );
}
