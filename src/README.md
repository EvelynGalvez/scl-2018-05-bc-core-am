## CIFRADO CÉSAR

## Introducción

Se dice que Julio César usó este tipo de cifrado para enviar instrucciones a sus
generales en los campos de batalla; básicamente, consiste en la sustitución de cada 
desplazandola una cierta cantidad de espacios o posiciones en el alfabeto; antiguamente 
esto se realizaba con el alfabeto latino. Hoy, mediante esta aplicación web podemos 
codificar mensajes usando este método optimizado para nuestro alfabeto.


![caeser-cipher](http://quhist.com/wp-content/uploads/2012/07/Captura-de-pantalla-2012-07-25-a-las-21.12.22.png)

Tal como se aprecia en la imagen, si usáramos un desplazamiento de 3, el alfabeto cifrado
y descifrado sería el siguiente:
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

## Objetivos

El objetivo de esta aplicación es poder cifrar un mensaje ingresado por el usuario,
incluyendo ingresos de palabras tanto en minúsculas o mayúsculas, mediante el 
desplazamiento ingresado también por usuario. 

Adicionalmente, es posible utilizarla para decodificar o descifrar un mensaje ya 
codificado, indicando el número de desplazamiento.  

## Producción

Para la realización de esta aplicación, fue necesario investigar sobre control de flujo,
variables, funciones, objetos, métodos, arreglos y test para probar el código 
desarrollado.

Se llevó a cabo la organización y gestión de tiempo mediante la herramienta Trello.
Para el diseño de la interfaz de usuario, se realizaron entrevistas a 5 personas
después de tener un prototipo que presentar, posteriormente fueron realizadas las 
modificaciones pertinentes obtenidas en esta situación.   

Para comenzar el repositorio personal en Github, se hizo _fork_ y _clone_ al 
repositorio indicado en clases de Laboratoria, también contenido en la plataforma
Github, al ser de código abierto, es posible clonarlo a un repositorio personal
para modificar el contenido; siendo así como se dió inicio a la elaboración de la 
aplicación web.



## Se confeccionaron los siguientes 5 archivos:

* README.md: documento que contiene información sobre el proyecto.
* index.html: Sin index, no hay aplicación web. Es la página principal que
accederá a nuestra aplicación y es aquí donde "se ve" el codigo funcionar, muestra
lo realizado funcionando.
* cipher.js: documento donde se encuentra el objeto y los métodos para dejar funcional
la aplicación. En su contenido se encuentra el método encode(initialToCode, displacementCode) 
y decode (initialToDecode, displacementDecode); encargados de la codificación y 
decodificación respectivamente.
* index.js: documento en que se enlaza el objeto con sus métodos y el index.
* style.css: documento en que se detallan las especificaciones de diseño de la aplicación,
como colores de fondo, tipos de fuente y posicionamiento de elementos.

## Entrega
El proyecto será subido a Github mediante la siguiente línea de comandos:
cd (carpeta contenedora) > git init > git add . > git commit -m "mensajeDeCommit" > git push origin master 
Posteriormente será desplegado usando GH pages.


## Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo
   privado y te darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :rocket:

***

## Tips / Pistas

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

También te compartimos más información de lo que Michelle te ha explicado en el
video anterior:

* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Estos son algunos tips que te pueden ayudar en la organización y realización de
tu proyecto, teniendo en cuenta el desarrollo de tus _habilidades blandas_:

* Para comenzar realiza una organización de tu proyecto, ve con qué recursos
  cuentas y el tiempo que tienes para completarlo.
* Si hay algo que no sepas pregunta e intenta resolverlo; puedes comenzar con
  una búsqueda en google, luego consultando a tu squad y por último a tus
  coaches. Si hay algo que yo no sé, otro me puede ayudar. El aprendizaje es un
  proceso colaborativo.
* Una vez que empieces a avanzar pide feedback, tus compañeras pueden tener
  excelentes ideas o formas de resolver el proyecto que te pueden ayudar.
* Cuando te topes con un problema, busca alternativas, y para eso consulta
  diferentes fuentes.
* Si ya te ves invirtiendo mucho tiempo en detalles debes saber priorizar y
  seguir con lo más importante, los proyectos tienen tiempo limitado y debes
  saber administrarlo.
* Trabaja en equipo, pregunta e intenta completar el proyecto sin rendirte.
* Prepara tu presentación, si no logro comunicar mis ideas a los demás no se
  podrá apreciar todo el esfuerzo y trabajo que invertiste.