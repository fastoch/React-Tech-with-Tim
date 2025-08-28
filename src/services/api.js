const API_key = "7947ca06df69ad7b5469db28cd94fa62"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_key}`)
  const data = await response.json()
  return data.results
}

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_key}&query=${encodeURIComponent(query)}`)
  const data = await response.json()
  return data.results
}