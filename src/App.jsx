import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieFinderContainer from './components/MovieFinderContainer'
import Saludar from './components/Saludar'
function App() {
  return (
    <div className="App">
      <Saludar name="Pablo"></Saludar>
      <MovieFinderContainer></MovieFinderContainer>
    </div>
  )
}

export default App
