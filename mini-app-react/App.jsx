function Saludo({ nombre }) {
    return <p>Hola, {nombre}.</p>;
}

function BloqueDeSaludos() {
    return (
        <div>
            <Saludo nombre="Alice" />
            <Saludo nombre="Bob" />
            <Saludo nombre="Eve" />
        </div>
    );
}

export default function App() {
    return <BloqueDeSaludos />;
}
