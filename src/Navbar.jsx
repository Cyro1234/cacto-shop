import Icone from './Icone.jsx'
import Pesquisa from './Pesquisa.jsx'

function Navbar({ cor, navbarBaixo, logo, icon, searchMD }) {

    function temLogo() {
        if (logo === 'false') {
            return 'hidden'
        }
        return (
            ''
        )
    }

    function temIcone() {
        if (icon === 'false') {
            return 'hidden'
        }
        return (
            ''
        )
    }

    function temSearchMD() {
        if (searchMD === 'true') {
            return ''
        }
        return (
            'max-md:hidden'
        )
    }

    function temGapIcon() {
        if (icon === 'false') {
            return ''
        }
        return 'gap-[3vw]'
    }

    return (
        <header className={`py-1 ${navbarBaixo ? 'fixed bottom-0 w-full' : ''}`} style={{ backgroundColor: cor }}>
            <nav className="flex justify-between items-center w-[95%] mx-auto">
                <div className='flex justify-between items-center w-full md:w-auto'>
                    <button className={`md:hidden ${temIcone()}`}>
                        <Icone icone="usuario" />
                    </button>
                    <img className={`w-44 mx-auto md:mx-0 ${temLogo()}`} src="src/assets/LOGO.png" alt="Logo" />
                    <div className={`${temSearchMD()} md:hidden mx-auto`} style={{ width: '75%' }}>
                        <Pesquisa></Pesquisa>
                    </div>
                    <button className={`md:hidden ${temIcone()}`}>
                        <Icone icone="carrinho" />
                    </button>
                </div>
                <div className={`${temSearchMD()} max-md:hidden`} style={{ width: '25%' }}>
                    <Pesquisa></Pesquisa>
                </div>
                <div className='hidden md:flex md:items-center md:gap-[4vw]'>
                    <ul className={`flex md:flex-row flex-col items-center ${temGapIcon()}`}>
                        <li>
                            <button className={`align-middle ${temIcone()}`}>
                                <Icone icone="carrinho" />
                            </button>
                        </li>
                        <li>
                            <button className={`align-middle ${temIcone()}`}>
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