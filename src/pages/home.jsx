import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Home({ searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: API_KEY,
              language: "en-US",
              page: 1,
            },
          }
        );
        setMovies(res.data.results);
        setLoading(false);
      } catch (error) {
        console.error("TMDB Error:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [API_KEY]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center text-light mt-5">
        <h3>Loading movies...</h3>
      </div>
    );
  }

  if (filteredMovies.length === 0) {
    return (
      <div className="text-center text-light mt-5">
        <h3>No movies found for "{searchQuery}"</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-4">
      <div className="row g-4 justify-content-center">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="col-auto">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;