// Link GitHub: https://github.com/Ale6100/codigos-utiles-ap.git
// Link npm: https://www.npmjs.com/package/codigos-utiles-ap

//? Este es el archivo principal del módulo.

//! ----- NÚMEROS -----

/**
 * Recibe un número `n` entre `0` y `100`. Devuelve `true` el `n%` de las veces
 * @param {number} n Número entre `0` y `100` que representa la probabilidad de que la función devuelva `true`
 * @returns {boolean} Valor booleano que representa si se ha cumplido la probabilidad dada por `n`
 * @example
 * import * as codigosap from "codigos-utiles-ap"
 *
 * codigosap.probabilidadDeN(40) // devuelve true o false con una probabilidad del 40%
 */
export const probabilidadDeN = (n: number): boolean => {
    if (typeof n !== "number" || isNaN(n) || n < 0 || n > 100) throw new Error(`probabilidadDeN debe recibir un número entre 0 y 100. Se recibió ${n} (${typeof n})`);
    return Math.random() * 100 <= n;
}

/**
 * Recibe dos números `num1` y `num2` donde `num1` <= `num2`. Devuelve un número al azar entre ellos (no incluye al `num2`)
 * @param {number} num1 Primer número
 * @param {number} num2 Segundo número (debe ser mayor o igual que el primero)
 * @throws {error} Si alguno de los parámetros no es un número
 * @returns {number} Un número al azar entre `num1` y `num2` (sin incluir al `num2`)
 */
export const numeroAlAzar = (num1: number, num2: number): number => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) throw new Error(`numeroAlAzar requiere números válidos. Se recibió ${num1} y ${num2}`);
    if (num1 > num2) throw new Error(`num1 debe ser <= num2. Se recibió ${num1} y ${num2}`);
    return num1 + Math.random() * (num2 - num1);
}

/**
 * Recibe dos números enteros y devuelve un número entero al azar entre ellos (incluyendo a ambos números)
 * @param {number} num1 Primer número entero
 * @param {number} num2 Segundo número entero
 * @throws {error} Si alguno de los parámetros no es un entero
 * @returns {number} Retorna un numero entero al azar entre `num1` y `num2`
 */
