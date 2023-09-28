import { useState } from 'react'

import { ContenidoPorDefecto } from './componentes/ContenidoPorDefecto'
import { ContenidoDeGatos } from './componentes/ContenidoDeGatos'
import { ContenidoDeJirafas } from './componentes/ContenidoDeJirafas'
import { OtraPagina } from './componentes/OtraPagina'
import { PieDePaginaConEnlacesDeUtilidad } from './componentes/PieDePagina'

export default function App() {

    const [paginaAMostrar, setPaginaAMostrar] = useState("primerapagina");

    function BotonIrAPaginaPrincipal() {
        return (
            <button type="button" onClick={() => setPaginaAMostrar("primerapagina")}>
                <img
                    src="images/icons8-home-page-64.png"
                    alt="Home icon, icono de casita"
                    width="32"
                    height="32"
                />
            </button>
        )
    }
    function BotonPonerContenidoDeGatos() {
        return (
            <button type="button" onClick={() => setPaginaAMostrar("gatos")}>Gatos</button>
        )
    }
    function BotonPonerContenidoDeJirafas() {
        return (
            <button type="button" onClick={() => setPaginaAMostrar("jirafas")}>Jirafas</button>
        )
    }
    function BotonIrAOtraPagina() {
        return (
            <button type="button" onClick={() => setPaginaAMostrar("otrapagina")}>Otra Pagina</button>
        )
    }
    function Navegacion() {
        return (
            <nav>
                <p>Aquí van enlaces o botones para la navegación, para moverse dentro de esta web.</p>
                <ul>
                    <li><BotonIrAPaginaPrincipal/></li>
                    {["primerapagina", "jirafas"].includes(paginaAMostrar) &&
                        <li><BotonPonerContenidoDeGatos/></li>}
                    {["primerapagina", "gatos"].includes(paginaAMostrar) &&
                        <li><BotonPonerContenidoDeJirafas/></li>}
                    {["primerapagina", "gatos", "jirafas"].includes(paginaAMostrar) &&
                        <li><BotonIrAOtraPagina/></li>}
                </ul>
            </nav>
        )
    }

    return (
        <>
            {["primerapagina", "gatos", "jirafas"].includes(paginaAMostrar) &&
                <header>
                <h1>Página Principal [{paginaAMostrar}]</h1>
                </header>
            }
            {paginaAMostrar=="otrapagina" &&
                <header>
                    <h1>Esta es otra página</h1>
                </header>
            }

            <Navegacion/>

            {paginaAMostrar=="primerapagina" &&
                <ContenidoPorDefecto/>
            }
            {paginaAMostrar=="gatos" &&
                <ContenidoDeGatos/>
            }
            {paginaAMostrar=="jirafas" &&
                <ContenidoDeJirafas/>
            }
            {paginaAMostrar=="otrapagina" &&
                <OtraPagina/>
            }

            <PieDePaginaConEnlacesDeUtilidad/>
        </>
    )
    
}
