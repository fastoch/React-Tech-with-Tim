import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getPopularMovies, searchMovies } from '../services/api'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  // State for the controlled search input field
  const [searchInputValue, setSearchInputValue] = useState(query)

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      setError(null)
      try { 
        const results = query
          ? await searchMovies(query)
          : await getPopularMovies()
        setMovies(results)
        if (query && results.length === 0) {
          setError(`No results found for "${query}"`)
        }
      } catch (error) {
        console.log(error) // for debugging
        setError("Failed to fetch movies. Please try again later.")
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [query]) // Re-run the effect when the URL query parameter changes

  // Syncs the input field if the user navigates using back/forward browser buttons
  useEffect(() => {
    setSearchInputValue(query)
  }, [query])

  const handleSearch = (e) => {
    // prevents the page from reloading when we submit the form
    e.preventDefault()  
    const newQuery = searchInputValue.trim()

    // Update the URL search parameter, which will trigger the useEffect to fetch movies
    setSearchParams(newQuery ? { q: newQuery } : {})
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      { error && <div className="error-message">{error}</div> }

      { loading ? (
        <div className="loading">Loading...</div> 
      ) : ( 
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home