export const numeroEnteroAlAzar = (num1: number, num2: number): number => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) throw new Error(`numeroEnteroAlAzar debe recibir dos números enteros. Se ha recibido ${JSON.stringify(num1)} (${typeof num1}) y ${JSON.stringify(num2)} (${typeof num2})`)
    const numeroBuscado = Math.round(numeroAlAzar(num1-0.5, num2+0.5))
    return numeroBuscado === -0 ? 0 : numeroBuscado // Evitamos que el resultado pueda ser -0 en lugar de 0
}

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
export const esPar = (n: number): boolean => {
    if (typeof n !== "number") throw new Error(`esPar debe recibir un número. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    return n%2 === 0
}

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
export const esDivisor = (num1: number, num2: number): boolean => {
    if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) throw new TypeError(`esDivisor requiere dos números. Se recibió ${num1} (${typeof num1}) y ${num2} (${typeof num2})`);
    if (num2 === 0) throw new Error("num2 no puede ser cero");
    return num1 % num2 === 0;
}

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
export const divisores = (num: number): number[] => {
    if (!Number.isInteger(num)) throw new Error(`divisores debe recibir un número entero. Se ha recibido ${JSON.stringify(num)} (${typeof num})`)
    if (num === 0) return [Infinity, Infinity]
    const signoDeN = num/Math.abs(num)
    num = Math.abs(num)
    let divisoresDeN = []
    for (let i = 1; i <= num/2; i++) {
        if (esDivisor(num, i)) {
            divisoresDeN.push(i*signoDeN)
        }
    }
    divisoresDeN.push(num*signoDeN)
    return divisoresDeN
}

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
export const factoresMasCercanos = (n: number): number[] => {
    if (!Number.isInteger(n) || n <= 0) throw new Error(`factoresMasCercanos debe recibir un número natural. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    let divisoresDeN = divisores(n) // Si n=12, entonces esto es [1, 2, 3, 4, 6, 12]. Para encontrar los factores más cercanos observo que se llega a 12 multiplicando el primero con el último, el segundo con el anteúltimo, etc.
    const divisoresDeNLength = divisoresDeN.length
    if (divisoresDeNLength === 2) return divisoresDeN

    let factor1: number, factor2: number
    if (esPar(divisoresDeNLength)) {
        factor1 = divisoresDeN.at(divisoresDeNLength/2 - 1)! // TypeScript no confía en que los valores de estos .at() siempre sean números, pero yo sí
        factor2 = divisoresDeN.at(divisoresDeNLength/2)!;
    } else {
        factor1 = divisoresDeN.at(Math.floor(divisoresDeNLength/2))!;
        factor2 = factor1;
    }

    return [factor1, factor2] // Si n=12, entonces retorna [3, 4]
}

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
export const round = (n: number, m: number): number => {
    if (typeof n !== "number" || typeof m !== "number") throw new TypeError("round requiere números");
    if (m < 0 || m > 100 || !Number.isInteger(m)) throw new Error("m debe ser entero entre 0 y 100");
    const factor = Math.pow(10, m);
    return Math.round((n + Number.EPSILON) * factor) / factor;
}

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
export const factorial = (n: number): number => {
    if (!Number.isInteger(n) || n < 0) throw new Error(`factorial debe recibir un número natural o cero. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    let r = 1
    for (let i=1; i<=n; i++) {
        r = i*r
    }
    return r
}


//! ----- ARRAYS -----


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
export const elementoAlAzar = (array: any[]): any => {
    if (!Array.isArray(array)) throw new TypeError(`elementoAlAzar debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    return array[Math.floor(Math.random()*array.length)]
}

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
export const mezclarArray = <T>(array: T[]): T[] => {
    if (!Array.isArray(array)) throw new TypeError(`mezclar debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) { // Algoritmo de Fisher-Yates
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
    }
    return shuffled;
}

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
export const obtenerNElementos = (array: any[], n: number): any[] => {
    if (!Array.isArray(array)) throw new TypeError(`El primer parámetro de obtenerNElementos debe ser un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    if (!Number.isInteger(n) || n <= 0 || array.length < n) throw new Error(`El segundo parámetro de obtenerNElementos debe ser un número natural menor o igual a la longitud del array del primer parámetro. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    const nuevoArray = mezclarArray(array)
    return nuevoArray.slice(0, n)
}

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
export const arange = (origen: number, final: number, espaciado: number = 1): number[] => {
    if (typeof origen !== 'number' || typeof final !== 'number') throw new Error(`Los primeros dos parámetros de arange deben ser númericos. Se ha recibido ${JSON.stringify(origen)} (${typeof origen}) y ${JSON.stringify(final)} (${typeof final})`)
    if (typeof espaciado !== 'number' || espaciado <= 0) throw new Error(`El tercer parámetro de arange debe ser un número mayor a cero. Se ha recibido ${JSON.stringify(espaciado)} (${typeof espaciado})`)
    if ((final - origen) / espaciado <= 0) return [];
    const steps = Math.ceil((final - origen) / espaciado);
    return Array.from({length: steps}, (_, i) => origen + i * espaciado);
}

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
export const linspace = (origen: number, final: number, densidad: number): number[] => {
    if (typeof origen !== 'number' || typeof final !== 'number' || typeof densidad !== 'number') throw new Error(`linspace debe recibir números. Se ha recibido ${JSON.stringify(origen)} (${typeof origen}), ${JSON.stringify(final)} (${typeof final}) y ${JSON.stringify(densidad)} (${typeof densidad})`)
    if (origen === final) throw new Error(`Los primeros dos parámetros de linspace deben ser números distintos. Ambos tienen el siguiente valor: ${JSON.stringify(origen)} (${typeof origen})`)
    if (densidad <= 0) throw new Error(`El tercer parámetro de linspace debe ser un número positivo. Se ha recibido ${JSON.stringify(densidad)} (${typeof densidad})`)
    if (densidad === 1) return [origen]
    const espaciado = (final-origen)/(densidad-1)
    const array = []
    for (let i=0; i<=densidad-2; i++) { // Se agrega desde el primer número hasta el anteúltimo
        array.push(origen+i*espaciado)
    }
    array.push(final) // Agrega el último
    return array
}

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
export const ubicacionNElementosMasGrandes = (array: number[], n: number): number[] => {
    if (!Array.isArray(array) || !array.every(elemento => typeof elemento === "number")) throw new TypeError(`El primer parámetro de ubicacionNElementosMasGrandes debe ser un array de números. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    if (!Number.isInteger(n) || n <= 0 || array.length < n) throw new Error(`El segundo parámetro de ubicacionNElementosMasGrandes debe ser un número natural menor o igual a la longitud del array del primer parámetro. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    const valoresMasGrandes = array.toSorted((a, b) => b-a).slice(0, n)

    const indices: number[] = [] // Ubicacion de los n elementos más grandes del array
    array.forEach((elemento, index) => {
        if (valoresMasGrandes.includes(elemento)) indices.push(index)
    })
    return indices
}

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
export const eliminarNumerosYStringsRepetidos = (array: (string | number)[]): (string | number)[] => {
    if (!Array.isArray(array)) throw new TypeError(`eliminarNumerosYStringsRepetidos debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    if (array.some(e => !(typeof e === "string" || (typeof e === "number" && !isNaN(e))))) throw new TypeError(`El array de eliminarNumerosYStringsRepetidos sólo debe contener elementos de tipo string y number (y sin NaN). Se ha recibido ${JSON.stringify(array)}`)
    return [...new Set(array)];
}


//! ----- STRINGS -----


/**
 * Recibe dos números `a` y `b` (con `a` menor o igual que `b`),
 * devuelve un string con caracteres aleatorios de longitud entre `a` y `b`
 * @param {number} a Límite inferior para la longitud del string (número natural).
 * @param {number} b Límite superior para la longitud del string (número natural).
 * @returns {string} Retorna un string aleatorio de longitud entre `a` y `b`
 * @throws {Error} Si `a` o `b` no son números naturales o si `a > b`
 */
export const stringAleatorio = (a: number, b: number): string => {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) throw new Error(`stringAleatorio debe recibir dos números naturales. Se han recibido ${JSON.stringify(a)} (${typeof a}) y ${JSON.stringify(b)} (${typeof b})`);
    if (a > b) throw new Error(`stringAleatorio: El límite inferior 'a' no puede ser mayor que el límite superior 'b'`);
    const longitud = numeroEnteroAlAzar(a, b);
    const simbolos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789¡!¿?@#$%&()+-=*,.;:_";
    let stringRandom = "";
    for (let i = 1; i <= longitud; i++) {
        stringRandom += simbolos[Math.floor(simbolos.length * Math.random())];
    }
    return stringRandom
}

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
export const superTrim = (string: string): string => {
    if (typeof string !== "string") throw new TypeError(`superTrim debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`)
    return string.trim().replace(/\s+/g, ' ');
}

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
export const tieneMayuscula = (string: string): boolean => {
    if (typeof string !== "string") throw new TypeError(`tieneMayuscula debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`)
    return /\p{Lu}/u.test(string);
}

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
export const tieneCaracterEspecial = (string: string): boolean => {
    if (typeof string !== "string") throw new TypeError(`tieneCaracterEspecial debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`)
    return /[\p{P}\p{S}\p{M}\p{C}\p{Cf}]/gu.test(string)
}

/**
 * Recibe un string. Devuelve true si el string tiene algún número y false en caso contrario
 * @param string {string} String que se desea analizar
 * @returns {boolean} Retorna un booleano que indica si el argumento contiene algún caracter numérico
 * @throws {TypeError} Si el argumento no es un string
 */
export const tieneNumero = (string: string): boolean => {
    if (typeof string !== "string") throw new TypeError(`tieneNumero debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`)
    return /\d+/u.test(string)
}

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
export const esStringNumerico = (string: string): boolean => {
    if (typeof string !== "string") throw new TypeError(`esStringNumerico debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`)
    return string !== "" && !string.includes(" ") && !isNaN(Number(string));
}

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
export const unirStrings = (arrayAUnir: (string | null | undefined)[], nonValue: string): string => {
    if (!Array.isArray(arrayAUnir)) throw new TypeError(`unirStrings debe recibir un array. Se ha recibido ${JSON.stringify(arrayAUnir)} (${typeof arrayAUnir})`);
    if (typeof nonValue !== 'string') throw new TypeError(`El segundo parámetro de unirStrings debe ser un string. Se ha recibido ${JSON.stringify(nonValue)} (${typeof nonValue})`);
    if (arrayAUnir.length === 0 || arrayAUnir.every(s => typeof s !== 'string' || s === '')) return nonValue;
    return arrayAUnir.filter(s => typeof s === 'string' && s != '').join(' ');
}


//! ----- OBJETOS -----


/**
 * Recibe dos arrays `claves` y `valores`, retorna un objeto cuyas claves son los elementos de `claves` y los valores son los elementos de `valores`
 * @param {any[]} claves Array cuyos elementos serán las claves del objeto
 * @param {any[]} valores Array cuyos elementos serán los valores del objeto
 * @throws {TypeError} Si los parámetros no son arrays, o si el primer array contiene algún elemento de tipo object
 * @throws {Error} Si los parámetros no son arrays de igual longitud
 * @returns Retorna un objeto literal con las características mencionadas
 */
export const crearObjeto = (claves: any[], valores: any[]): Object => {
    if (!Array.isArray(claves) || !Array.isArray(valores)) throw new TypeError(`crearObjeto debe recibir dos arrays. Se ha recibido ${JSON.stringify(claves)} (${typeof claves}) y ${JSON.stringify(valores)} (${typeof valores})`)
    if (claves.length !== valores.length) throw new Error(`Los parámetros de crearObjeto deben ser arrays de igual longitud`)
    if (claves.some(clave => typeof clave === "object")) throw new TypeError(`El primer parámetro de crearObjeto debe ser un array cuyos elementos no deben ser de tipo object`)

    const obj: Record<string, any> = {}

    claves.forEach((clave: string, i: number) => obj[clave] = valores[i])
    return obj
}

/**
 * Recibe un elemento de cualquier tipo. Devuelve true si es un objeto literal y false en caso contrario
 * @param {any} param Valor a analizar
 * @returns Retorna un valor booleano
 */
export const esObjetoLiteral = (param: any): boolean => {
    return (typeof param === "object" && !Array.isArray(param) && param !== null)
}

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
export const tieneLasPropiedadesObligatorias = (objeto: {[key: string]: any}, propiedadesObligatorias: string[]): boolean => {
    if (!esObjetoLiteral(objeto) || !Array.isArray(propiedadesObligatorias) || propiedadesObligatorias.some(prop => typeof prop !== "string" || !prop.trim())) throw new Error(`tieneLasPropiedadesObligatorias debe recibir un objeto literal y un array de strings no vacío. Se ha recibido ${JSON.stringify(objeto)} (${typeof objeto}) y ${JSON.stringify(propiedadesObligatorias)} (${typeof propiedadesObligatorias})`)
    return propiedadesObligatorias.every(prop => objeto.hasOwnProperty(prop));
}

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
export const tieneSoloLasPropiedadesPermitidas = (objeto: {[key: string]: any}, propiedadesPermitidas: string[]): boolean => {
    if (!esObjetoLiteral(objeto) || !Array.isArray(propiedadesPermitidas) || propiedadesPermitidas.some(prop => typeof prop !== "string" || !prop.trim())) throw new Error(`tieneSoloLasPropiedadesPermitidas debe recibir un objeto literal y un array de strings no vacío. Se ha recibido ${JSON.stringify(objeto)} (${typeof objeto}) y ${JSON.stringify(propiedadesPermitidas)} (${typeof propiedadesPermitidas})`)
    return Object.keys(objeto).every(prop => propiedadesPermitidas.includes(prop))
}


//! ----- OTROS -----


/**
 * Retorna un color RGB al azar
 * @returns {`rgb(${number}, ${number}, ${number})`} Retorna un string con el formato "rgb(red, green, blue)" donde red, green y blue son números enteros entre 0 y 255
 */
export const colorRandom = (): `rgb(${number}, ${number}, ${number})` => {
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`
}

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
export const waitFor = (time: number): Promise<void> => {
    if (typeof time !== "number" || time < 0) throw new Error(`waitFor debe recibir un número positivo (en milisegundos). Se ha recibido ${JSON.stringify(time)} (${typeof time})`)
    return new Promise(resolve => setTimeout(resolve, time))
}

/**
 * Retorna un color RGB basado en un string de entrada
 * @param {string} input - String que determina el color generado
 * @param {number} max - El valor máximo que puede tomar cada componente de color
 * @throws {TypeError} Si `input` no es un string
 * @throws {Error} Si `max` no es un número entero entre 0 y 255
 * @returns {`rgb(${number}, ${number}, ${number})`} Retorna un string con el formato "rgb(red, green, blue)" donde cada componente es un entero entre 0 y `max`
 */
export const colorBasadoEnString = (input: string, max: number): `rgb(${number}, ${number}, ${number})` => {
    if (typeof input !== 'string') throw new TypeError(`colorBasadoEnString debe recibir un string. Se ha recibido ${JSON.stringify(input)} (${typeof input})`);
    if (typeof max !== 'number' || max < 0) throw new Error(`colorBasadoEnString debe recibir un número positivo o cero como segundo parámetro. Se ha recibido ${JSON.stringify(max)} (${typeof max})`);
    if (max > 255) throw new Error(`colorBasadoEnString: El segundo parámetro no puede ser mayor a 255. Se ha recibido ${JSON.stringify(max)} (${typeof max})`);

    const hash = Array.from(input).reduce((acc, ch) => acc * 31 + ch.codePointAt(0)!, 0);

    const divisor = max + 1;

    const red = (hash * 37) % divisor;
    const green = (hash * 53) % divisor;
    const blue = (hash * 67) % divisor;
    return `rgb(${red}, ${green}, ${blue})`;
};
