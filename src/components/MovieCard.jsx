import { useRef } from "react";

export default function MovieCard({ movie }) {
  // Function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <div className="movieCard">
          <h3>{movie.Title}</h3>
          <h4>{movie.Genre}</h4>
          <h4>{movie.Year}</h4>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h3>...loading your movie!</h3>;
  };

  // Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
}
