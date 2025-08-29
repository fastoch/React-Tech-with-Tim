src = https://www.youtube.com/watch?v=G6D9cBaLViA  (Nov 2024)

# Intro

React is a free and open-source front-end JavaScript library.  
React lets you build user interfaces (UIs) out of individual pieces called "**components**".  

React is a combination of HTML and JavaScript code.  
The file extension is `.jsx`, or `.tsx` if you're using **TypeScript**.  

A component is actually a function, and it's also called a "**functional component**".  
The JSX code is actually what's located inside the return statement of a component.  

To build an entire app with React, it's recommended to use a full-stack React framework like 
**Next.js** or **Remix**.  

# What we need to work with React

- install **Node.js** (usually comes with npm, the official Node package manager)
- open VS Code or your favorite code editor 
- from your code editor, open a folder (create a new folder to host your project)
- we'll use **Vite**, a lightweight web server that allows us to run our React apps
- initialize the React project by running this cmd: `npm create vite@latest`
- if your **current** folder is already your **project** folder, just name your project `.`
- select the **React** framework, and for this tutorial we'll just use regular **JavaScript** as the variant
- once your project has been initialized by Vite, run `npm i` from your project's folder 
  - this will install the **dependencies** listed in your `package.json` file.
  - the installed dependencies will show up in a new folder called "**node_modules**"
  - every time we'll add a new package, it will be added inside the **node_modules** folder
- to run our React app (start the dev server): `npm run dev`
  - this is one the default scripts configured in our `package.json` file
  - the dev server will run at http://localhost:5173/

# React template walkthrough

Initializing this React project with Vite has created a bunch of files for us.  

## The `index.html` file 

This is where our React code will be injected into the page.  
In this file, we have a `<div>` with an id of `root`.  
All the React code that we're about to write is going to be "thrown" into this `<div>`.  

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

React uses what's called a **virtual DOM** to handle all of the HTML that is rendered to the page.    

## The `src` folder

This is where we're going to write our different components.  

## The `main.jsx` file

This is the **entry point** of our application, where the injection of our React code will happen.  
It selects the **root** `div` from the `index.html` file, and injects the `<App />` component into it.  

```jsx
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## The `App.jsx` file

This is our main component, the **parent** of all the components we're about to write.  

Every component is a function that has 2 main parts:
- the JavaScript (or TypeScript) part
- the JSX (or TSX) part, which looks a lot like HTML

A component name starts with a capital letter.   
And one component cannot return two **sibling** elements, like 2 divs being on the same level.  

The trick to return multiple sibling elements is to use something called a **fragment**.  
Which is an **empty HTML tag** that looks like this:
```jsx
function App() {

  return (
    <>
      <div></div>
      <div></div>
    </>
  )
}

export default App
```

However, a component can return multiple elements as long as it has only one parent element:
```jsx
return (
  <div>
    <div>
      <p></p>
    </div>
    <h2></h2>
    <p></p>
  </div>
) 
```

# Props

We can pass props (properties) as parameters to our functional components.  
Like the `textContent` prop in this example:
```jsx
const Text = ({ textContent }) => {
  return (
    <div>
      <p>{textContent}</p>
    </div>
  )
}
```

Then, we can use these props when calling the `Text` component inside the `App` component:
```jsx
function App() {

  return (
    <>
      <Text textContent="Hello World"/>
      <Text textContent="Bye World"/>
    </>
  )
}
```

## Component syntax

A component doesn't have to be written like this: `<Text />`  
We could write it like this: `<Text>...</Text>`  

# Our Movie App Project

What components do we need?
- MovieCard
- MovieList

Inside the src folder, let's make a new folder called `components`.  
This is where we'll put all the components we're going to write.  

## The MovieCard component

See `MovieCard.jsx`  

Once we've built our component, we need to be sure to **export** it, so it can be used in other files.  
To use in the App component, we need to import it: `import MovieCard from './components/MovieCard'`  

## Default export vs named export

Note that the syntax of the import could be different.  
Here, we made a **default** export at the end of MovieCard.jsx: `export default App`  
But if we had made a **named** export such as `export const MovieCard = () => {}`, then 
the import would look like this: `import { MovieCard } from './components/MovieCard'`  

## Conditional Rendering

With a ternary operator, we render something depending on a condition:
```jsx
function App() {
  const movieNumber = 1

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{title: "The Matrix", release_date: "1999", url: null}} /> 
      ) : (
        <MovieCard movie={{title: "Back to the Future", release_date: "1985", url: null}} />
      )}
    </>
  )
}

