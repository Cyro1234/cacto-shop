import './styles/Gradiente.css'
import CoresCustomizadas from './utils/CoresCustomizadas';

function Gradiente( {cor} ) {

    if (cor == true) {
        return cor
    } else {
        cor = CoresCustomizadas.padraoSite()
    }

    return (
        <div className="gradiente" style={{background: `linear-gradient(180deg, transparent, ${cor})`}}></div>
    )
}

export default Gradiente;