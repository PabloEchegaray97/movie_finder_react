import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import MovieFinderContainer from './components/MovieFinderContainer'
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <MovieFinderContainer></MovieFinderContainer>
    </div>
  )
}

export default App
