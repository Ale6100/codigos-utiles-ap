/**
 * Recibe un número `n` entre `0` y `100`. Devuelve `true` el `n%` de las veces
 * @param {number} n Número entre `0` y `100` que representa la probabilidad de que la función devuelva `true`
 * @returns {boolean} Valor booleano que representa si se ha cumplido la probabilidad dada por `n`
 * @example
 * import codigosap from "codigos-utiles-ap"
 *
 * codigosap.probabilidadDeN(40) // devuelve true o false con una probabilidad del 40%
 */
export declare const probabilidadDeN: (n: number) => boolean;
/**
 * Recibe dos números `num1` y `num2`. Devuelve un número al azar entre ellos (no incluye al `num2`)
 * @param {number} num1 Primer número
 * @param {number} num2 Segundo número
 * @throws {error} Si alguno de los parámetros no es un número
 * @returns {number} Un número al azar entre `num1` y `num2` (sin incluir al `num2`)
 */
export declare const numeroAlAzar: (num1: number, num2: number) => number;
/**
 * Recibe dos números enteros y devuelve un número entero al azar entre ellos
 * @param {number} num1 Primer número entero
 * @param {number} num2 Segundo número entero
 * @throws {error} Si alguno de los parámetros no es un entero
 * @returns {number} Retorna un numero entero al azar entre `num1` y `num2`
 */
export declare const numeroEnteroAlAzar: (num1: number, num2: number) => number;
/**
 * Recibe dos números. Si `num2` es divisor de `num1` entonces devuelve `true` (es decir, si `num1/num2` tiene resto cero)
 * @param {number} num1 Primer número
 * @param {number} num2 Segundo número
 * @throws {TypeError} - Si alguno de los argumentos no es un número
 * @returns {boolean} Devuelve `true` si `num2` es divisor de `num1`, y `false` en caso contrario
 * @example
 * import codigosap from "codigos-utiles-ap"
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
 * import codigosap from "codigos-utiles-ap"
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
 * import codigosap from "codigos-utiles-ap"
 *
 * codigosap.factoresMasCercanos(12) // retorna [4, 3]
 * codigosap.factoresMasCercanos(16) // retorna [4, 4]
 */
export declare const factoresMasCercanos: (n: number) => number[];
/**
 * Recibe un número y lo devuelve redondeado a dos decimales. Fuente: https://www.delftstack.com/es/howto/javascript/javascript-round-to-2-decimal-places/#uso-de-la-funci%C3%B3n-personalizada-para-redondear-un-n%C3%BAmero-a-2-decimales-en-javascript
 * @param {number} n Número que se quiere redondear
 * @returns {number} Retorna el número redondeado a dos decimales
 * @throws {Error} - Si `n` no es un número
 * @example
 * import codigosap from "codigos-utiles-ap"
 *
 * codigosap.redondear(12.3456) // retorna 12.35
 * codigosap.redondear(16.998) // retorna 17
 */
export declare const redondear: (n: number) => number;
/**
 * Recibe un número natural o cero. Devuelve el factorial de dicho número
 * @param {number} n Número al que se le quiere calcular el factorial
 * @returns {number} Retorna el factorial de `n`
 * @throws {Error} Si `n` no es un número natural o es menor que cero
 * @example
 * import codigosap from "codigos-utiles-ap"
 *
 * codigosap.factorial(1) // retorna 1
 * codigosap.factorial(3) // retorna 6
 * codigosap.factorial(4) // retorna 24
 */
export declare const factorial: (n: number) => number;
/**
 * Recibe un número. Devuelve `true` si es par, pero `false` si es impar
 * @param {number} n Número que se quiere evaluar
 * @returns {boolean} Retorna `true` si `n` es par, o `false` si es impar
 * @throws {Error} Si `n` no es un número
 * @example
 * import codigosap from "codigos-utiles-ap"
 *
 * codigosap.esPar(2) // retorna true
 * codigosap.esPar(3) // retorna false
 */
