## 1. CIFRADO CÉSAR


## 1.1. Introducción

Se dice que Julio César usó este tipo de cifrado para enviar instrucciones a sus
generales en los campos de batalla; básicamente, consiste en la sustitución de cada 
letra desplazándola una cierta cantidad de espacios o posiciones en el alfabeto; 
antiguamente esto se realizaba con el alfabeto latino. Hoy, mediante esta aplicación web 
podemos codificar mensajes usando este método optimizado para nuestro alfabeto.

![caeser-cipher](http://quhist.com/wp-content/uploads/2012/07/Captura-de-pantalla-2012-07-25-a-las-21.12.22.png)

Tal como se aprecia en la imagen, si usáramos un desplazamiento de 3, el alfabeto cifrado
y descifrado sería el siguiente:
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C


## 1.2. Objetivos

El objetivo de esta aplicación es poder cifrar un mensaje ingresado por el usuario,
incluyendo ingresos de palabras tanto en minúsculas o mayúsculas, mediante el 
desplazamiento ingresado también por usuario. 

Adicionalmente, es posible utilizarla para decodificar o descifrar un mensaje ya 
codificado, indicando el número de desplazamiento.  


## 1.3. Producción

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


## 1.4. Se confeccionaron los siguientes 5 archivos:

* README.md: documento que contiene información sobre el proyecto.
* index.html: Sin index, no hay aplicación web. Es la página principal que
accederá a nuestra aplicación y es aquí donde "se ve" el codigo funcionar, muestra
lo realizado funcionando.
* cipher.js: documento donde se encuentra el objeto y los métodos para dejar funcional
la aplicación. En su contenido se encuentra el método encode (initialToCode, displacementCode) 
y decode (initialToDecode, displacementDecode); encargados de la codificación y 
decodificación respectivamente.
* index.js: documento en que se enlaza el objeto con sus métodos y el index.
* style.css: documento en que se detallan las especificaciones de diseño de la aplicación,
como colores de fondo, tipos de fuente y posicionamiento de elementos.


## 1.5. Entrega
El proyecto será subido a Github mediante la siguiente línea de comandos:
cd (carpeta contenedora) > git init > git add . > git commit -m "mensajeDeCommit" > git push origin master 
Posteriormente será desplegado usando GH pages.


## 1.6. Cómo usar (modo desarrollador)

### 1.6.1. Herramientas

1- Editor de texto, ejemplo Visual Studio Code.  
2- Intérprete de comandos, dependiendo el sistema operativo que tengas. En este caso, para Windows, 
se utilizó Git Bash.  
3- Debes instalar también Node.js

### 1.6.2. Ejecución
1- Utilizando la plataforma Github, haz Fork al repositorio que contiene la aplicación. Esto hará
que tengas una copia de este repositorio en tu cuenta Github.  
2- Utilizando el interprete de comandos, clona tu repositorio (copia del original en tu cuenta).  
3- Instala todo lo correspondiente a la aplicación mediante el comando npm install.  
4- Con el comando npm test, puedes realizar las pruebas y ver si pasan los test que se han incluido 
previamente en el proyecto.


## 2. Contacto
Dudas o sugerencias: evelyn.galvez.p@gmail.com