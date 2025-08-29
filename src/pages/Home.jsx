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

  const handleSearch = async (e) => {
    // prevents the page from reloading when we submit the form
    e.preventDefault()  
    // first, make sure the search query is not an empty string
    if (searchQuery.trim() === '') {
      return
    }
    // also make sure we're not already searching for movies
    if (loading) {
      return
    }
    // then, use the searchMovies method declared in /services/api.js
    setLoading(true)
    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null) // clear any previous error
    } catch (error) {
      console.log(error)
      setError("Failed to search movies...")
    } finally {
      setLoading(false)
    }
    // clear the search field after clicking the Search button (optional)
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