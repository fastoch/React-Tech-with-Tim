import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

const Favorites = () => {
  const { favorites } = useMovieContext()

  // if there are favorites, show them
  return favorites.length > 0 ? (
    <div className="favorites">
      <h1 className="favorites-title">Your Favorite Movies</h1>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  // if there are no favorites, show a message
  ) : (
    <div className="favorites-empty">
      <h2>You have no favorite movies yet.</h2>
      <p>Click the heart icon on a movie to add it to your favorites!</p>
    </div>
  )
}

export default Favorites