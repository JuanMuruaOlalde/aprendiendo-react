# Resumen rápido para empezar a trabajar con Node.js y React

## Resumen del resumen:

### para ponerse a trabajar ¡ya!

Partir de la infraestructura base dada por el proyecto https://create-react-app.dev/

-   Descargar e instalar Node.js (https://nodejs.org/es/download)

-   Situarse en la carpeta donde se vaya a crear la carpeta del proyecto  
    y ejecutar el comando `npx create-react-app nombrecarpetaproyecto`

### para entender un poco mejor lo que se está haciendo...

Preparar una infraestructura mínima manualmente:

-   Descargar e instalar Node.js (https://nodejs.org/es/download)

-   Crear una carpeta nueva y situarse en ella. Ejecutar el comando `npm init -yes` (para crear un archivo `package.json` básico en esa carpeta)

-   Instalar un empaquetador. Por ejemplo: `npm install --save-dev esbuild`

    Y, para él, dentro del apartado "scripts" del archivo package.json, añadir estas dos lineas:

    ```
    "start": "esbuild src/index.jsx --bundle --servedir=public/ --outdir=public/js",
    "build": "esbuild src/index.jsx --bundle --minify --outdir=public/js",
    ```

-   Instalar un linter. Por ejemplo: `npm install --save-dev eslint`

-   Instalar una plataforma de tests unitarios. Por ejemplo `npm install --save-dev jest`

    Y, para ella, dentro del apartado "scripts" del archivo package.json, añadir esta linea:

    ```
    "test": "jest"
    ```

-   Instalar los dos módulos mínimos de React: `npm install react react-dom`

-   Crear una estructura básica de carpetas y archivos. Por ejemplo:

![pantallazo estructura minima de app React](./imagenes/pantallazo%20estructura%20minima%20de%20app%20React.png)

    nota: Mirar al final de este documento, para ver un ejemplo del contenido mínimo de los archivos básicos.

    - index.html proporciona el marco estático y arranca React (llama a index.js)

    - index.js proporciona la raiz (root) para React y carga el primer componente (App.js)

    - App.js gestiona y carga los demás componentes...

    - ...cada componente puede a su vez gestionar y cargar otros componentes.

## Un poco de nomenclatura, estructura de carpetas

Cada cual se organiza la aplicación web como le apetece. Y además React es "no-opinionated", es decir, deja a cada cual trabajar como le apetezca.

Pero una serie de carpetas suelen aparecer con bastante frecuencia:

-   _public_ (o también suele ser _www_), para el contenido web estático.

    Si hay mucho contenido, se suelen contemplar algunas subcarpetas. Como por ejemplo:

    -   _css_ (o también suele ser _styles_), para contenido CSS.
    -   _js_ (o también suele ser _javascript_), para contenido Javascript.
    -   _img_ (o también suele ser _images_ o _assets_), para imagenes, iconos, fuentes,...
    -   _data_
    -   _pages_, para contenido HTML.

-   _src_, para el código fuente que genera el contenido web dinámico.

    Salvo en aplicaciones muy pequeñas, debajo de _src_ también suele ser necesario algún tipo de estructura de subcarpetas. Por ejemplo, en apps React es típico que haya una subcarpeta _components_ y algunas otras...

## La herramienta base: Node.js

Todos los navegadores web traen un motor para ejecutar código Javascript. Pero si se quiere ejecutar Javascript fuera del navegador, por ejemplo herramientas en un IDE o código en un backend. Se puede recurrir al motor Node.js

Se trata simplemente de descargarlo desde https://nodejs.org/es/download e instalarlo en el PC.

Uno de los puntos fuertes de Node.js es su gestión de paquetes y la amplia biblioteca existente: https://www.npmjs.com/ (nota: Para hojear en la biblioteca, es necesario crearse una cuenta.)

![pantallazo biblioteca npm](./imagenes/pantallazo%20biblioteca%20npm.png)

### Comenzar una aplicación web con apoyo de Node.js y npm

Una vez instalado Node.js en el PC, se puede trabajar con él desde la línea de comandos. (Por ejemplo, en Visual Studio Code, usar el menú 'Ver' 'Terminal' o pulsar las teclas [ctrl][`])

Para inicializar una carpeta donde comenzar a desarrollar. estando situado sobre esa carpeta, usar el comando:

```
npm init
```

Hace una serie de preguntas (que se pueden omitir si se usa `npm init -yes`). Y acaba creando un archivo `package.json` en la carpeta.

```
PS C:\Users\zzz\Documents\aprendiendo-react\zz-pruebasYexperimentos> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (zz-pruebasyexperimentos)
version: (1.0.0)
description: Esto es simplemente para hacer pruebas...
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC) MIT
About to write to C:\Users\zzz\Documents\aprendiendo-react\zz-pruebasYexperimentos\package.json:

{
  "name": "zz-pruebasyexperimentos",
  "version": "1.0.0",
  "description": "Esto es simplemente para hacer pruebas...",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT"
}

Is this OK? (yes)
PS C:\Users\zzz\Documents\aprendiendo-react\zz-pruebasYexperimentos>
```

A partir de aquí, se pueden ir instalando más paquetes en nuestra aplicación.

Los paquetes se pueden instalar en la propia aplicación. Quedarán en una carpeta llamada `node-modules`. Esa carpeta se ha de excluir en .gitignore, ya que no merece subirla al repositorio Git (el contenido de esa carpeta se puede recuperar automáticamente simplemente tecleando el comando `npm install`).

Los paquetes también pueden instalarse de forma global (`npm install -global`). Para tenerlos disponibles en el PC y no tener que descargarlos cada vez desde el repositorio npm en Internet.

## Una herramienta imprescindible: empaquetador y servidor web para pruebas

Algunos de los más usados son webpack, parcel o esbuild

### esbuild

https://esbuild.github.io/getting-started/#install-esbuild

```
npm install --save-dev esbuild
```

y luego retocar el archivo package.json para poder arrancar el servidor web de pruebas con el comando `npm start`

```
    "scripts": {
        "start": "esbuild src/index.jsx --bundle --servedir=public/ --outdir=public/js",
        "build": "esbuild src/index.jsx --bundle --minify --outdir=public/js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```

Nota: El comando `npm run build` genera y añade una carpeta js a la carpeta public; para tener así todo el contenido que deberemos desplegar al servidor web de producción.

### parcel

https://parceljs.org/getting-started/webapp/

```
npm install --save-dev parcel
npm install --save-dev parcel-plugin-static-files-copy
```

y luego retocar el archivo package.json para poder arrancar el servidor web de pruebas con el comando `npm start`

```
  "source": "public/index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "staticFiles": {
    "staticPath": "public",
    "watcherGlob": "**"
  }
```

Nota: El comando `npm build`genera una carpeta _build_ con todo el contenido que deberemos desplegar al servidor web de producción.

-pendiente- comprobar que esto funciona bien.

### webpack

-pendiente- escribir este apartado.

## Esqueleto mínimo de una aplicación React para aplicaciones pequeñas

![pantallazo estructura minima de app React](./imagenes/pantallazo%20estructura%20minima%20de%20app%20React.png)

-   Hay que instalar como mínimo los dos paquetes base de React.

    ```
    npm install react react-dom
    ```

-   Se necesita tener un transpilador que procese JSX para convertirlo en js. Por ejemplo,

    -   esbuild lo soporta directamente.
        https://esbuild.github.io/content-types/#jsx

    -   parcel lo soporta directamente.
        https://parceljs.org/recipes/react/

    -   webpack usa Babel.
        https://webpack.js.org/configuration/configuration-languages/#babel-and-jsx

-   Tenemos que montar nosotros mismos las carpetas y archivos base: `index.html`, `index.js` y `App.js`

### **public/index.html** (la página HTML de arranque)

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

Nota: Para facilitar la descarga desde el servidor web que sirve la aplicación. Se suele transpilar/empaquetar todo el códiog Javascript nuestro más el código javascript de React en un solo archivo index.js que se sirve desde la parte estática.

### **src/index.jsx** (el script JS que inicia la parte dinámica)

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

### **App.jsx** (el componente base sobre el que se construye la aplicacion)

Por ejemplo:

```
import { useState } from "react";

import { HolaMundo } from "./components/ComponentesDePrueba";
import { Saludo } from "./components/ComponentesDePrueba";
//nota: Las variables que un componente padre pasa a un componente hijo,
//      es lo que se denomina "propiedades" ("props")

export function App() {
    // nota: Las variables internas de un componente,
    //       es lo que se denomina "variables de estado" ("state")
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
            {unaVariable > 3 && <HolaMundo />}
        </>
    );
}
```

### Otros componentes...

Por ejemplo:

```
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
```

### Resultado con los archivos mínimos indicados:

![pantallazo resultado app minima](./imagenes/pantallazo%20resultado%20app%20minima.png)

## Esqueleto de una aplicación React para aplicaciones grandes

Para aplicaciones grandes, se puede partir desde la infraestructura base proporcionada por el proyecto https://create-react-app.dev/:

```
npx create-react-app nombredemiaplicacion
```

Este comando crea una carpeta _nombredemiaplicacion_ con toda una estructura de subcarpetas y archivos dentro de ella. Junto con multitud de herramientas y bibliotecas Javascript. Quedando listo para desarrollar con React prácticamente cualquier cosa que se nos ocurra.

![pantallazo estructura inicial de create-react-app](./imagenes/pantallazo%20estructura%20inicial%20de%20create-react-app.png)