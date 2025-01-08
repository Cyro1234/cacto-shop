import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Gradiente from './Gradiente.jsx';

function Carousel({ children: slides }) {
    const [indice, setIndice] = useState(0);

    const voltar = () => setIndice((indice) => (indice === 0 ? slides.length - 1 : indice - 1));
    const avancar = () => setIndice((indice) => (indice === slides.length - 1 ? 0 : indice + 1));

    const numImagens = slides.length;
    const tamanhoImagem = { width: 100 / numImagens + "%" };
    const tamanhoBotao = 40;
    const configBotao = { className: 'p-1 rounded-full shadow bg-white/90 hover:bg-white' };

    return (
        <div className="overflow-hidden relative w-full h-[500px] max-lg:h-[400px] max-sm:h-[300px] max-[550px]:h-[200px]">
            <div className="flex transition-transform ease-out duration-500 w-full h-full" style={{ transform: `translateX(-${indice * 100/slides.length}%)`, width: `${slides.length * 100}%` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-full" style={tamanhoImagem}>
                        <img src={slide.props.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover object-center"/>
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={voltar} {...configBotao}>
                    <ChevronLeft size={tamanhoBotao} />
                </button>
                <button onClick={avancar} {...configBotao}>
                    <ChevronRight size={tamanhoBotao} />
                </button>
            </div>
            <Gradiente cor=""></Gradiente>
        </div>
    );
}

export default Carousel;