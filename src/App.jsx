import './App.css'

function App() {
  

  return (
    <>
      <Text textContent="Hello World"/>
      <Text textContent="Bye World"/>
    </>
  )
}

const Text = ({ textContent }) => {
  return (
    <div>
      <p>{textContent}</p>
    </div>
  )
}

export default App