export default App
```
If movieNumber is equal to 1, it will render The Matrix movie card.  
Otherwise, it will render Back to the Future movie card.  

---

We can also use "**short-circuiting**" with th `&&` operator if we don't need the else statement:
```jsx
return (
    <>
      {movieNumber === 1 && <MovieCard movie={{title: "The Matrix", release_date: "1999", url: ""}} />}
    </>
  )
```

## The `pages` folder

Inside the `src` folder, let's create a new folder called `pages`.  
Inside this new folder, create 2 new files called `Home.jsx` and `Favorites.jsx`.  

## The Home page and `.map()`

We'll have an array of movie objects, and we'll render them dynamically.  
We'll render one movie card for each movie in the array.  

```jsx
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
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home
```

The `.map()` function iterates over the `movies` array (which contains movie objects), 
so we can display the corresponding `MovieCard` component for each movie.  

We're adding a `key` property to each `MovieCard` component because React needs to know 
which component to update based on the interactions that happen with the Web page.  

We need to mark every single component with a unique identifier so that React can handle
all of the **state** updates that will occur.  

## State

State is something where once it's updated, the component will change and re-render itself to 
show the new state.  

- the first thing to do is to import the `useState` hook from the `react` library
- then we can declare our first state variable inside the component (**before** the `return` statement)

```jsx
import { useState } from 'react'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
```

In the above example, `searchQuery` is our state variable, and `setSearchQuery` is the **setter** function
that will update the value held by the state variable.  

The parameter we pass to `useState` is the default value for our state variable.  

---

Now, we can use this state variable in our `Home` component:
```jsx
return (
  <div className="home">
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search for movies..."
        className="search-input"
        value={searchQuery}
      />
      <button type="submit" className="search-button">Search</button>
    </form>
```

By setting the input `value` to `{searchQuery}`, we connect the component to the `searchQuery` state.  

---

Right now, if we save and refresh the page, you'll notice that we can't type anything in the input box.  
That's because the `searchQuery` value is locked on an empty string for now, we're not updating the state 
via `setSearchQuery` yet...  

To solve that, we need to add an `onChange` event listener to the input box:
```jsx
<input
  type="text"
  placeholder="Search for movies..."
  className="search-input"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/> 
```

Now we can type our search term and see it displayed in the input box!

## The Search button (submitting the form)

Now, we can use our `searchQuery` state in the `handleQuery` method:
```jsx
const handleSearch = (e) => {
  e.preventDefault()  // prevents the page from refreshing when we submit the form
  console.log(searchQuery)  
  setSearchQuery('')
}
```
This is the method that is called when we click the submit button to search for a movie.  
The `preventDefault` method prevents the page from refreshing when we submit the form.  
At the end, we call the setter function to reset the `searchQuery` state to an empty string.  

## Showing the movies that match our search query

Inside the Home component, we need to update the div where we map on the movies array.  
```jsx
<div className="movies-grid">
  {movies.map((movie) => (
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    <MovieCard key={movie.id} movie={movie} />
  ))}
</div>
```
This will only show the movie card if the title matches the search query.  

## Page routing

- install React router: `npm i react-router-dom`
- open the `main.jsx` file, import the BrowserRouter component and wrap the App component in it:
```jsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```
- open the `App.jsx` file, and modify it as follows:
```jsx
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  )
}

