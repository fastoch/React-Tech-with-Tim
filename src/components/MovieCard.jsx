import '../css/MovieCard.css'  

const MovieCard = ({movie}) => {
  const onLike = () => {
    alert("Liked")
  }

  return (
    <div className="movie-card">
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <div className="omovie-overlay">
          <button className='favorite-btn' onClick={onLike}>❤️️</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0] || 'N/A'}</p>
      </div>
    </div>
  )
}

export default MovieCard