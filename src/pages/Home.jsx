import MovieCard from "../components/MovieCard"

const Home = () => {
  const movies = [
    {id: 1, title: "The Matrix", release_date: "1999", url: null},
    {id: 2, title: "Back to the Future", release_date: "1985", url: null},
    {id: 3, title: "The Shawshank Redemption", release_date: "1994", url: null},
    {id: 4, title: "The Godfather", release_date: "1972", url: null},
    {id: 5, title: "The Dark Knight", release_date: "2008", url: null},
    {id: 6, title: "Pulp Fiction", release_date: "1994", url: null},
    {id: 7, title: "Forrest Gump", release_date: "1994", url: null},
    {id: 8, title: "Inception", release_date: "2010", url: null},
  ]

  return (
    <div className="home">
      <form onSubmit={} className="search-form">
        <input type="text" />
      </form>
      
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home