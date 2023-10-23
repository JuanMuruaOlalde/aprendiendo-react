# Resumen rápido para empezar a trabajar con Node.js

### Introducción

Todos los navegadores web traen un motor para ejecutar código Javascript. Pero si se quiere ejecutar Javascript fuera del navegador, por ejemplo para usar herramientas en un IDE o código JS en un backend. Se puede recurrir al motor de ejecución Node.js

Este motor se ha de instalar en el equipo donde se quiera utilizar. El instalador se puede descargar desde <https://nodejs.org/es/download>.

Una vez instalado Node.js en el equipo, se suele trabajar con él desde la línea de comandos. (Por ejemplo, en Visual Studio Code, usar el menú 'Ver' 'Terminal' o pulsar las teclas [ctrl][`])

Uno de los puntos fuertes de Node.js es su gestor de paquetes (npm) y la amplia biblioteca que lo respalda: <https://www.npmjs.com/> (nota: Para hojear en la biblioteca, es necesario crearse una cuenta.)

![pantallazo biblioteca npm](./imagenes/pantallazo%20biblioteca%20npm.png)

nota:  `npm` es el acrónimo de "node package manager"

### Inicializar un proyecto para usar Node

Para inicializar una carpeta de proyecto para trabajar con Node. Situarse sobre esa carpeta y lanzar el comando:

```
npm init
```

Este comando hace una serie de preguntas y termina creando un archivo `package.json` en la carpeta.

```
PS C:\Users\zzz\Documents\aprendiendo-node\zz-pruebasYexperimentos> npm init
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
About to write to C:\Users\zzz\Documents\aprendiendo-node\zz-pruebasYexperimentos\package.json:

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
PS C:\Users\zzz\Documents\aprendiendo-node\zz-pruebasYexperimentos>
```

nota: Las preguntas se pueden omitir (y se usarán valores por defecto al crear `package.json`). Añadir el parámetro -yes al comand: `npm init -yes`

### Instalar paquetes adiccionales

A partir de aquí, Node permite ir instalando paquetes en el proyecto. Para ello, se utiliza el comando `npm install  nombredelpaquete`. Cada paquete instalado queda registrado en el archivo `package.json`.

Hay un par de parámetros importantes:

- Si el paquete se usa solo en desarrollo pero no en producción: `npm install --save-dev  nombredelpaquete`. Así  no se incluirá en la imagen final para desplegar en producción.

- Si es un paquete que vamos a utilizar en muchos proyectos diferentes: `npm install --global  nombredelpaquete`. Así está disponible en el PC y no se descargará desde Internet cada vez que se incluya en cada proyecto. (Seguimos teniendo que lanzar `npm install  nombredelpaquete` en cada proyecto, pero cada instalación individual será más rápida.)

En la carpeta `node-modules` se guarda una copia local de los paquetes instalados (más sus dependencias).

El contenido de esa carpeta no se sube al repositorio Git. Es decir, se ha de excluir en `.gitignore`. Ya que se puede recuperar automáticamente. Lanzando el comando `npm install`, sin ningún parámetro. Node volverá a (re)crear toda la carpeta `node-modules` para ese proyecto, con todos los módulos citados en su archivo `package.json`.

## Un paquete imprescindible: empaquetador (bundler)

Un empaquetador, entre otras tareas, se encarga de:

- Gestionar (y convertir) los paths de acceso a los paquetes contenidos en `node-modules`. En nuestro código podemos referirnos a ellos solo con el nombre del paquete.

- Gestionar (y convertir, si es necesario) los distintos tipos de archivos usados en un proyecto: html, css, js, jsx, scss, ts, png, svg,...

- Procurar un servidor web de desarrollo, para pruebas. Normalmente suele ser un servidor "live reloader", que refresca automáticamente lo servido al cliente según se modifica/guarda algo en el proyecto.

- Compilar y generar una imagen compactada, minimizada y optimizada de todo el proyecto, para desplegar la aplicación en un servidor de producción. De esta forma, se sirve a los clientes finales una versión con menos archivos a descargarse.

Algunos de los paquetes empaquetadores más populares son: webpack, parcel o esbuild

nota: En los scripts dentro de `package.json`, el comando `npm start`, adecuadamente configurado, se utiliza para  servir la aplicación en desarrollo/pruebas.

nota: En los scripts dentro de `package.json`, el comando `npm run build`, adecuadamente configurado, se utiliza para compactar/minimizar/optimizar todo y generar una carpeta con la aplicación, para desplegarla en un servidor web de producción.

nota: A partir del archivo inicial (por ejemplo, index.html) el empaquetador suele ir descubriendo por sí mismo toda la estructura de la aplicación y lo que esta realmente utiliza. Para ello se vale de las etiquetas `<link>, <script>,...`, de las sentencias `require, import,...`, etc.

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


    },
```

nota: Con la configuración indicada. El archivo index.html y el resto de contenido estático irá en una carpeta `public` dentro del proyecto. El contenido dinámico y nuestro código irá en una carpeta `src`.

aviso: El servidor web integrado en esbuild no tiene "live reloader". Cada vez que se guardan cambios en el código hay que parar el servidor (pulsando las teclas [ctrl][c]) y rearrancarlo de nuevo (volviendo a lanzar `npm start`).

### Parcel

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
        "start": "parcel",
        "build": "parcel build --dist-dir build",


    },
```

### Webpack

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
      "build": "webpack --mode production",


  },
```

-pendiente- comprobar que eso es así y que funciona.

### nota: si se va a trabajar con React

React necesita contar con un transpilador para procesar el código JSX y convertirlo en código JS. Esta es una tarea que también desempeñan los empaquetadores. Por ejemplo,

- esbuild soporta JSX directamente.

    <https://esbuild.github.io/content-types/#jsx>

- Parcel soporta JSX directamente (apoyandose en Babel)

    <https://parceljs.org/recipes/react/>

- Webpack trabaja conjuntamente con Babel

    <https://webpack.js.org/configuration/configuration-languages/#babel-and-jsx>

nota:  Babel es un transpilador Javascript que realiza muchas otras tareas además de lidiar con JSX.

<https://babeljs.io/>

<https://www.npmjs.com/package/@babel/core>   -   <https://www.npmjs.com/package/babel-cli>

## Un paquete muy útil: comprobador estático (linter)

Un linter se encarga de revisar el código y nos avisa sobre las partes de código mal escritas o que pueden ser problematicas.

### eslint

<https://eslint.org/>

<https://www.npmjs.com/package/eslint>

Se instala con el comando:

```
npm install --save-dev eslint
```

## Un paquete muy conveniente: formateador

Un formateador nos evita discusiones sobre las normas de estilo. Ya que reescribe nuestros archivos para homogeneizar su estilo y que todos queden según esté configurado en el formateador.

### prettier

<https://prettier.io/>

<https://www.npmjs.com/package/prettier>

Se instala con el comando:

```
npm install --save-dev prettier
```
