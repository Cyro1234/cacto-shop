import Icone from './Icone.jsx'
import Pesquisa from './Pesquisa.jsx'

function Navbar({ cor, navbarBaixo }) {
    return (
        <header className={`py-1 ${navbarBaixo ? 'fixed bottom-0 w-full' : ''}`} style={{ backgroundColor: cor }}>
            <nav className="flex justify-between items-center w-[95%] mx-auto">
                <div className='flex justify-between items-center w-full md:w-auto'>
                    <button className='md:hidden'>
                        <Icone icone="usuario" />
                    </button>
                    <img className="w-44 mx-auto md:mx-0" src="src/assets/LOGO.png" alt="Logo" />
                    <button className='md:hidden'>
                        <Icone icone="carrinho" />
                    </button>
                </div>
                <div style={{ width: '100%'}}>
                    <Pesquisa></Pesquisa>
                </div>
                <div className='hidden md:flex md:items-center md:gap-[4vw]'>
                    <ul className='flex md:flex-row flex-col items-center gap-[3vw]'>
                        <li>
                            <button className='align-middle'>
                                <Icone icone="carrinho" />
                            </button>
                        </li>
                        <li>
                            <button className='align-middle'>
                                <Icone icone="usuario" />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar