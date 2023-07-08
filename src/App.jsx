import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Container from './components/Main.jsx'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prev => !prev)
  }

  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Container 
        darkMode={darkMode}
      />
    </>
  )
}

export default App
