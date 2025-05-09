/**
 * Recibe un número `n` entre `0` y `100`. Devuelve `true` el `n%` de las veces
 * @param {number} n Número entre `0` y `100` que representa la probabilidad de que la función devuelva `true`
 * @returns {boolean} Valor booleano que representa si se ha cumplido la probabilidad dada por `n`
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.probabilidadDeN(40) // devuelve true o false con una probabilidad del 40%
 */
export declare const probabilidadDeN: (n: number) => boolean;
/**
 * Recibe dos números `num1` y `num2` donde `num1` <= `num2`. Devuelve un número al azar entre ellos (no incluye al `num2`)
 * @param {number} num1 Primer número
 * @param {number} num2 Segundo número (debe ser mayor o igual que el primero)
 * @throws {error} Si alguno de los parámetros no es un número
 * @returns {number} Un número al azar entre `num1` y `num2` (sin incluir al `num2`)
 */
export declare const numeroAlAzar: (num1: number, num2: number) => number;
/**
 * Recibe dos números enteros y devuelve un número entero al azar entre ellos (incluyendo a ambos números)
 * @param {number} num1 Primer número entero
 * @param {number} num2 Segundo número entero
 * @throws {error} Si alguno de los parámetros no es un entero
 * @returns {number} Retorna un numero entero al azar entre `num1` y `num2`
 */
export declare const numeroEnteroAlAzar: (num1: number, num2: number) => number;
/**
 * Recibe un número. Devuelve `true` si es par, pero `false` si es impar
 * @param {number} n Número que se quiere evaluar
 * @returns {boolean} Retorna `true` si `n` es par, o `false` si es impar
 * @throws {Error} Si `n` no es un número
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.esPar(2) // retorna true
 * codigosap.esPar(3) // retorna false
 */
export declare const esPar: (n: number) => boolean;
/**
 * Recibe dos números. Si `num2` es divisor de `num1` entonces devuelve `true` (es decir, si `num1/num2` tiene resto cero)
 * @param {number} num1 Primer número
 * @param {number} num2 Segundo número
 * @throws {TypeError} - Si alguno de los argumentos no es un número
 * @returns {boolean} Devuelve `true` si `num2` es divisor de `num1`, y `false` en caso contrario
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.esDivisor(6, 3) // retorna true
 * codigosap.esDivisor(7, 3) // retorna false
 */
export declare const esDivisor: (num1: number, num2: number) => boolean;
/**
 * Recibe un número entero y devuelve un array con todos sus divisores
 * @param {number} num Número al que se le quieren determinar los divisores
 * @throws {error} Si `num` no es un número entero
 * @returns {number[]} Un array con los divisores del número `num`
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.divisores(12) // returns [1, 2, 3, 4, 6, 12]
 * codigosap.divisores(-12) // returns [-1, -2, -3, -4, -6, -12]
 */
export declare const divisores: (num: number) => number[];
/**
 * Recibe un número natural `n` y devuelve un array con dos valores `[a, b]` tal que `n=a*b`, donde `a` y `b` son los valores más cercanos posibles
 * @param {number} n Número natural al que se le quieren determinar los factores más cercanos
 * @returns {number[]} Un array con dos elementos `[a, b]`, donde `a` y `b` son los factores de `n` más cercanos posibles
 * @throws {Error} Si `n` no es un número natural
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.factoresMasCercanos(12) // retorna [4, 3]
 * codigosap.factoresMasCercanos(16) // retorna [4, 4]
 */
export declare const factoresMasCercanos: (n: number) => number[];
/**
 * Recibe un número `n` y lo devuelve redondeado a `m` decimales
 * @param {number} n Número que se quiere redondear
 * @param {number} m Cantidad de decimales que se van a redondear
 * @returns {number} Retorna el número redondeado a `m` decimales
 * @throws {TypeError} - Si `n` o `m` no son números
 * @throws {Error} - Si `m` no es un número entero entre 0 y 100
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.round(12.3456, 2) // retorna 12.35
 * codigosap.round(16.9982, 3) // retorna 16.998
 */
export declare const round: (n: number, m: number) => number;
/**
 * Recibe un número natural o cero. Devuelve el factorial de dicho número
 * @param {number} n Número al que se le quiere calcular el factorial
 * @returns {number} Retorna el factorial de `n`
 * @throws {Error} Si `n` no es un número natural o es menor que cero
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.factorial(1) // retorna 1
 * codigosap.factorial(3) // retorna 6
 * codigosap.factorial(4) // retorna 24
 */
