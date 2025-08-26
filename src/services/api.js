const API_key = "7947ca06df69ad7b5469db28cd94fa62"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_key}`)
}