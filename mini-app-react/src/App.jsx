import { useState } from 'react'

import { ContenidoPorDefecto } from './componentes/ContenidoPorDefecto'
import { ContenidoDeGatos } from './componentes/ContenidoDeGatos'
import { ContenidoDeJirafas } from './componentes/ContenidoDeJirafas'
import { OtraPagina } from './componentes/OtraPagina'
import { PieDePaginaConEnlacesDeUtilidad } from './componentes/PieDePagina'

export default function App() {

    const [tematicaDelContenido, setTematicaDelContenido] = useState("contenidopordefecto");

    function TituloPrincipal() {
        return (
            <header>
                <h1>Página Principal [{tematicaDelContenido}]</h1>
            </header>
            )
    }

    function BotonIrAPaginaPrincipal() {
        return (
            <button type="button" onClick={() => setTematicaDelContenido("contenidopordefecto")}>
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
            <button type="button" onClick={() => setTematicaDelContenido("gatos")}>Gatos</button>
        )
    }
    function BotonPonerContenidoDeJirafas() {
        return (
            <button type="button" onClick={() => setTematicaDelContenido("jirafas")}>Jirafas</button>
        )
    }
    function BotonIrAOtraPagina() {
        return (
            <button type="button" onClick={() => setTematicaDelContenido("otrapagina")}>Otra Pagina</button>
        )
    }
    function Navegacion() {
        return (
            <nav>
                <p>Aquí van enlaces o botones para la navegación, para moverse dentro de esta web.</p>
                <ul>
                    <li><BotonIrAPaginaPrincipal/></li>
                    {["contenidopordefecto", "jirafas"].includes(tematicaDelContenido) &&
                        <li><BotonPonerContenidoDeGatos/></li>}
                    {["contenidopordefecto", "gatos"].includes(tematicaDelContenido) &&
                        <li><BotonPonerContenidoDeJirafas/></li>}
                    {["contenidopordefecto", "gatos", "jirafas"].includes(tematicaDelContenido) &&
                        <li><BotonIrAOtraPagina/></li>}
                </ul>
            </nav>
        )
    }

    return (
        <div>
            {["contenidopordefecto", "gatos", "jirafas"].includes(tematicaDelContenido) &&
                <TituloPrincipal/>
            }
            {tematicaDelContenido=="otrapagina" &&
                <header>
                    <h1>Esta es otra página</h1>
                </header>
            }

            <Navegacion/>

            {tematicaDelContenido=="contenidopordefecto" &&
                <ContenidoPorDefecto/>
            }
            {tematicaDelContenido=="gatos" &&
                <ContenidoDeGatos/>
            }
            {tematicaDelContenido=="jirafas" &&
                <ContenidoDeJirafas/>
            }
            {tematicaDelContenido=="otrapagina" &&
                <OtraPagina/>
            }

            <PieDePaginaConEnlacesDeUtilidad/>
        </div>
    )
    
}
