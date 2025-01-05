import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './NavBar.jsx'


function App() {
  return (
    <div>
      <Navbar posicao="cima" cor="verde"></Navbar>
      {/* <Navbar direcao="baixo" cor=""></Navbar> */}
    </div>
  )
}

export default App