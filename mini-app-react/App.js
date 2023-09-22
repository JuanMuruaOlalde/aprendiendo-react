export default function Saludo({ nombre }) {
    return (
        <p>Hola, {nombre}.</p>
    )
}

export default function BloqueDeSaludos() {
    return (
        <div>
            <Saludo nombre="Alice"/>
            <Saludo nombre="Bob" />
            <Saludo nombre="Eve" />
        </div>
    )
}

