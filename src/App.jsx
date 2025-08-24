import './App.css'
import MovieCard from './components/MovieCard'  

function App() {
  const movieNumber = 2

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{title: "The Matrix", release_date: "1999", url: ""}} /> 
      ) : (
        <MovieCard movie={{title: "Back to the Future", release_date: "1985", url: ""}} />
      )}
    </>
  )
}

export default App