export default App
```

## The Navigation Bar

See `NavBar.jsx`
Once created, we import the NavBar component in the `App.jsx` file, and we add our Navbar above the 
`<main>` element, both the main and the Navbar being wrapped inside a div.

```jsx
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}
```

## CSS Styling

All our CSS files will be in /src/css.  

Tim's CSS files can be found here:  
https://github.com/techwithtim/Learn-React-In-One-Project/tree/main/src/css  

We can just copy Tim's files because CSS is not the purpose of this tutorial.  

It's common to have a different stylesheet for each component.  
We have App.css for App.jsx, index.css for main.jsx, Home.css for Home.jsx, and so on.  

## Fetching the movies from an API

From our Home page, we want to display a list of movies.  
Instead of creating that list from scratch, we want to get them from a real source.  

We're going to use a publicly available API that contains a bunch of movies, 
and we're going to grab the most popular movies and simply display them.  

Then, we're going to use the Search feature from that API to search for movies and 
to display those search results.  

The API we'll use is TMDB: https://www.themoviedb.org  

- create a TMDB account
- go to `Settings`
- go to `API` to find your **API key**
- in the /src folder of your project, create a new folder called `services`
- inside this services folder, create a new file called `api.js`

Inside this `api.js` file, we're going to write some functions which are going to be responsible 
for calling our API.  

It's usually a good practice to create a separate file that contains all of our API calls so 
that we can keep all the networking operations or API-related stuff in one place and find it easily.  

```js
const API_key = "7947ca06df69ad7b5469db28cd94fa62"
const BASE_URL = "https://api.themoviedb.org/3"
```

We will use TMDB's API for 2 things:
- searching for movies
- displaying popular movies

So, right after the two variables, we need to declare the two functions that will allow us to perform 
these operations: `getPopularMovies` and `searchMovies`.  

Check the `api.js` file to see how these functions are implemented.  

## Back to the Home component

We're going to learn a new React hook: `useEffect`, which is going to allow us to use the 2 functions we've just declared.  

First, we need to import these functions:
```jsx
import { getPopularMovies, searchMovies } from '../services/api'}
```

Then we need to remove our static movies array and replace it with our `getPopularMovies` function:
```jsx
const movies = [
  { id: 1, title: "The Matrix", release_date: "1999", url: null },
  { id: 2, title: "Back to the Future", release_date: "1985", url: null },
  { id: 3, title: "The Shawshank Redemption", release_date: "1994", url: null },
  { id: 4, title: "The Godfather", release_date: "1972", url: null },
  { id: 5, title: "The Dark Knight", release_date: "2008", url: null },
  { id: 6, title: "Pulp Fiction", release_date: "1994", url: null },
  { id: 7, title: "Forrest Gump", release_date: "1994", url: null },
  { id: 8, title: "Inception", release_date: "2010", url: null },
]
```

becomes:
```jsx
const movies = getPopularMovies()
```  

While the above will actually work, this function will be called **every single time** that anything 
in this component changes. And we don't to be constantly fetching movies for no reason.  

### The useEffect hook

`useEffect` allows us to add side effects to our functions or to our components, and define when they should run.  

In our case, we want `getPopularMovies` to run only once, when the component is rendered for the first time.  

First, we need to import the hook: `import { useEffect } from 'react'`  
Then, we're going to store our movies in a state: `const [movies, setMovies] = useState([])`  

We will also declare a loading state (while the movie fetching happens):  
`const [loading, setLoading] = useState(true)`  

and an error state in case some error occurs:  
`const [error, setError] = useState(null)`  

After that, we can declare our `useEffect` hook.  
The syntax is: `useEffect(() => {}, [])`  
As you can see, useEffect has 2 parameters: a function (the "effect") and an array (a "dependency array").  

The function that we pass to useEffect will be called every time a change occurs in the dependency array.  
Since we want `getPopularMovies` to run only when the component is first rendered, we'll leave the dependency array empty.  

Here's how we combine `useEffect` + `getPopularMovies` + the setter functions:
```jsx
useEffect(() => {
  const loadPopularMovies = async () => {
    try { 
      const popularMovies = await getPopularMovies()
      setMovies(popularMovies)
    } catch (error) {
      console.log(error) // for debugging
      setError("Failed to load movies...")
    } finally {
      setLoading(false)
    }
  }
  loadPopularMovies()
}, [])
```

## Displaying movie posters 

In the MovieCard component, we update the `<img>` element as follows:
```jsx
<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
```

## Making the search field actually work

In the Home component, we need to modify the `handleSearch` method so it looks like that:
```tsx
const handleSearch = async (e) => {
  // prevents the page from reloading when we submit the form
  e.preventDefault()  
  // first, make sure the search query is not an empty string
  if (searchQuery.trim() === '') {
    return
  }
  // also make sure we're not already searching for movies
  if (loading) {
    return
  }
  // then, use the searchMovies method declared in /services/api.js
  setLoading(true)
  try {
    const searchResults = await searchMovies(searchQuery)
    setMovies(searchResults)
    setError(null) // clear any previous error
  } catch (error) {
    console.log(error)
    setError("Failed to search movies...")
  } finally {
    setLoading(false)
  }
  // clear the search field after clicking the Search button (optional)
  setSearchQuery('')
}
```

## Making the Favorite button work

We need to make our favorite movies list persist.  
And for that we will use something called **local storage**.  

We also need to share the `isFavorite` state of our movies between the Home and Favorites pages.  
And for that, we'll use another React feature called `Context`.  

A `context` allows a state to be globally available to any component that's within the provided context.  

- first, create a new folder named `contexts` inside the `src` folder
- inside this contexts folder, create a file named `MovieContext.jsx`

check comments in this file to see how it works