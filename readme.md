# codigos-utiles-ap | Mi primer módulo de JavaScript subido a npm

Bienvenido! Este proyecto nació bajo el deseo de guardar y publicar en npm gran parte de las funciones de js que ocasionalmente creo por necesidad en otros proyectos. La idea es ir agrandando este módulo cada vez más con el paso del tiempo, con el propósito de ayudarme tanto a mí como a otros programadores de ser posible.

Revisa la documentación regularmente [aquí](https://www.npmjs.com/package/codigos-utiles-ap) para chequear que utilizas la última versión.

### Pre-requisitos 📋

Necesitas tener previamente descargado e instalado [NodeJs](https://nodejs.org/).

**Por ahora sólo puede usarse en proyectos backend**

### Instalación 🔧

En la terminal, escribe `npm install codigos-utiles-ap`

## Uso 📦

Aconsejo utilizar el `import` para importar el módulo. Para que esto funcione recuerda tener colocado `"type": "module"` en el package.json.

Luego importa el módulo con el nombre que más te guste antes de utilizarlo, por ejemplo:

`import codigosap from "codigos-utiles-ap"`

Desde este momento, `codigosap` es un objeto que contiene como métodos a todas las funciones descritas en la sección **Funciones**.

Por ejemplo, si queremos obtener 3 elementos al azar del array `[-50, 0, -3, "40", "josé", true, ["Kilo", 3]]`, simplemente escribimos:

`const elementos = codigosap.obtenerNElementos([-50, 0, -3, "40", "josé", true, ["Kilo", 3]], 3)`

Alternativamente puedes importar las funciones usando desestructuración:

`import { obtenerNElementos } from "codigos-utiles-ap"`

`const elementos = obtenerNElementos([-50, 0, -3, "40", "josé", true, ["Kilo", 3]], 3)`

## Funciones 🤓

Aquí presento todas las funciones actuales del módulo, que pueden ser llamados tal como se describió anteriormente.

Consejo: En tu editor de código favorito pasa el mouse sobre ellas para obtener una breve explicación que te diga cómo deben ser usadas!

### Funciones para obtener / modificar números

* `probabilidadDeN(n)`
Recibe un número `n` entre `0` y `100`. Devuelve `true` el `n%` de las veces.

* `numeroAlAzar(num1, num2)`
Recibe dos números `num1` y `num2`. Devuelve un número al azar entre ellos (no incluye al `num2`).

* `numeroEnteroAlAzar(num1, num2`
Recibe dos números enteros y devuelve un número entero al azar entre ellos.

* `esDivisor(num1, num2)`
Recibe dos números. Si `num2` es divisor de `num1` entonces devuelve `true` (es decir, si `num1/num2` tiene resto cero).

* `divisores(num)`
Recibe un número entero y devuelve un array con todos sus divisores.

* `factoresMasCercanos(n)`
Recibe un número natural `n` y devuelve un array con dos valores `[a, b]` tal que `n=a*b`, donde `a` y `b` son los valores más cercanos posibles.

* `redondear(n)`
Recibe un número y lo devuelve redondeado a dos decimales.

* `factorial(n)`
Recibe un número natural o cero. Devuelve el factorial de dicho número.

* `esPar(n)`
Recibe un número. Devuelve `true` si es par, pero `false` si es imparr.

### Funciones para obtener / modificar arrays

* `elementoAlAzar(array)`
Recibe un array y retorna un elemento al azar.

* `mezclarArray(array)`
Recibe un array y lo devuelve mezclado.

* `obtenerNElementos(array, n)`
Recibe un array y un número natural `n`. Devuelve `n` elementos al azar del array.

* `arange(origen, final, espaciado = 1)`
Recibe tres números. El tercero es opcional pero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final (sin incluir) solicitado, considerando el espaciado especificado.

* `linspace(origen, final, densidad)`
Recibe tres números. Los primeros dos deben ser distintos. El tercero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final solicitado, considrando la densidad (cantidad) de valores especificados.

* `ubicacionNElementosMasGrandes(array, n)` 
Recibe un array de números y un número natural `n`. Devuelve un array de números enteros con las posiciones de los `n` elementos más grandes del array original, o más si hay un empate en los últimos puestos.

### Funciones para obtener / modificar strings

* `stringAleatorio(n)`
Recibe un número `n` natural, devuelve un string con carácteres aleatorios de longitud `n`.

### Funciones para obtener / modificar objetos

* `arrayAObjeto(array)`
Recibe un array cuyos elementos son arrays dobles con claves y valores, y retorna un objeto cuyas propiedades son las claves y sus valores son los valores correspondientes de los arrays dobles del array de entrada.

### Extras

* `colorRandom()`
Retorna un color RGB al azar

* `waitFor(time)`
Hace que tu código asincrónico espere un tiempo (en milisegundos) que le pases como parámetro antes de continuar la ejecución.

Estoy abierto a sugerencias!

## Construido con 🛠️

* JavaScript
* [NodeJs](https://nodejs.org/)

## Autores ✒️

* **Alejandro Portaluppi** - [LinkedIn](https://www.linkedin.com/in/alejandro-portaluppi/)
