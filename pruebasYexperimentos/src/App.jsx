import { useState } from "react";

import { HolaMundo } from "./components/ComponentesDePrueba";
import { Saludo } from "./components/ComponentesDePrueba";
//nota: Las variables que se pasan al componente es lo que se denomina "propiedades" ("props")

export function App() {
    // Estas dos variables es lo que se denomina "variables de estado" ("state")
    const [unaVariable, setUnaVariable] = useState(5);
    const [otraVariable, setOtraVariable] = useState("algo");

    return (
        <>
            <p>Aquí va el contenido de la pagina</p>
            <p>
                Se escribe con una mezcla entre código HTML y código Javascript.
                Es decir, se escribe en JSX
            </p>
            <p>
                Por ejemplo {otraVariable} mezclado con {unaVariable}
            </p>
            <p>Y mezclado con componentes React. Por ejemplo:</p>
            <Saludo nombre="Benzirpi" apellido="Mirvento" />
            <p>Los componentes pueden aparecer o no...</p>
            {unaVariable > 7 && <HolaMundo />}
        </>
    );
}
