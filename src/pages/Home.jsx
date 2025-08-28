import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { useState, useEffect } from 'react'
import { getPopularMovies, searchMovies } from '../services/api'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try { 
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch (error) {
        console.log(error) // for debugging
        setError("Failed to load movies...")
      } finally {
        setLoading(false)
      }
    }
    loadPopularMovies()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()  // prevents the page from refreshing when we submit the form
    alert(`Searching for ${searchQuery}`)
    setSearchQuery('')
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      { error && <div className="error-message">{error}</div> }

      { loading ? (
        <div className="laoding">Loading...</div> 
      ) : ( 
        <div className="movies-grid">
          {movies.map((movie) => (
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home