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

## MovieCard

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

Now we can type our search term in the input box!

## MovieList

See `MovieList.jsx`  



---
@40/99