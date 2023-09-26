import { useState } from 'react'

import { Contenido } from './componentes/Contenido'
import { PieDePaginaConEnlacesDeUtilidad } from './componentes/PieDePagina'


export default function App() {

    const [tematicaDelContenido, setTematicaDelContenido] = useState("pordefecto");

    function TituloPrincipal() {
        return (
            <header>
                <h1>Este es el título de la cabecera de la página</h1>
            </header>
            )
    }

    function BotonIrAPaginaPrincipal() {
        return (
            <button type="button" onClick={() => setTematicaDelContenido("pordefecto")}>
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
            <a href="otraPagina.html">Otra página</a>
        )
    }
    function Navegacion() {
        return (
            <nav>
                <p>Aquí van enlaces o botones para la navegación, para moverse dentro de esta web.</p>
                <ul>
                    <li><BotonIrAPaginaPrincipal/></li>
                    <li><BotonPonerContenidoDeGatos/></li>
                    <li><BotonPonerContenidoDeJirafas/></li>
                    <li><BotonIrAOtraPagina/></li>
                </ul>
            </nav>
        )
    }

    return (
        <div>
            <TituloPrincipal/>
            <Navegacion/>
            <Contenido tematicaDelContenido={tematicaDelContenido}/>
            <PieDePaginaConEnlacesDeUtilidad/>
        </div>
    )
    
}