export declare const esPar: (n: number) => boolean;
/**
 * Recibe un array y retorna un elemento al azar
 * @param {any[]} array Array del cual se quiere seleccionar un elemento al azar
 * @returns {any} Retorna un elemento al azar del array
 * @throws {TypeError} Si el argumento no es un array
 * @example
 * import codigosap from "codigos-utiles-ap"
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
 * import codigosap from "codigos-utiles-ap"
 *
 * codigosap.mezclarArray([1, 'b', 3, 4]) // Puede retornar cualquier combinación de los elementos del array
 * codigosap.mezclarArray([]) // Retorna un array vacío, ya que el array de entrada estaba vacío
 */
export declare const mezclarArray: (array: any[]) => any[];
/**
 * Recibe un array y un número natural `n`. Devuelve `n` elementos al azar del array
 * @param {any[]} array Array del cual se quieren seleccionar los elementos
 * @param {number} n Cantidad de elementos del array que se quieren seleccionar
 * @returns {any[]} Retorna un array con `n` elementos seleccionados al azar del array de entrada
 * @throws {Error} Si el primer argumento no es un array o el segundo argumento no es un número natural y menor o igual a la longitud del array
 * @example
 * import codigosap from "codigos-utiles-ap"
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
 * import codigosap from "codigos-utiles-ap"
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
 * import codigosap from "codigos-utiles-ap"
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
 * import codigosap from "codigos-utiles-ap"
 *
 * codigosap.ubicacionNElementosMasGrandes([5, 3, 8, 1, 9, 6], 3) // Retorna [2, 4, 5]
 * codigosap.ubicacionNElementosMasGrandes([1, 3, 4, 0, 3], 2) // Retorna [1, 2, 4]
 */
export declare const ubicacionNElementosMasGrandes: (array: number[], n: number) => number[];
/**
 * Recibe un número `n` natural, devuelve un string con carácteres aleatorios de longitud `n`
 * @param {number} n Longitud esperada del string a retornar. Debe ser un número natural (entero positivo)
 * @returns {string} Retorna un string aleatorio de longitud `n`
 * @throws {Error} Si `n` no es un número natural
 */
export declare const stringAleatorio: (n: number) => string;
/**
 * Recibe un string, devuelve el mismo string sin espacios en blanco en ambos extremos y reemplaza todos los espacios consecutivos por uno solo
 * @param {string} string String cuyos espacios se desea recortar
 * @returns {string} Retorna un string sin espacios de longitud n (n >= 2)
 * @throws {TypeError} Si `string` no es un string
 * @example
 * import codigosap from "codigos-utiles-ap"
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
 * import codigosap from "codigos-utiles-ap"
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
 * import codigosap from "codigos-utiles-ap"
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
 * Recibe dos arrays A y B, retorna un objeto cuyas claves son los elementos de A y los valores son los elementos de B
 * @param {any[]} claves Array cuyos elementos serán las claves del objeto
 * @param {any[]} valores Array cuyos elementos serán los valores del objeto
 * @throws {TypeError} Si los parámetros no son arrays, o si el primer array contiene algún elemento de tipo object
 * @throws {Error} Si los parámetros no son arrays de igual longitud
 * @returns Retorna un objeto literal con las características mencionadas
 */
export declare const crearObjeto: (claves: any[], valores: any[]) => Object;
/**
 * Retorna un color RGB al azar
 * @returns {string} Retorna un string con el formato "rgb(red, green, blue)" donde red, green y blue son números enteros entre 0 y 255
 */
export declare const colorRandom: () => string;
/**
 * Hace que tu código asincrónico espere un tiempo (en milisegundos) que le pases como parámetro antes de continuar la ejecución
 * @param {number} time Tiempo de espera en milisegundos
 * @returns {Promise<void>} Una promesa que se resuelve cuando se cumple el tiempo de espera
 * @throws {Error} Si el parámetro `time` no es un número positivo.
 * @example
    import codigosap from "codigos-utiles-ap"

    const funcionDeEjemplo = async () => {
        // Tarea 1
        // Tarea 2
        await codigosap.waitFor(3000) // Espera 3 segundos antes de ejecutar la tarea 3
        // Tarea 3
    }

    funcionDeEjemplo()
 */
