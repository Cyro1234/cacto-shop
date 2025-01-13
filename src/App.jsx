import { useState } from 'react';
import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './NavBar.jsx';
import CoresCustomizadas from './utils/CoresCustomizadas.jsx';
import Card from './Card.jsx';
import Carousel from './Carousel.jsx';
import Gradiente from './Gradiente.jsx';
import Imagens from './utils/Imagens.jsx';

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = CoresCustomizadas.padraoSite();
  }, []);

  const slides = Imagens.slides;

  return (
    <div>
      <Navbar cor={CoresCustomizadas.verde()} searchMD='false'></Navbar>
      <div className="md:hidden">
        <Navbar cor={CoresCustomizadas.verde()} logo="false" icon="false" searchMD="true"></Navbar>
      </div>
      <div className='w-lg'>
        <Carousel>
          {slides.map((s, index) => (
            <img key={index} src={s} alt={`slide-${index}`} className="w-full h-full object-cover object-center" />
          ))}
        </Carousel>
        <div className='conteudo mt-[-100px] max-[550px]:mt-[-50px]'>
          <div>
            <div className='py-4'>
              <h1 className='bg-white inline-block px-2 py-1 rounded text-3xl drop-shadow-lg mx-10 max-[550px]:mx-5'>Mais Procurados</h1>
            </div>
            <div className='grid grid-cols-5 gap-[50px] px-1 w-[80%] mx-auto max-2xl:w-[90%] max-xl:w-[95%] max-[1180px]:grid-cols-4 max-lg:grid-cols-3 max-md:w-[75%] max-md:gap-[25px] max-lg:w-[80%] max-sm:w-[90%] max-sm:grid-cols-2'>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;