export declare const factorial: (n: number) => number;
/**
 * Recibe un array y retorna un elemento al azar
 * @param {any[]} array Array del cual se quiere seleccionar un elemento al azar
 * @returns {any} Retorna un elemento al azar del array
 * @throws {TypeError} Si el argumento no es un array
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.elementoAlAzar([1, 'b', 3, 4]) // Puede retornar cualquiera de los elementos del array
 * codigosap.elementoAlAzar([]) // retorna `undefined`, ya que el array está vacío
 */
export declare const elementoAlAzar: (array: any[]) => any;
/**
 * Recibe un array y lo devuelve mezclado
 * @param {any[]} array Array que se pretende mezclar
 * @returns {any[]} Retorna el array mezclado
 * @throws {TypeError} Si el argumento no es un array
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.mezclarArray([1, 'b', 3, 4]) // Puede retornar cualquier combinación de los elementos del array
 * codigosap.mezclarArray([]) // Retorna un array vacío, ya que el array de entrada estaba vacío
 */
export declare const mezclarArray: <T>(array: T[]) => T[];
/**
 * Recibe un array y un número natural `n`. Devuelve `n` elementos al azar del array
 * @param {any[]} array Array del cual se quieren seleccionar los elementos
 * @param {number} n Cantidad de elementos del array que se quieren seleccionar
 * @returns {any[]} Retorna un array con `n` elementos seleccionados al azar del array de entrada
 * @throws {Error} Si el primer argumento no es un array o el segundo argumento no es un número natural y menor o igual a la longitud del array
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.obtenerNElementos([1, 'b', 3, 4], 2) // Puede retornar cualquier combinación de dos elementos del array
 * codigosap.obtenerNElementos(['a', 'b', 5], 1) // Puede retornar cualquier elemento del array
 * codigosap.obtenerNElementos([], 3) // Lanza un error, ya que el array está vacío y no se pueden seleccionar 3 elementos
 */
export declare const obtenerNElementos: (array: any[], n: number) => any[];
/**
 * Recibe tres números. El tercero es opcional pero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final (sin incluir) solicitado, considerando el espaciado especificado
 * @param {number} origen Origen del array a retornar
 * @param {number} final Final (sin incluir) del array a retornar
 * @param {number} [espaciado=1] (opcional) Espacio/distancia entre los valores de los elementos del array a retornar. Su valor es 1 por defecto
 * @returns {number[]} Retorna un array de números equiespaciados con las condiciones especificadas en los parámetros
 * @throws {Error} Si `origen` o `final` no son números o si `espaciado` no es un número positivo.
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.arange(0, 10, 2) // Retorna [0, 2, 4, 6, 8]
 * codigosap.arange(1, 10) // Retorna [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
export declare const arange: (origen: number, final: number, espaciado?: number) => number[];
/**
 * Recibe tres números. Los primeros dos deben ser distintos. El tercero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final solicitado, considrando la densidad (cantidad) de valores especificados
 * @param {number} origen Origen del array a retornar
 * @param {number} final Final del array a retornar
 * @param {number} densidad Cantidad de valores equiespaciados en el array a retornar
 * @returns {number[]} Retorna un array de números equiespaciados con las condiciones especificadas en los parámetros
 * @throws {Error} Si alguno de los tres argumentos no es un número, si `origen` es igual a `final`, o si `densidad` es negativa.
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.linspace(0, 10, 5) // Retorna [0, 2.5, 5, 7.5, 10]
 * codigosap.linspace(-1, 1, 3) // Retorna [-1, 0, 1]
 */
export declare const linspace: (origen: number, final: number, densidad: number) => number[];
/**
 * Recibe un array de números y un número natural `n`. Devuelve un array de números enteros con las posiciones de los `n` elementos más grandes del array original, o más si hay un empate en los últimos puestos
 * @param {number[]} array Array de números
 * @param {number} n Número natural. Cantidad de posiciones a seleccionar del array
 * @returns {number[]} Retorna un array de números enteros con las posiciones de los `n` elementos más grandes del array original
 * @throws {TypeError} Si el primer argumento no es un array de números
 * @throws {Error} Si el segundo argumento no es un número natural menor o igual a la longitud del array
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.ubicacionNElementosMasGrandes([5, 3, 8, 1, 9, 6], 3) // Retorna [2, 4, 5]
 * codigosap.ubicacionNElementosMasGrandes([1, 3, 4, 0, 3], 2) // Retorna [1, 2, 4]
 */
export declare const ubicacionNElementosMasGrandes: (array: number[], n: number) => number[];
/**
 * Recibe un array de números y strings. No se permiten NaN. Devuelve un array sin elementos repetidos
 * @param {(string | number)[]} array Array de números y strings
 * @returns {(string | number)[]} Retorna un array sin elementos repetidos
 * @throws {TypeError} Si el argumento no es un array de números y strings, o si algún elemento es NaN
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.eliminarNumerosYStringsRepetidos([1, 'a', 2, 'a', 1, 3]) // Retorna [1, 'a', 2, 3]
 * codigosap.eliminarNumerosYStringsRepetidos(['a', 'b', 'a', 'c']) // Retorna ['a', 'b', 'c']
 */
