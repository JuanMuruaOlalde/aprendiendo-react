//Los componentes React no son más que funciones que devuelven JSX

export function HolaMundo() {
    return <p>Hola, mundo.</p>;
}

export function Saludo({ nombre, apellido }) {
    return (
        <>
            <p>Buenos dias, {nombre}.</p>
            <p> Nos alegramos de que se apellide {apellido}.</p>
        </>
    );
}
