import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { useState, useEffect } from 'react'
import { getPopularMovies, searchMovies } from '../services/api'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    
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

      <div className="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home