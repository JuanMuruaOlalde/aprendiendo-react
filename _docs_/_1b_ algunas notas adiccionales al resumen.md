# Resumen rápido para empezar a trabajar con Node.js y React

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

Se trata simplemente de descargarlo desde <https://nodejs.org/es/download> e instalarlo en el PC.

Uno de los puntos fuertes de Node.js es su gestión de paquetes y la amplia biblioteca existente: <https://www.npmjs.com/> (nota: Para hojear en la biblioteca, es necesario crearse una cuenta.)

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

A partir de aquí, se pueden ir instalando más paquetes en nuestra aplicación. Utilizando el comando `npm install` (npm => Node Package Manager).

Los paquetes se suelen instalar en la propia aplicación. Quedarán en una carpeta llamada `node-modules`. Esa carpeta se ha de excluir en .gitignore, ya que no merece subirla al repositorio Git (El contenido de esa carpeta se puede recuperar automáticamente teniendo el archivo `package.json`. Solo hay que teclear el comando `npm install`, sin ningún parámetro más).

Si se desea, algún paquete puede instalarse de forma global (`npm install -global`). Para tenerlo disponible en el PC y no tener que descargarlo cada vez desde el repositorio npm en Internet.

Algunos paquetes se necesitan en tiempo de desarrollo pero no tras desplegar la aplicación en explotación. Se puede indicar este hecho con `npm install --save-dev`. Así se ahorra trabajo al empaquetador cuando prepara el despliegue.

## Una herramienta imprescindible: un empaquetador y servidor web para pruebas

Algunos de los más usados son webpack, parcel o esbuild

### esbuild

<https://esbuild.github.io/getting-started/#install-esbuild>

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

<https://parceljs.org/getting-started/webapp/>

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

### nota:

Para trabajar con React se necesita tener un transpilador que procese código JSX para convertirlo en código JS Por ejemplo,

    -   esbuild lo soporta directamente.
        <https://esbuild.github.io/content-types/#jsx>

    -   parcel lo soporta directamente.
        <https://parceljs.org/recipes/react/>

    -   webpack usa Babel.
        <https://webpack.js.org/configuration/configuration-languages/#babel-and-jsx>
