import { createContext, useState, useContext, useEffect } from 'react'

// first, we create the context
const MovieContext = createContext()

// then, we create the hook to grab the value that will be passed to the provider
export const useMovieContext = () => useContext(MovieContext)

// finally, we create the provider and we pass it a value
export const MovieProvider = ({children}) => {
  // here goes the logic related to the favorite movies (until the return statement)

  // state variable to store the favorite movies
  const [favorites, setFavorites] = useState([])

  // when the page first loads, check localStorage and update the favorites state  
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  // when the favorites state changes (movie added or removed), update localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie])
  }

  const removeFromFavorites = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId)
    )
  }

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId)
  }

  const value = { favorites, addToFavorites, removeFromFavorites, isFavorite }

  // The value provided allows children components to access the above state and methods
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}

/**
 * The provider provides data (value) to any of the components that are nested inside of it (its children)
 */

/**
 * children is a reserved prop.  
 * in our case, it represents any components or JSX elements that are nested inside <MovieProvider>
 */