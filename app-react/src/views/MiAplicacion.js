import { useEffect, useState } from 'react';

import '../views/MiAplicacion.css';
import { getUltimosAlbaranes } from '../services/manejoDeAlbaranes';

export function MiAplicacion() {

    const [albaranes, setAlbaranes] = useState([]);

    useEffect(() => {
        getUltimosAlbaranes()
            .then((datos) => {
                console.log("Los datos son:", datos);
                setAlbaranes(datos);
            })
            .catch((error) => {
                alert("Error al recuperar los ultimos albaranes: ", error);
            });
    }, []);

    console.log("Los albaranes son: ", albaranes);
    return (
        <>
        <p>Hola, mundo!</p>
        <br/>
        <p>Los últimos albaranes son: </p>
        <table>
            <thead>
                <tr>
                    <th>numero de albarán</th>
                    <th>cliente</th>
                    <th>entregar en</th>
                </tr>
            </thead>
            <tbody>
                {albaranes.map( (albaran) => (
                    <tr key={albaran.numeroDeAlbaran}>
                        <td>{albaran.numeroDeAlbaran}</td>
                        <td>{albaran.cliente.nombre}</td>
                        <td>{albaran.destino.poblacion}</td>
                    </tr>
                ))}            
            </tbody>
        </table>
        </>
    )
}