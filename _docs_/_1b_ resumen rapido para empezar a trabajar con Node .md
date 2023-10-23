# Resumen rápido para empezar a trabajar con Node.js

### Introducción

Todos los navegadores web traen un motor para ejecutar código Javascript. Pero si se quiere ejecutar Javascript fuera del navegador, por ejemplo para usar herramientas en un IDE o código en un backend. Se puede recurrir al motor Node.js

Se trata simplemente de descargarlo desde <https://nodejs.org/es/download> e instalarlo en el PC.

Uno de los puntos fuertes de Node.js es su gestión de paquetes y la amplia biblioteca existente: <https://www.npmjs.com/> (nota: Para hojear en la biblioteca, es necesario crearse una cuenta.)

![pantallazo biblioteca npm](./imagenes/pantallazo%20biblioteca%20npm.png)

### Inicializar un proyecto para usar Node

Una vez instalado Node.js en el PC, se puede trabajar con él desde la línea de comandos. (Por ejemplo, en Visual Studio Code, usar el menú 'Ver' 'Terminal' o pulsar las teclas [ctrl][`])

Para inicializar una carpeta donde comenzar a desarrollar. Situarse sobre esa carpeta y lanzar el comando:

```
npm init
```

nota:  npm es el acrónimo de "node package manager"

npm hará una serie de preguntas, para crear un archivo `package.json` en la carpeta.

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

nota: Las preguntas pueden omitir (usando sus valores por defecto) si se usa `npm init -yes`

### Instalar paquetes adiccionales

A partir de aquí, se pueden ir instalando paquetes en nuestra aplicación. Utilizando el comando `npm install`:

- Si el paquete se necesita en desarrollo pero no en explotación. Usar `npm install --save-dev`.

- Si es un paquete muy utilizado, en muchos proyectos diferentes. Usar `npm install --global`. Así está disponible en el PC y no se descargará desde Internet cada vez que se incluya en cada proyecto. (Seguimos teniendo que lanzar `npm install` en cada proyecto, pero la instalación será mucho más rápida.)

Todos los paquetes instalados en un proyecto quedan almacenados en una carpeta dentro de ese proyecto: la carpeta `node-modules`

Esa carpeta se ha de excluir en `.gitignore`, para no subir su contenido al repositorio Git. Ese contenido se puede recuperar automáticamente a partir del archivo `package.json`. Lanzando el comando `npm install`, sin ningún parámetro más, Node volverá a crear la carpeta `node-modules` con todos los módulos citados en `package.json`.

## Un paquete imprescindible: empaquetador y servidor web para pruebas

Algunos de los paquetes más usados para esta función son webpack, parcel o esbuild

nota: En los scripts, el comando `npm start` prepara lo necesario para servir la aplicación y arranca un servidor web de desarrollo para trabajar con ella.

nota: En los scripts, el comando `npm run build` prepara lo necesario para servir la aplicación, lo comprime (minimiza) y genera una carpeta con todo ello. Lista para desplegar la aplicación en un servidor web de producción.

### esbuild

<https://esbuild.github.io/getting-started/#install-esbuild>

```
npm install --save-dev esbuild
```

y luego retocar el archivo package.json para configurar sus scripts:

```
    "scripts": {
        "start": "esbuild src/index.js --bundle --servedir=public/ --outdir=public/js --loader:.js=jsx --loader:.png=dataurl --loader:.jpg=dataurl",
        "build": "esbuild src/index.js --bundle --minify --outdir=build --loader:.js=jsx --loader:.png=dataurl --loader:.jpg=dataurl",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```

nota: esbuild no tiene "live reloader", tras guardar cambios en el código hay que pararlo y rearancar de nuevo)

### parcel

<https://parceljs.org/getting-started/webapp/>

```
npm install --save-dev parcel
npm install --save-dev parcel-plugin-static-files-copy
```

y luego retocar el archivo package.json para configurar sus scripts:

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

### nota: si se va a trabajar con React

React necesita contar con un transpilador para procesar el código JSX y convertirlo en código JS. Esta es una tarea que también desempeñan los empaquetadores. Por ejemplo,

- esbuild soporta JSX directamente.

    <https://esbuild.github.io/content-types/#jsx>

- Parcel soporta JSX directamente (apoyandose en Babel)

    <https://parceljs.org/recipes/react/>

- Webpack trabaja conjuntamente con Babel

    <https://webpack.js.org/configuration/configuration-languages/#babel-and-jsx>

nota:  Babel es un transpilador que realiza muchas otras tareas además de lidiar con JSX.

<https://babeljs.io/>

<https://www.npmjs.com/package/@babel/core>   -   <https://www.npmjs.com/package/babel-cli>

## Un paquete muy útil: comprobador estático de código (linter)

Nos avisa sobre las partes de código mal escritas o que pueden ser problematicas.

### eslint

<https://eslint.org/>

<https://www.npmjs.com/package/eslint>

## Un paquete muy conveniente: formateador automático de código

Nos evita discusiones sobre las normas de estilo.

### prettier

<https://prettier.io/>

<https://www.npmjs.com/package/prettier>
