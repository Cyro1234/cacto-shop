import React from 'react';
import cacto from './assets/cacto.webp';
import './styles/Card.css';

function Card() {

    // largura = 13
    // altura = 1.5 * largura

    return (
        <div className='flex justify-center'>
            <div className='card bg-white aspect-[3/2] md:w-[13em] md:h-[19.5em] w-[10em] h-[15em] rounded-lg drop-shadow-lg hover:drop-shadow-xl border-2 '>
                <div className='bg-white rounded-t-lg'>
                    <img src={cacto} alt="Cacto" className='w-full h-2/3 object-cover' />
                </div>
                <div className='p-2 md:p-4 fixed bottom-0'>
                    <h2 className='md:text-xl text-lg truncate'>Nome do Produto</h2>
                    <p className='text-xl font-bold md:text-2xl'>R$ 99,99</p>
                </div>
            </div>
        </div>
    );
}

export default Card;