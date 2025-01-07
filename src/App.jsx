import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './NavBar.jsx'
import CoresCustomizadas from './utils/CoresCustomizadas.jsx'
import Card from './Card.jsx'
import Carousel from './Carousel.jsx'
import vermelho from './assets/vermelho.png'
import verde from './assets/verde.png'
import azul from './assets/azul.png'

const slides = [vermelho, verde, azul]

function App() {
  return (
    <div>
      <Navbar cor={CoresCustomizadas.verde()}></Navbar>
      {/* <Navbar direcao="baixo" cor=""></Navbar> */}
      <div className='w-lg'>
        <Carousel>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
      <Card></Card>
    </div>
  )
}

export default App