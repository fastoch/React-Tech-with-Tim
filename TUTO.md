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

---
@17/99