export declare const eliminarNumerosYStringsRepetidos: (array: (string | number)[]) => (string | number)[];
/**
 * Recibe dos números `a` y `b` (con `a` menor o igual que `b`),
 * devuelve un string con caracteres aleatorios de longitud entre `a` y `b`
 * @param {number} a Límite inferior para la longitud del string (número natural).
 * @param {number} b Límite superior para la longitud del string (número natural).
 * @returns {string} Retorna un string aleatorio de longitud entre `a` y `b`
 * @throws {Error} Si `a` o `b` no son números naturales o si `a > b`
 */
export declare const stringAleatorio: (a: number, b: number) => string;
/**
 * Recibe un string, devuelve el mismo string sin espacios en blanco en ambos extremos y reemplaza todos los espacios consecutivos por uno solo
 * @param {string} string String cuyos espacios se desea recortar
 * @returns {string} Retorna un string sin espacios de longitud n (n >= 2)
 * @throws {TypeError} Si `string` no es un string
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.superTrim("     Juan     Pérez de  los      Quinotos ") // Retorna "Juan Pérez de los Quinotos"
 */
export declare const superTrim: (string: string) => string;
/**
 * Recibe un string. Devuelve true si contiene alguna mayúscula, sin importar el idioma de escritura de la letra
 * @param string {string} String que se desea analizar
 * @returns {boolean} Retorna un booleano que indica si el argumento contiene alguna mayúscula
 * @throws {TypeError} Si el argumento no es un string
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.tieneMayuscula("gamma mayúscula: Γ") // Retorna true
 * codigosap.tieneMayuscula("hola mundo") // Retorna false
 */
export declare const tieneMayuscula: (string: string) => boolean;
/**
 * Recibe un string. Devuelve true si tiene algún carácter de puntuación, símbolo, marcador, control o caracter de formato (no se consideran los espacios en blanco)
 * @param string {string} String que se desea analizar
 * @returns {boolean} Retorna un booleano que indica si el argumento contiene algún caracter especial
 * @throws {TypeError} Si el argumento no es un string
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.tieneCaracterEspecial("gamma mayúscula: Γ") // Retorna true
 * codigosap.tieneCaracterEspecial("hola mundo") // Retorna false (no se consideran los espacios)
 */
export declare const tieneCaracterEspecial: (string: string) => boolean;
/**
 * Recibe un string. Devuelve true si el string tiene algún número y false en caso contrario
 * @param string {string} String que se desea analizar
 * @returns {boolean} Retorna un booleano que indica si el argumento contiene algún caracter numérico
 * @throws {TypeError} Si el argumento no es un string
 */
export declare const tieneNumero: (string: string) => boolean;
/**
 * Recibe un string. Devuelve true si el string únicamente tiene carácteres numéricos, y false en caso contrario
 * @param string {string} String que se desea analizar
 * @returns {boolean} Retorna un booleano que indica si el argumento está formado por carácteres numéricos
 * @throws {TypeError} Si el argumento no es un string
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.esStringNumerico("asdyu513asoidh") // Retorna false
 * codigosap.esStringNumerico("123.11") // Retorna true
 * codigosap.esStringNumerico(" 512 ") // Retorna false (los espacios en blanco no se deben ignorar)
 */
export declare const esStringNumerico: (string: string) => boolean;
/**
 * Recibe un array de strings y un string. Devuelve un string que es la concatenación de los elementos del array separados por un espacio, o el valor del segundo argumento si el array está vacío o no contiene strings.
 * Nota: Cuando digo "array de strings" también incluyo null y undefined
 * @param {(string | null | undefined)[]} arrayAUnir Array cuyos elementos serán concatenados
 * @param {string} nonValue Valor a retornar si el array está vacío o no contiene strings
 * @throws {TypeError} Si el primer argumento no es un array de strings o si el segundo argumento no es un string
 * @returns {string} Retorna un string con las características mencionadas
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.unirStrings(["hola", "mundo"], "no hay elementos") // Retorna "hola mundo"
 * codigosap.unirStrings([], "no hay elementos") // Retorna "no hay elementos"
 * codigosap.unirStrings([null, undefined, "hola"], "no hay elementos") // Retorna "hola"
 */
export declare const unirStrings: (arrayAUnir: (string | null | undefined)[], nonValue: string) => string;
/**
 * Recibe dos arrays `claves` y `valores`, retorna un objeto cuyas claves son los elementos de `claves` y los valores son los elementos de `valores`
 * @param {any[]} claves Array cuyos elementos serán las claves del objeto
 * @param {any[]} valores Array cuyos elementos serán los valores del objeto
 * @throws {TypeError} Si los parámetros no son arrays, o si el primer array contiene algún elemento de tipo object
 * @throws {Error} Si los parámetros no son arrays de igual longitud
 * @returns Retorna un objeto literal con las características mencionadas
 */
export declare const crearObjeto: (claves: any[], valores: any[]) => Object;
/**
 * Recibe un elemento de cualquier tipo. Devuelve true si es un objeto literal y false en caso contrario
 * @param {any} param Valor a analizar
 * @returns Retorna un valor booleano
 */
export declare const esObjetoLiteral: (param: any) => boolean;
/**
 * Recibe un objeto literal y un array de strings. Devuelve true si el objeto contiene todas las propiedades obligatorias especificadas en el array
 * @param {{[key: string]: any}} objeto Objeto literal a analizar
 * @param {string[]} propiedadesObligatorias Un array de strings que representa las propiedades obligatorias
 * @throws {Error} Si el primer parámetro no es un objeto literal o si el segundo parámetro no es una array de strings distinto de vacío
 * @returns {boolean}
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.tieneLasPropiedadesObligatorias({email: "asd@gmail.com", password: 123}, ["email", "password"]) // Retorna true
 * codigosap.tieneLasPropiedadesObligatorias({email: "asd@gmail.com"}, ["email", "password"]) // Retorna false
 * codigosap.tieneLasPropiedadesObligatorias({email: "asd@gmail.com", password: "asd", phone: 123123123}, ["email", "password"]) // Retorna true
 */
export declare const tieneLasPropiedadesObligatorias: (objeto: {
    [key: string]: any;
}, propiedadesObligatorias: string[]) => boolean;
/**
 * Recibe un objeto literal y un array de strings. Devuelve true si el objeto sólo contiene las propiedades permitidas especificadas en el array
 * @param {{[key: string]: any}} objeto Objeto literal a analizar
 * @param {string[]} propiedadesPermitidas Un array de strings que representa las propiedades permitidas
 * @throws {Error} Si el primer parámetro no es un objeto literal o si el segundo parámetro no es una array de strings distinto de vacío
 * @returns {boolean}
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.tieneSoloLasPropiedadesPermitidas({email: "asd@gmail.com", password: 123}, ["email", "password"]) // Retorna true
 * codigosap.tieneSoloLasPropiedadesPermitidas({email: "asd@gmail.com"}, ["email", "password"]) // Retorna true
 * codigosap.tieneSoloLasPropiedadesPermitidas({email: "asd@gmail.com", password: "asd", phone: 123123123}, ["email", "password"]) // Retorna false
 */
export declare const tieneSoloLasPropiedadesPermitidas: (objeto: {
    [key: string]: any;
}, propiedadesPermitidas: string[]) => boolean;
/**
 * Retorna un color RGB al azar
 * @returns {`rgb(${number}, ${number}, ${number})`} Retorna un string con el formato "rgb(red, green, blue)" donde red, green y blue son números enteros entre 0 y 255
 */
export declare const colorRandom: () => `rgb(${number}, ${number}, ${number})`;
/**
 * Hace que tu código asincrónico espere un tiempo (en milisegundos) que le pases como parámetro antes de continuar la ejecución
 * @param {number} time Tiempo de espera en milisegundos
 * @returns {Promise<void>} Una promesa que se resuelve cuando se cumple el tiempo de espera
 * @throws {Error} Si el parámetro `time` no es un número positivo.
 * @example
    import * as codigosap from "codigos-utiles-ap"

    const funcionDeEjemplo = async () => {
        // Tarea 1
        // Tarea 2
        await codigosap.waitFor(3000) // Espera 3 segundos antes de ejecutar la tarea 3
        // Tarea 3
    }

    funcionDeEjemplo()
 */
export declare const waitFor: (time: number) => Promise<void>;
/**
 * Retorna un color RGB basado en un string de entrada
 * @param {string} input - String que determina el color generado
 * @param {number} max - El valor máximo que puede tomar cada componente de color
 * @throws {TypeError} Si `input` no es un string
 * @throws {Error} Si `max` no es un número entero entre 0 y 255
 * @returns {`rgb(${number}, ${number}, ${number})`} Retorna un string con el formato "rgb(red, green, blue)" donde cada componente es un entero entre 0 y `max`
 */
export declare const colorBasadoEnString: (input: string, max: number) => `rgb(${number}, ${number}, ${number})`;
