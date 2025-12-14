import { useMovieContext } from "../contexts/MovieContexts";
import MovieCard from "../components/MovieCard";

function Favourite({ searchQuery }) {
  const { favorites } = useMovieContext();

  const filteredFavorites = favorites.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredFavorites.length === 0) {
    return (
      <div className="text-center text-light mt-5">
        <h3>
          {searchQuery
            ? `No favourites found for "${searchQuery}"`
            : "No Favourite Movies Yet ❤️"}
        </h3>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-4">
      <div className="row g-4 justify-content-center">
        {filteredFavorites.map(movie => (
          <div key={movie.id} className="col-auto">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourite;