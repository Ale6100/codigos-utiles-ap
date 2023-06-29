# codigos-utiles-ap | Mi primer módulo subido a npm

<div align="center">
    <a href="https://www.npmjs.com/package/codigos-utiles-ap" target="_blank">
        <img src="https://img.shields.io/npm/v/codigos-utiles-ap.svg" alt="npm version">
        <img src="https://img.shields.io/github/last-commit/ale6100/codigos-utiles-ap.svg" alt="Github último commit">
        <img src="https://img.shields.io/npm/dm/codigos-utiles-ap.svg?label=npm%20downloads" alt="npm descargas">
    </a>
    <a href="https://www.jsdelivr.com/package/npm/codigos-utiles-ap" target="_blank">
        <img src="https://data.jsdelivr.com/v1/package/npm/codigos-utiles-ap/badge" alt="Descargas mensuajes jsDelivr">
    </a>
</div>

Bienvenido! Este proyecto nació bajo el deseo de guardar y publicar en npm algunas de las funciones de JavaScript y TypeScript que ocasionalmente creo por necesidad en otros proyectos. La idea es ir agrandando este módulo cada vez más con el paso del tiempo, con el propósito de ayudarme tanto a mí como a otros programadores de ser posible.

Revisa la documentación regularmente [aquí](https://www.npmjs.com/package/codigos-utiles-ap) para chequear que utilizas la última versión.

### Instalación y uso 🔧

* Para instalar el paquete, ejecuta en la terminal:

```
npm install codigos-utiles-ap
```

Importa el módulo con el nombre que más te guste antes de utilizarlo, por ejemplo:

```js
import * as codigosap from "codigos-utiles-ap"
```

> Nota: Hasta la versión 1.10.1 recomendaba importarlo de la siguiente manera: import codigosap from "codigos-utiles-ap", pero tuve que cambiar el método de importación para no agrandar demasiado el código fuente.

Desde este momento, `codigosap` es un objeto que contiene como métodos a todas las funciones descritas en la sección [Funciones](#funciones-).

Por ejemplo, si tenemos el siguiente array

```js
const array = [-50, 0, -3, "40", "josé", true, ["Kilo", 7]]
```

y queremos obtener tres elementos al azar, simplemente escribimos:

```js
const elementos = codigosap.obtenerNElementos(array, 3)
```

Alternativamente puedes importar las funciones usando desestructuración:

```js
import { obtenerNElementos } from "codigos-utiles-ap"

const elementos = obtenerNElementos(array, 3)
```

* Si tienes la posibilidad, también puedes instalar el módulo adhiriendo el siguiente link jsdelivr CDN a tu archivo HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/codigos-utiles-ap/dist/index_CDN.min.js"></script>
```

⚠ No recomiendo esta última opción ya que no contiene sugerencias de autocompletado ni documentación.

## Funciones 🤓

A continuación se muestran todas las funciones actuales del módulo que pueden ser llamadas tal como se describió anteriormente. Si pasas el cursor del mouse sobre ellas en tu editor de código favorito, obtendrás una breve explicación sobre cómo deben ser usadas.

Si lo prefieres, también tienes la opción de acceder al archivo principal [index.ts](src/index.ts) y copiar manualmente las que desees usar.

### Funciones que involucran números

| Implementación | Descripción |
| :--- | :--- |
| `probabilidadDeN(n)` | Escribe un número `n` entre `0` y `100`. Devuelve `true` el `n%` de las veces |
| `numeroAlAzar(num1, num2)` | Recibe dos números `num1` y `num2` donde `num1 <= num2`. Devuelve un número al azar entre ellos (no incluye al `num2`) |
| `numeroEnteroAlAzar(num1, num2)` | Recibe dos números enteros y devuelve un número entero al azar entre ellos (incluyendo a ambos números) |
| `esDivisor(num1, num2)` | Recibe dos números. Si `num2` es divisor de `num1` entonces devuelve `true` (es decir, si `num1/num2` tiene resto cero) |
| `divisores(num)` | Recibe un número entero y devuelve un array con todos sus divisores |
| `factoresMasCercanos(n)` | Recibe un número natural `n` y devuelve un array con dos valores `[a, b]` tal que `n=a*b`, donde `a` y `b` son los valores más cercanos posibles |
| `round(n, m)` | Recibe un número `n` y lo devuelve redondeado a `m` decimales |
| `factorial(n)` | Recibe un número natural o cero. Devuelve el factorial de dicho número |
| `esPar(n)` | Recibe un número. Devuelve `true` si es par, pero `false` si es impar |

### Funciones que involucran arrays

| Implementación | Descripción |
| :--- | :--- |
| `elementoAlAzar(array)` | Recibe un array y retorna un elemento al azar |
| `mezclarArray(array)` | Recibe un array y lo devuelve mezclado |
| `obtenerNElementos(array, n)` | Recibe un array y un número natural `n`. Devuelve `n` elementos al azar del array |
| `arange(origen, final, espaciado = 1)` | Recibe tres números. El tercero es opcional pero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final (sin incluir) solicitado, considerando el espaciado especificado |
| `linspace(origen, final, densidad)` | Recibe tres números. Los primeros dos deben ser distintos. El tercero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final solicitado, considrando la densidad (cantidad) de valores especificados |
| `ubicacionNElementosMasGrandes(array, n)` | Recibe un array de números y un número natural `n`. Devuelve un array de números enteros con las posiciones de los `n` elementos más grandes del array original, o más si hay un empate en los últimos puestos |

### Funciones que involucran strings

| Implementación | Descripción |
| :--- | :--- |
| `stringAleatorio(n)` | Recibe un número `n` natural, devuelve un string con carácteres aleatorios de longitud `n` |
| `superTrim(string)` | Recibe un string, devuelve el mismo string sin espacios en blanco en ambos extremos y reemplaza todos los espacios consecutivos por uno solo |
| `tieneMayuscula(string)` | Recibe un string. Devuelve `true` si contiene alguna mayúscula, sin importar el idioma de escritura de la letra |
| `tieneCaracterEspecial(string)` | Recibe un string. Devuelve `true` si tiene algún carácter de puntuación, símbolo, marcador, control o caracter de formato (no se consideran los espacios en blanco) |
| `tieneNumero(string)` | Recibe un string. Devuelve `true` si el string tiene algún número y `false` en caso contrario |
| `esStringNumerico(string)` | Recibe un string. Devuelve `true` si el string únicamente tiene carácteres numéricos, y `false` en caso contrario |

### Funciones que involucran objetos

| Implementación | Descripción |
| :--- | :--- |
| `crearObjeto(claves, valores)` | Recibe dos arrays `claves` y `valores`, retorna un objeto cuyas claves son los elementos de `claves` y los valores son los elementos de `valores` |
| `esObjetoLiteral(param)` | Recibe un elemento de cualquier tipo. Devuelve `true` si es un objeto literal y `false` en caso contrario |
| `tieneSusPropiedades(objeto, propiedadesObligatorias)` | Recibe un objeto literal y un array de strings. Devuelve `true` si todos los nombres en el array forman parte de las claves del objeto |

### Extras

| Implementación | Descripción |
| :--- | :--- |
| `colorRandom()` | Retorna un color RGB al azar |
| `waitFor(time)` | Hace que tu código asincrónico espere un tiempo (en milisegundos) que le pases como parámetro antes de continuar la ejecución |

Estoy abierto a sugerencias!

## Construido con 🛠️

* JavaScript
* [TypeScript](https://www.typescriptlang.org/)
* [NodeJs](https://nodejs.org/)

## Autor ✒️

* **Alejandro Portaluppi** - [LinkedIn](https://www.linkedin.com/in/alejandro-portaluppi/)
