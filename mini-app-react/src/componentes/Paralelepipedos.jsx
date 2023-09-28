import { useState } from "react";

export function Paralelepipedos() {
    
    const [unLado, setUnLado] = useState("");
    const [otroLado, setOtroLado] = useState("");
    const [respuesta, setRespuesta] = useState("");

    function CalcularParalelepipedo() {
        const perimetro = Number(unLado) * 2 + Number(otroLado) * 2;
        const area = Number(unLado) * Number(otroLado);
        setRespuesta("Perimetro = " + perimetro.toString() + "\n" + "Area = " + area.toString());
    }

    function gestionarCambiosEnUnLado(evento) {
        setUnLado(evento.target.value);
        setRespuesta("");
    }
    function gestionarCambiosEnOtroLado(evento) {
        setOtroLado(evento.target.value);
        setRespuesta("");
    }

    return (
        <>
        <h3>Paralelepipedos:</h3>
        <form class="enmarcado_dentro_de_una_caja" onSubmit={CalcularParalelepipedo}>
            <p>
                <label for="unLado">
                    Un lado:
                    <input type="text" value={unLado} onChange={gestionarCambiosEnUnLado} pattern="[0-9]+\.?[0-9]?" size="8" required />
                    <small> (nota: usar separador decimal punto .)</small>
                </label
                >
            </p>
            <p>
                <label for="otroLado">
                    Otro lado:
                    <input type="text" value={otroLado} onChange={gestionarCambiosEnOtroLado} pattern="[0-9]+\.?[0-9]?" size="8" required/>
                </label>
            </p>
            <p>
                <button type="button" onClick={CalcularParalelepipedo}>Calcular perímetro y área</button>
            </p>
            <p>
                <textarea value={respuesta} class="contenedor_de_una_respuesta" readOnly></textarea>
            </p>
        </form>
        </>
    )    
}