export declare const waitFor: (time: number) => Promise<void>;
declare const _default: {
    /**
     * Recibe un número `n` entre `0` y `100`. Devuelve `true` el `n%` de las veces
     * @param {number} n Número entre `0` y `100` que representa la probabilidad de que la función devuelva `true`
     * @returns {boolean} Valor booleano que representa si se ha cumplido la probabilidad dada por `n`
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.probabilidadDeN(40) // devuelve true o false con una probabilidad del 40%
     */
    probabilidadDeN: (n: number) => boolean;
    /**
     * Recibe dos números `num1` y `num2`. Devuelve un número al azar entre ellos (no incluye al `num2`)
     * @param {number} num1 Primer número
     * @param {number} num2 Segundo número
     * @throws {error} Si alguno de los parámetros no es un número
     * @returns {number} Un número al azar entre `num1` y `num2` (sin incluir al `num2`)
     */
    numeroAlAzar: (num1: number, num2: number) => number;
    /**
     * Recibe dos números enteros y devuelve un número entero al azar entre ellos
     * @param {number} num1 Primer número entero
     * @param {number} num2 Segundo número entero
     * @throws {error} Si alguno de los parámetros no es un entero
     * @returns {number} Retorna un numero entero al azar entre `num1` y `num2`
     */
    numeroEnteroAlAzar: (num1: number, num2: number) => number;
    /**
     * Recibe dos números. Si `num2` es divisor de `num1` entonces devuelve `true` (es decir, si `num1/num2` tiene resto cero)
     * @param {number} num1 Primer número
     * @param {number} num2 Segundo número
     * @throws {TypeError} - Si alguno de los argumentos no es un número
     * @returns {boolean} Devuelve `true` si `num2` es divisor de `num1`, y `false` en caso contrario
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.esDivisor(6, 3) // retorna true
     * codigosap.esDivisor(7, 3) // retorna false
     */
    esDivisor: (num1: number, num2: number) => boolean;
    /**
     * Recibe un número entero y devuelve un array con todos sus divisores
     * @param {number} num Número al que se le quieren determinar los divisores
     * @throws {error} Si `num` no es un número entero
     * @returns {number[]} Un array con los divisores del número `num`
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.divisores(12) // returns [1, 2, 3, 4, 6, 12]
     * codigosap.divisores(-12) // returns [-1, -2, -3, -4, -6, -12]
     */
    divisores: (num: number) => number[];
    /**
     * Recibe un número natural `n` y devuelve un array con dos valores `[a, b]` tal que `n=a*b`, donde `a` y `b` son los valores más cercanos posibles
     * @param {number} n Número natural al que se le quieren determinar los factores más cercanos
     * @returns {number[]} Un array con dos elementos `[a, b]`, donde `a` y `b` son los factores de `n` más cercanos posibles
     * @throws {Error} Si `n` no es un número natural
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.factoresMasCercanos(12) // retorna [4, 3]
     * codigosap.factoresMasCercanos(16) // retorna [4, 4]
     */
    factoresMasCercanos: (n: number) => number[];
    /**
     * Recibe un número y lo devuelve redondeado a dos decimales. Fuente: https://www.delftstack.com/es/howto/javascript/javascript-round-to-2-decimal-places/#uso-de-la-funci%C3%B3n-personalizada-para-redondear-un-n%C3%BAmero-a-2-decimales-en-javascript
     * @param {number} n Número que se quiere redondear
     * @returns {number} Retorna el número redondeado a dos decimales
     * @throws {Error} - Si `n` no es un número
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.redondear(12.3456) // retorna 12.35
     * codigosap.redondear(16.998) // retorna 17
     */
    redondear: (n: number) => number;
    /**
     * Recibe un número natural o cero. Devuelve el factorial de dicho número
     * @param {number} n Número al que se le quiere calcular el factorial
     * @returns {number} Retorna el factorial de `n`
     * @throws {Error} Si `n` no es un número natural o es menor que cero
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.factorial(1) // retorna 1
     * codigosap.factorial(3) // retorna 6
     * codigosap.factorial(4) // retorna 24
     */
    factorial: (n: number) => number;
    /**
     * Recibe un número. Devuelve `true` si es par, pero `false` si es impar
     * @param {number} n Número que se quiere evaluar
     * @returns {boolean} Retorna `true` si `n` es par, o `false` si es impar
     * @throws {Error} Si `n` no es un número
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.esPar(2) // retorna true
     * codigosap.esPar(3) // retorna false
     */
    esPar: (n: number) => boolean;
    /**
     * Recibe un array y retorna un elemento al azar
     * @param {any[]} array Array del cual se quiere seleccionar un elemento al azar
     * @returns {any} Retorna un elemento al azar del array
     * @throws {TypeError} Si el argumento no es un array
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.elementoAlAzar([1, 'b', 3, 4]) // Puede retornar cualquiera de los elementos del array
     * codigosap.elementoAlAzar([]) // retorna `undefined`, ya que el array está vacío
     */
    elementoAlAzar: (array: any[]) => any;
    /**
     * Recibe un array y lo devuelve mezclado
     * @param {any[]} array Array que se pretende mezclar
     * @returns {any[]} Retorna el array mezclado
     * @throws {TypeError} Si el argumento no es un array
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.mezclarArray([1, 'b', 3, 4]) // Puede retornar cualquier combinación de los elementos del array
     * codigosap.mezclarArray([]) // Retorna un array vacío, ya que el array de entrada estaba vacío
     */
    mezclarArray: (array: any[]) => any[];
    /**
     * Recibe un array y un número natural `n`. Devuelve `n` elementos al azar del array
     * @param {any[]} array Array del cual se quieren seleccionar los elementos
     * @param {number} n Cantidad de elementos del array que se quieren seleccionar
     * @returns {any[]} Retorna un array con `n` elementos seleccionados al azar del array de entrada
     * @throws {Error} Si el primer argumento no es un array o el segundo argumento no es un número natural y menor o igual a la longitud del array
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.obtenerNElementos([1, 'b', 3, 4], 2) // Puede retornar cualquier combinación de dos elementos del array
     * codigosap.obtenerNElementos(['a', 'b', 5], 1) // Puede retornar cualquier elemento del array
     * codigosap.obtenerNElementos([], 3) // Lanza un error, ya que el array está vacío y no se pueden seleccionar 3 elementos
     */
    obtenerNElementos: (array: any[], n: number) => any[];
    /**
     * Recibe tres números. El tercero es opcional pero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final (sin incluir) solicitado, considerando el espaciado especificado
     * @param {number} origen Origen del array a retornar
     * @param {number} final Final (sin incluir) del array a retornar
     * @param {number} [espaciado=1] (opcional) Espacio/distancia entre los valores de los elementos del array a retornar. Su valor es 1 por defecto
     * @returns {number[]} Retorna un array de números equiespaciados con las condiciones especificadas en los parámetros
     * @throws {Error} Si `origen` o `final` no son números o si `espaciado` no es un número positivo.
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.arange(0, 10, 2) // Retorna [0, 2, 4, 6, 8]
     * codigosap.arange(1, 10) // Retorna [1, 2, 3, 4, 5, 6, 7, 8, 9]
     */
    arange: (origen: number, final: number, espaciado?: number) => number[];
    /**
     * Recibe tres números. Los primeros dos deben ser distintos. El tercero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final solicitado, considrando la densidad (cantidad) de valores especificados
     * @param {number} origen Origen del array a retornar
     * @param {number} final Final del array a retornar
     * @param {number} densidad Cantidad de valores equiespaciados en el array a retornar
     * @returns {number[]} Retorna un array de números equiespaciados con las condiciones especificadas en los parámetros
     * @throws {Error} Si alguno de los tres argumentos no es un número, si `origen` es igual a `final`, o si `densidad` es negativa.
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.linspace(0, 10, 5) // Retorna [0, 2.5, 5, 7.5, 10]
     * codigosap.linspace(-1, 1, 3) // Retorna [-1, 0, 1]
     */
    linspace: (origen: number, final: number, densidad: number) => number[];
    /**
     * Recibe un array de números y un número natural `n`. Devuelve un array de números enteros con las posiciones de los `n` elementos más grandes del array original, o más si hay un empate en los últimos puestos
     * @param {number[]} array Array de números
     * @param {number} n Número natural. Cantidad de posiciones a seleccionar del array
     * @returns {number[]} Retorna un array de números enteros con las posiciones de los `n` elementos más grandes del array original
     * @throws {TypeError} Si el primer argumento no es un array de números
     * @throws {Error} Si el segundo argumento no es un número natural menor o igual a la longitud del array
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.ubicacionNElementosMasGrandes([5, 3, 8, 1, 9, 6], 3) // Retorna [2, 4, 5]
     * codigosap.ubicacionNElementosMasGrandes([1, 3, 4, 0, 3], 2) // Retorna [1, 2, 4]
     */
    ubicacionNElementosMasGrandes: (array: number[], n: number) => number[];
    /**
     * Recibe un número `n` natural, devuelve un string con carácteres aleatorios de longitud `n`
     * @param {number} n Longitud esperada del string a retornar. Debe ser un número natural (entero positivo)
     * @returns {string} Retorna un string aleatorio de longitud `n`
     * @throws {Error} Si `n` no es un número natural
     */
    stringAleatorio: (n: number) => string;
    /**
     * Recibe un string, devuelve el mismo string sin espacios en blanco en ambos extremos y reemplaza todos los espacios consecutivos por uno solo
     * @param {string} string String cuyos espacios se desea recortar
     * @returns {string} Retorna un string sin espacios de longitud n (n >= 2)
     * @throws {TypeError} Si `string` no es un string
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.superTrim("     Juan     Pérez de  los      Quinotos ") // Retorna "Juan Pérez de los Quinotos"
     */
    superTrim: (string: string) => string;
    /**
     * Recibe un string. Devuelve true si contiene alguna mayúscula, sin importar el idioma de escritura de la letra
     * @param string {string} String que se desea analizar
     * @returns {boolean} Retorna un booleano que indica si el argumento contiene alguna mayúscula
     * @throws {TypeError} Si el argumento no es un string
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.tieneMayuscula("gamma mayúscula: Γ") // Retorna true
     * codigosap.tieneMayuscula("hola mundo") // Retorna false
     */
    tieneMayuscula: (string: string) => boolean;
    /**
     * Recibe un string. Devuelve true si tiene algún carácter de puntuación, símbolo, marcador, control o caracter de formato (no se consideran los espacios en blanco)
     * @param string {string} String que se desea analizar
     * @returns {boolean} Retorna un booleano que indica si el argumento contiene algún caracter especial
     * @throws {TypeError} Si el argumento no es un string
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.tieneCaracterEspecial("gamma mayúscula: Γ") // Retorna true
     * codigosap.tieneCaracterEspecial("hola mundo") // Retorna false (no se consideran los espacios)
     */
    tieneCaracterEspecial: (string: string) => boolean;
    /**
     * Recibe un string. Devuelve true si el string tiene algún número y false en caso contrario
     * @param string {string} String que se desea analizar
     * @returns {boolean} Retorna un booleano que indica si el argumento contiene algún caracter numérico
     * @throws {TypeError} Si el argumento no es un string
     */
    tieneNumero: (string: string) => boolean;
    /**
     * Recibe dos arrays A y B, retorna un objeto cuyas claves son los elementos de A y los valores son los elementos de B
     * @param {any[]} claves Array cuyos elementos serán las claves del objeto
     * @param {any[]} valores Array cuyos elementos serán los valores del objeto
     * @throws {TypeError} Si los parámetros no son arrays, o si el primer array contiene algún elemento de tipo object
     * @throws {Error} Si los parámetros no son arrays de igual longitud
     * @returns Retorna un objeto literal con las características mencionadas
     */
    crearObjeto: (claves: any[], valores: any[]) => Object;
    /**
     * Retorna un color RGB al azar
     * @returns {string} Retorna un string con el formato "rgb(red, green, blue)" donde red, green y blue son números enteros entre 0 y 255
     */
    colorRandom: () => string;
    /**
     * Hace que tu código asincrónico espere un tiempo (en milisegundos) que le pases como parámetro antes de continuar la ejecución
     * @param {number} time Tiempo de espera en milisegundos
     * @returns {Promise<void>} Una promesa que se resuelve cuando se cumple el tiempo de espera
     * @throws {Error} Si el parámetro `time` no es un número positivo.
     * @example
        import codigosap from "codigos-utiles-ap"
    
        const funcionDeEjemplo = async () => {
            // Tarea 1
            // Tarea 2
            await codigosap.waitFor(3000) // Espera 3 segundos antes de ejecutar la tarea 3
            // Tarea 3
        }
    
        funcionDeEjemplo()
     */
    waitFor: (time: number) => Promise<void>;
};
export default _default;
