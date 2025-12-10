import { useMovieContext } from "../contexts/MovieContexts";
import MovieCard from "../components/MovieCard";

function Favourite() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="text-center text-light mt-5">
        <h2>No Favourite Movies Yet ❤️</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-4">
      <div className="row g-4 justify-content-center">
        {favorites.map((movie) => (
          <div key={movie.id} className="col-auto">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourite;