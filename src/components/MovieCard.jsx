import "./MovieCard.css";
import { useMovieContext } from "../contexts/MovieContexts";

function MovieCard({ movie }) {
  const posterURL = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

    const {addFavorites, removeFavorites, isFavorites} = useMovieContext()
    const favourite = isFavorites(movie.id)

  function fav(e) {
    e.preventDefault()
    if (favourite) removeFavorites(movie.id)
    else addFavorites(movie)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterURL} alt={movie.title} />

        <div className="movie-overlay">
          <button className={`fav-btn ${favourite ? "active" : ""}`} onClick={fav}>
            <i className={`bi ${favourite ? "bi-heart-fill" : "bi-heart"}`}></i>
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;