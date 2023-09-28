import { useState } from "react";

export function Paralelepipedos() {
    
    const [unLado, setUnLado] = useState("");
    const [errorEnUnLado, setErrorEnUnLado] = useState("");
    const [otroLado, setOtroLado] = useState("");
    const [errorEnOtroLado, setErrorEnOtroLado] = useState("");
    const [respuesta, setRespuesta] = useState("");

    function CalcularParalelepipedo() {
        const perimetro = Number(unLado) * 2 + Number(otroLado) * 2;
        const area = Number(unLado) * Number(otroLado);
        setRespuesta("Perimetro = " + perimetro.toString() + "\n" + "Area = " + area.toString());
    }

    let comprobarSiEsNumero = new RegExp("^[0-9]+[.]?[0-9]*$");
    const MENSAJE_ERROR_NOESNUMERO = "Se ha de teclear un número. (Y el separador decimal, si lo hay, ha de ser punto .)";

    function gestionarCambiosEnUnLado(evento) {
        setRespuesta("");
        setUnLado(evento.target.value);
        if (comprobarSiEsNumero.test(evento.target.value)) {
            setErrorEnUnLado("");
        } else {
            setErrorEnUnLado(MENSAJE_ERROR_NOESNUMERO);
        }
    }
    function gestionarCambiosEnOtroLado(evento) {
        setRespuesta("");
        setOtroLado(evento.target.value);
        if (comprobarSiEsNumero.test(evento.target.value)) {
            setErrorEnOtroLado("");
        } else {
            setErrorEnOtroLado(MENSAJE_ERROR_NOESNUMERO);
        }
    }

    return (
        <>
        <h3>Paralelepipedos:</h3>
        <form class="enmarcado_dentro_de_una_caja" onSubmit={CalcularParalelepipedo}>
            <p>
                <label for="unLado">
                    Un lado:
                    <input type="text" value={unLado} onChange={gestionarCambiosEnUnLado} size="8" />
                </label>
                <div style={{color: "red"}}>{errorEnUnLado}</div>
            </p>
            <p>
                <label for="otroLado">
                    Otro lado:
                    <input type="text" value={otroLado} onChange={gestionarCambiosEnOtroLado} size="8" />
                </label>
                <div style={{color: "red"}}>{errorEnOtroLado}</div>
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
