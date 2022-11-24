# Funciones útiles de JavaScript

Bienvenido! Este proyecto nació bajo el deseo de guardar gran parte de las funciones de js que ocasionalmente creo por necesidad en otros proyectos. La idea es ir agrandando este proyecto cada vez más con el paso del tiempo, con el propósito de ayudarme tanto a mí como a otros programadores de ser posible.

## Comenzando 🚀

Descarga el archivo comprimido .zip desde el botón verde "code" o haz click [aquí](https://github.com/Ale6100/Funciones-utiles-de-javascript/archive/refs/heads/main.zip)

Mira **Despliegue** para saber cómo desplegar el proyecto en tu computadora y **Funciones** para conocer las funciones actuales.

### Pre-requisitos 📋

Necesitas tener previamente descargado e instalado [NodeJs](https://nodejs.org/).

### Instalación 🔧

Ninguna!

## Despliegue 📦

Puedes simplemente copiarte las funciones que prefieras y llevarlas a tu propio código, pero si aún así deseas correr este proyecto puedes ejecutar el script con el comando ```npm start```

## Funciones 🤓

Aquí presento todas las funciones actuales de mi código.

### Funciones para obtener / modificar números

* ```probabilidadDeN(n)```
Recibe un número entre 0 y 100 (como number o string). Devuelve ```true``` el ```n%``` de las veces.

* ```numeroEnteroAlAzar(a, b)```
Recibe dos números enteros y devuelve un número entero al azar entre ellos.

* ```numeroAlAzar(a, b)```
Recibe dos números enteros y devuelve un número al azar entre ellos.

* ```esDivisor(n, N)```
Recibe dos números (como number o string). Si ```N``` es divisor de ```n```, devuelve ```true```

* ```divisores(n)```
Recibe un número entero (como number o string) y devuelve un array con todos sus divisores.

* ```factoresMasCercanos(n)```
Recibe un número natural (como number o string) y devuelve un array con dos valores ```[a, b]``` tal que ```n=a*b```, donde ```a``` y ```b``` son los valores más cercanos posibles.

* ```redondear(n)```
Recibe un número (como number o string) y lo devuelve redondeado a dos decimales.

* ```factorial(n)```
Recibe un número natural o cero (como number o string). Devuelve el factorial de dicho número.

* ```esPar(n)```
Recibe un número (como number o string). Devuelve ```true``` si es par, pero ```false``` si es impar.

### Funciones para obtener / modificar arrays

* ```elementoAlAzar(array)```
Recibe un array y devuelve un elemento al azar.

* ```arange(origen, final, espaciado = 1)```
Recibe tres números. El tercero debe ser positivo. Devuelve un array de números desde el origen hasta el final (sin incluir) solicitado, considerando un espaciado entre valores consecutivos. Si no se pide el espaciado se sobreentiende que es de 1.

* ```linspace(origen, final, densidad)```
Recibe tres números. Los primeros dos deben ser distintos. El tercero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final solicitado, considrando la densidad (cantidad) de valores pedidos.

* ```mezclar(array)```
Recibe un array y lo devuelve mezclado.

* ```obtenerNElementos(array, n)```
Recibe un array y un número natural ```n``` (como number o string). Devuelve ```n``` elementos al azar del array.

### Funciones para obtener / modificar strings

* ```stringAleatorio(n)```
Recibe un número ```n``` natural (como number o string), devuelve un string aleatorio de longitud ```n```.

### Extras

* ```colorRandom()```
Devuelve un color rgb al azar

Estoy abierto a sugerencias!

## Construido con 🛠️

* JavaScript
* [NodeJs](https://nodejs.org/)

## Autores ✒️

* **Alejandro Portaluppi** - [LinkedIn](https://www.linkedin.com/in/alejandro-portaluppi/)