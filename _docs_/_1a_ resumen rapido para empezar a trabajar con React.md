# Resumen rápido para empezar a trabajar con Node.js y React

## Para ponerse a trabajar ¡ya!, enseguida

<https://react.dev/learn/start-a-new-react-project>

### Next.js

Por ejemplo, para empezar con el marco de trabajo Next, solo hay que seguir dos pasos:

- Descargar e instalar Node.js (<https://nodejs.org/es/download>)

- Situarse en la carpeta donde se vaya a crear la carpeta del proyecto  
     y ejecutar el comando `npx create-next-app@latest`

Tras una serie de preguntas:

```
Need to install the following packages:
  create-next-app@13.5.6
Ok to proceed? (y)
√ What is your project named? ... app-next-react
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes     
Creating a new Next.js app in C:\Users\XXXX\Documents\aprendiendo-react\app-next-react\app-next-react.
Using npm.
Initializing project with template: app
Installing dependencies:
- react
- react-dom
- next
Installing devDependencies:
- eslint
- eslint-config-next
added 275 packages, and audited 276 packages in 1m
106 packages are looking for funding
  run `npm fund` for details
found 0 vulnerabilities
Success! Created app-next-react at C:\Users\XXXX\Documents\aprendiendo-react\app-next-react\app-next-react
```

Se generan una serie de archivos básicos para una aplicación React. Además de preparar y preconfigurar toda una serie de herramientas de desarrollo: Eslint, ...

![pantallazo estructura inicial de create-next-app](./imagenes/pantallazo%20estructura%20inicial%20de%20create-next-app.png)

<https://nextjs.org/docs>

### Remix.js

Por ejemplo, para empezar con el marco de trabajo Remix, solo hay que seguir estos pasos:

- Descargar e instalar Node.js (<https://nodejs.org/es/download>)

- Situarse en la carpeta donde se vaya a crear la carpeta del proyecto  
     y ejecutar los comandos
  - `npm install @remix-run/node @remix-run/react @remix-run/serve isbot react react-dom`
  - `npm install --save-dev @remix-run/dev`

Esto prepara toda una serie de herramientas de desarrollo: esbuild, Babel, Prettier,... Luego tenemos que comenzar a crear archivos...

![pantallazo estructura inicial de create-remix-app](./imagenes/pantallazo%20estructura%20inicial%20de%20create-remix-app.png)

<https://remix.run/docs/en/main>

### CRA (create-react-app) esta deprecated

En estos momentos se tiende a usar frameworks como los citados anteriormente. Pero hasta hace poco se utilizaba como punto de partida la base propuesta por Meta, el proyecto CRA: <https://create-react-app.dev/>

Para una explicación detallada de la evolución, leer el apartado "Can I use React without a framework?", al final de la página <https://react.dev/learn/start-a-new-react-project>

Si aún tienes interés en comenzar un proyecto con CRA:

- Descargar e instalar Node.js (<https://nodejs.org/es/download>)

- Situarse en la carpeta donde se vaya a crear la carpeta del proyecto  
     y ejecutar el comando `npx create-react-app nombrecarpetaproyecto`

Esto genera una serie de archivos básicos para una aplicación React. Además de preparar y preconfigurar toda una serie de herramientas de desarrollo: Webpack, Eslint, Babel, Jest,...

![pantallazo estructura inicial de create-react-app](./imagenes/pantallazo%20estructura%20inicial%20de%20create-react-app.png)

## Para entender un poco mejor lo que se está haciendo

Preparar una infraestructura mínima manualmente:

- Descargar e instalar Node.js (<https://nodejs.org/es/download>)

- Crear una carpeta de proyectgo y situarse en ella. Ejecutar el comando `npm init -yes` (para crear un archivo `package.json` básico en esa carpeta)

- Instalar un empaquetador y un servidor de desarrollo.

  - Por ejemplo: `npm install --save-dev esbuild`

      Y, para él, dentro del apartado "scripts" del archivo package.json, añadir estas dos lineas:

      ```
      "start": "esbuild src/index.js --bundle --servedir=public/ --outdir=public/js --loader:.js=jsx --loader:.png=dataurl --loader:.jpg=dataurl",
      "build": "esbuild src/index.js --bundle --minify --outdir=build --loader:.js=jsx --loader:.png=dataurl --loader:.jpg=dataurl",
      ```

  - O por ejemplo: `npm install --save-dev parcel`

      Y, para él, modificar el archivo package.json:

      ```
        "source": "src/index.html",
        "scripts": {
            "start": "parcel",
            "build": "parcel build --dist-dir build",


        },
      ```

- Instalar los dos módulos mínimos de React: `npm install react react-dom`

- Crear manualmente una estructura básica de carpetas y archivos. Por ejemplo:

![pantallazo estructura minima de app React con esbuild](./imagenes/pantallazo%20estructura%20minima%20de%20app%20React%20con%20esbuild.png)

![pantallazo estructura minima de app React con Parcel](./imagenes/pantallazo%20estructura%20minima%20de%20app%20React%20con%20parcel.png)

El contenido mínimo habitual son los archivos básicos:

- `index.html` proporciona el marco estático y arranca React (llama a index.js)

- `index.js` proporciona la raiz (root) para React y carga el primer componente (App.js)

- `App.js` gestiona y carga los demás componentes...

- ...cada componente puede a su vez gestionar y cargar otros componentes.

### **public/index.html** (la página de arranque)

nota: Esta es la primera (y única) página que el cliente se descarga desde el servidor web que sirve la aplicación.

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <title>pruebasYexperimentos</title>
        <!--Este título es para la pestaña del navegador-->
        <meta
            name="description"
            content="Primeros pasos para aprender React..."
        />
        <meta name="author" content="xxxxxxxxxxxxx" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="index.css" />
    </head>

    <body>
        <div id="contenedor-raiz-para-react"></div>
        <script src="js/index.js"></script>
    </body>
</html>
```

nota: Para facilitar la descarga del código que acompaña a la página. Se suele transpilar/empaquetar todo nuestro código Javascript (src), más el código Javascript de React o de otras bibliotecas que hayamos utilizado (node_modules). Generandose un solo archivo: `js/index.js`, que el servidor sirve también desde su parte estática (public).

### **src/index.js** (el script de arranque)

```
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

window.React = React;

const rootContainer = document.getElementById("contenedor-raiz-para-react");
const root = ReactDOM.createRoot(rootContainer);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

nota: Como se ve, la aplicación React se inyecta en el elemento previamente identificado para ello en la página HTML. A partir de ahí, el código Javascript/React toma el control de lo que se va mostrando en la página. (SPA, Single Page Application)

### **src/App.js** (el componente base sobre el que se construye la aplicacion React)

Por ejemplo:

```
import { useState } from "react";

import { HolaMundo } from "./components/ComponentesDePrueba";
import { Saludo } from "./components/ComponentesDePrueba";

export function App() {
    const [numeroDeCaso, setNumeroDeCaso] = useState(5);
    const [textoTranscendente, setTextoTranscendente] = useState("algo");

    return (
        <>
            <p>Aquí va el contenido de la pagina</p>
            <p>
                Se escribe con una mezcla entre código HTML y código Javascript.
                Es decir, se escribe en JSX
            </p>
            <p>
                Por ejemplo {textoTranscendente} mezclado con {numeroDeCaso}
            </p>
            <p>Y mezclado con componentes React. Por ejemplo:</p>
            <Saludo nombre="Benzirpi" apellido="Mirvento" />
            <p>Los componentes pueden aparecer o no...</p>
            {numeroDeCaso > 3 && <HolaMundo />}
        </>
    );
}
```

### Otros componentes

Por ejemplo:

```
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
```

### Resultado con los archivos mínimos indicados

![pantallazo resultado app minima](./imagenes/pantallazo%20resultado%20app%20minima.png)

## Conceptos base para entender React

### COMPONENTs

Los componentes son funciones que devuelven código JSX (mezcla de HTML y {expresiones javascript}), para que React pueda renderizarlo en el browser cuando sea preciso.

Por ejemplo, un componente muy simple:

```
export function Saludo({ nombre, apellido }) {
    return (
        <>
            <p>Buenos dias, {nombre}.</p>
            <p> Nos alegramos de que se apellide {apellido}.</p>
        </>
    );
}
```

### PROPs

Las propiedades son información que un componente pasa a otro. (Es decir, parámetros en las funciones)

Por ejemplo, podriamos usar el componente del ejemplo anterior de esta forma:

```
    <Saludo nombre="Benzirpi" apellido="Mirvento" />
```

### STATE

El estado es información que un componente usa internamente. (Es decir, variables "especiales" que React entiende cuando renderiza componentes.)

Por ejemplo:

```
    const [numeroDeCaso, setNumeroDeCaso] = useState(5);
```

Para definir un estado XXXXXXX, se utiliza el "hook" useState(). Se utiliza tanto para definir la "variable de estado", como para iniciarlizar su valor inicial.

Una vez definido, se utilizan llamadas a setXXXXXXX para cambiar su valor.

### HOOKs

Los anzuelos son funciones especiales que permiten "interceptar y alterar" el flujo de información entre componentes React. Esto permite que funciones "puras" (sin efectos secundarios fuera de ellas) puedan realizar acciones "impuras" (interactuar con el entorno fuera de la función).

nota: En el paradigma de programación funcional, una función pura es aquella cuyo único efecto es devolver un resultado. Resultado que obtiene manipulando solamente los parámetros que recibe y el algoritmo interno que contiene; sin ninguna otra interacción con nada exterior a la función.

Los "hooks" disponibles en React son: <https://react.dev/reference/react>

Por ejemplo, uno muy utilizado es <https://react.dev/reference/react/useEffect>

### STORE, ACTIONs, REDUCER

En aplicaciones muy grandes. El manejo de los estados puede llegar a ser muy complejo y propenso a errores.

Para hacerlo más manejable. Meta aboga por el uso del patron de arquitectura que han denominado Flux.

<https://react.dev/learn/extracting-state-logic-into-a-reducer>

<https://react.dev/reference/react/useReducer>

Por ejemplo, la biblioteca Redux (<https://redux.js.org/>) se inspira en ese patrón. Aunque trabaja de manera algo diferente:

- El estado se almacena en un Store.

- Las interaciones del usuario en la Vista (pantalla) provocan que se despache (dispatch) una Acción a un Reducer.

- El Reducer notifica al Store para que actualice el estado que contiene de acuerdo a la Acción solicitada.

- El Store a su vez notifica a los componentes que sea preciso para que se rendericen y reflejen el nuevo estado en la pantalla.

![Redux data flow](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

## Alternativas a create-react-app

Además del marco de trabajo canónico preconizado por el propio Meta (<https://create-react-app.dev/docs/getting-started>). Existen también otros marcos desarrollados por la comunidad.

Por ejemplo:

- Next (<https://nextjs.org/docs>)

- Gatsby (<https://www.gatsbyjs.com/docs/>)

- Remix (<https://remix.run/docs/en/main/discussion/introduction>)

- etc.

## Un poco de nomenclatura, estructura de carpetas

Cada cual se organiza la aplicación web como le apetece. Y además React es "no-opinionated", es decir, deja a cada cual trabajar como le apetezca.

Pero una serie de carpetas suelen aparecer con bastante frecuencia:

- _public_ (o también suele ser _www_), para el contenido web estático.

    Si hay mucho contenido, se suelen contemplar algunas subcarpetas. Como por ejemplo:

  - _css_ (o también suele ser _styles_), para contenido CSS.
  - _js_ (o también suele ser _javascript_), para contenido Javascript.
  - _img_ (o también suele ser _images_ o _assets_), para imagenes, iconos, fuentes,...
  - _data_
  - _pages_, para contenido HTML.

- _src_, para el código fuente que genera el contenido web dinámico.

    Salvo en aplicaciones muy pequeñas, debajo de _src_ también suele ser necesario algún tipo de estructura de subcarpetas. Por ejemplo, en apps React es típico que haya una subcarpeta _components_ y algunas otras...
