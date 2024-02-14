import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
// import Form from "./components/Form";
// import MoviePage from "./components/MoviePage";
// import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  const apiKey = "aabdfa24";

  // State to hold movie data
  const [movies, setMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("Deadpool");

  // Function to get one movie
  const getMovies = async () => {
    try {
      // Make fetch request and store the response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setMovies(data.Search);
    } catch (e) {
      console.error(e);
    }
  };
  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovies();
  }, [searchTerm]);

  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/"
          element={<Home setSearchTerm={setSearchTerm} movies={movies} />}
        />
        {/* <MovieList movies={movies} /> */}
        {/* <MoviePage /> */}
        {/* <MovieCard /> */}
      </Routes>
    </div>
  );
}
