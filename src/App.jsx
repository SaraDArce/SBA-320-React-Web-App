import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import MoviePage from "./components/MoviePage";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  const apiKey = "aabdfa24";

  // State to hold movie data
  const [movies, setMovies] = useState(null);

  // Function to get one movie
  const getMovies = async (searchTerm) => {
    try {
      // Make fetch request and store the response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&y=2023`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setMovies(data);
    } catch (e) {
      console.error(e);
    }
  };
  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovies("Deadpool");
  }, []);

  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home movies={movies} />} />
        {/* <MovieList movies={movies} /> */}
        {/* <MoviePage /> */}
        {/* <MovieCard /> */}
      </Routes>
    </div>
  );
}

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <>
//       <div>
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;
