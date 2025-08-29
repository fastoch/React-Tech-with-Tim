import { createContext, useState, useContext, useEffect } from 'react'

// first, we create the context
const MovieContext = createContext()

// then, we create the hook to grab the value that will be passed to the provider
export const useMovieContext = () => useContext(MovieContext)

// finally, we create the provider 
export const MovieProvider = ({children}) => {
  // here goes the logic related to the favorite movies
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    // do we have any favorite movies yet?
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  return <MovieContext.Provider>{children}</MovieContext.Provider>
}

/**
 * The provider will provide data (value) to any of the components that are nested inside of it
 */

/**
 * children is a reserved prop.  
 * in our case, it represents any components or JSX elements that are nested inside <MovieProvider>
 */