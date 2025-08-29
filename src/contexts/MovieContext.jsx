import { createContext, useState, useContext, useEffect } from 'react'

// first, we create the context
const MovieContext = createContext()

// then, we create the hook to grab the value that will be passed to the provider
export const useMovieContext = () => useContext(MovieContext)

// finally, we create the provider
export const MovieProvider = () => {

}

/**
 * The provider will provide state to any of the components that are wrapped inside of it
 */