import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './NavBar.jsx'
import CoresCustomizadas from './utils/CoresCustomizadas.jsx'
import Card from './Card.jsx'

function App() {
  return (
    <div>
      <Navbar cor={CoresCustomizadas.verde()}></Navbar>
      {/* <Navbar direcao="baixo" cor=""></Navbar> */}
      <Card></Card>
    </div>
  )
}

export default App