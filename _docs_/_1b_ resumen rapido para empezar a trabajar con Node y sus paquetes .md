# Resumen rápido para empezar a trabajar con Node.js

### Introducción

Todos los navegadores web traen un motor para ejecutar código Javascript. Pero si se quiere ejecutar Javascript fuera del navegador, por ejemplo para usar herramientas en un IDE o código JS en un backend. Se puede recurrir al motor Node.js

Se ha de instalar en el PC. El instalador se puede descargar desde <https://nodejs.org/es/download>.

Una vez instalado Node.js en el PC, se puede trabajar con él desde la línea de comandos. (Por ejemplo, en Visual Studio Code, usar el menú 'Ver' 'Terminal' o pulsar las teclas [ctrl][`])

Uno de los puntos fuertes de Node.js es su gestor de paquetes y la amplia biblioteca existente: <https://www.npmjs.com/> (nota: Para hojear en la biblioteca, es necesario crearse una cuenta.)

![pantallazo biblioteca npm](./imagenes/pantallazo%20biblioteca%20npm.png)

nota:  `npm` es el acrónimo de "node package manager"

### Inicializar un proyecto para usar Node

Para inicializar una carpeta donde comenzar a desarrollar. Situarse sobre esa carpeta y lanzar el comando:

```
npm init
```

Hace una serie de preguntas y termina creando un archivo `package.json` en la carpeta.

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

nota: Las preguntas pueden omitir (usando sus valores por defecto), si se usa `npm init -yes`

### Instalar paquetes adiccionales

A partir de aquí, se pueden ir instalando paquetes en el proyecto. Utilizando el comando `npm install`:

- Si el paquete se necesita en desarrollo pero no en explotación. Usar `npm install --save-dev`.

- Si es un paquete que vamos a utilizar en muchos proyectos diferentes. Usar `npm install --global`. Así está disponible en el PC y no se descargará desde Internet cada vez que se incluya en cada proyecto. (Seguimos teniendo que lanzar `npm install` en cada proyecto, pero la instalación será mucho más rápida.)

Todos los paquetes instalados en un proyecto quedan almacenados en una carpeta dentro de ese proyecto: la carpeta `node-modules`

Esa carpeta se ha de excluir en `.gitignore`, para no subir su contenido al repositorio Git. Ese contenido se puede recuperar automáticamente a partir del archivo `package.json`. Lanzando el comando `npm install`, sin ningún parámetro. Node volverá a (re)crear la carpeta `node-modules` con todos los módulos citados en `package.json`.

## Un paquete imprescindible: empaquetador (bundler)

Entre otras tareas, se encarga de:

- Generar una imagen compactada, minimizada y optimizada de todo el proyecto, para desplegar la aplicación en un servidor de producción. De esta forma, se sirve a los clientes una versión con menos archivos a descargarse.

- Gestionar (y convertir, si es necesario) los distintos tipos de archivos usados en un proyecto: html, css, js, jsx, scss, ts, png, svg,...

- Procurar un servidor web de desarrollo, para pruebas.

Algunos de los paquetes empaquetadores más populares son: webpack, parcel o esbuild

nota: En los scripts dentro de `package.json`, el comando `npm start` se utiliza para preparar lo necesario para servir la aplicación y arrancar un servidor web de desarrollo/pruebas.

nota: En los scripts dentro de `package.json`, el comando `npm run build` se utiliza para preparar lo necesario para servir la aplicación, compactar/minimizar/optimizar y generar una carpeta con todo ello; lista para desplegarla en un servidor web de producción.

nota: A partir del archivo inicial (por ejemplo, index.html) el empaquetador suele ir descubriendo todo lo demás que necesita la aplicación. Para ello se vale de las etiquetas `<link>, <script>,...`, de las sentencias `require, import,...`, etc.

### esbuild

<https://esbuild.github.io/getting-started/#install-esbuild>

<https://esbuild.github.io/>

<https://github.com/evanw/esbuild>

<https://www.npmjs.com/package/esbuild>

Se instala con el comando:

```
npm install --save-dev esbuild
```

y luego en el archivo package.json, añadir:

```
    "scripts": {
        "start": "esbuild src/index.js --bundle --servedir=public/ --outdir=public/js --loader:.js=jsx --loader:.png=dataurl --loader:.jpg=dataurl",
        "build": "esbuild src/index.js --bundle --minify --outdir=build --loader:.js=jsx --loader:.png=dataurl --loader:.jpg=dataurl",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```

nota: el servidor web de esbuild no tiene "live reloader", tras guardar cambios en el código hay que parar el servidor (pulsando las teclas [ctrl][c]) y rearrancarlo de nuevo (volviendo a lanzar `npm start`)

### parcel

<https://parceljs.org/getting-started/webapp/>

<https://parceljs.org/>

<https://www.npmjs.com/package/parcel>

Se instala con el comando:

```
npm install --save-dev parcel
```

y luego en el archivo package.json,

quitar:

```
  "main": "index.js",
```

añadir:

```
    "source": "src/index.html",
    "scripts": {
        "start": "parcel src/index.html",
        "build": "parcel build src/index.html",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```

nota: parcel suele dejar el paquete para producción en la carpeta `dist`.

### webpack

<https://webpack.js.org/>

<https://www.npmjs.com/package/webpack>

Se instala con el comando:

```
npm install --save-dev webpack webpack-cli
```

y luego en el archivo package.json,

quitar:

```
  "main": "index.js",
```

añadir:

```
  "private": true,
  "scripts": {
      "start": "webpack-dev-server --mode development --open --hot",
      "build": "webpack --mode production"
      "test": "echo \"Error: no test specified\" && exit 1"
  },
```

-pendiente- comprobar que eso funciona.

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

## Un paquete muy útil: comprobador estático (linter)

Nos avisa sobre las partes de código mal escritas o que pueden ser problematicas.

### eslint

<https://eslint.org/>

<https://www.npmjs.com/package/eslint>

Se instala con el comando:

```
npm install --save-dev eslint
```

## Un paquete muy conveniente: formateador

Nos evita discusiones sobre las normas de estilo.

### prettier

<https://prettier.io/>

<https://www.npmjs.com/package/prettier>

Se instala con el comando:

```
npm install --save-dev prettier
```
