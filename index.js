"use strict";
// Link GitHub: https://github.com/Ale6100/Funciones-utiles-de-javascript.git
// Link npm: https://www.npmjs.com/package/codigos-utiles-ap


//* ----- NÚMEROS -----


/**
 * Recibe un número `n` entre `0` y `100`. Devuelve `true` el `n%` de las veces
 * @param {number|string} n Número entre `0` y `100` que representa la probabilidad de que la función devuelva `true`
 * @returns {boolean} Valor booleano que representa si se ha cumplido la probabilidad dada por `n`
 * @example
 * probabilidadDeN(40) // devuelve true o false con una probabilidad del 40%
 */
const probabilidadDeN = (n) => {
    if (n != parseFloat(n) || n < 0 || n > 100) throw new Error(`probabilidadDeN debe recibir un número entre 0 y 100. Se ha recibido ${n}`)
    return Math.random()*100 <= n
}

/**
 * Recibe dos números `num1` y `num2`. Devuelve un número al azar entre ellos (no incluye al `num2`)
 * @param {number} num1 Primer número
 * @param {number} num2 Segundo número
 * @throws {error} Si alguno de los parámetros no es un número
 * @returns {number} Un número al azar entre `num1` y `num2` (sin incluir al `num2`)
 */
const numeroAlAzar = (num1, num2) => {
    if (num1 !== parseFloat(num1) || num2 !== parseFloat(num2)) throw new Error(`numeroAlAzar debe recibir dos números. Se han recibido ${num1} (${typeof num1}) y ${num2} (${typeof num2})`)
    const random = Math.random()
    const randomAmpliado = random*(Math.abs(num2-num1)) //  Número al azar entre 0 y |num2-num1| (este último sin incluir)
    const numeroMasChico = num1 < num2 ? num1 : num2
    return numeroMasChico + randomAmpliado // Desplazo el rango para que inicie donde inicia el número más pequeño
}

/**
 * Recibe dos números enteros y devuelve un número entero al azar entre ellos
 * @param {number} num1 Primer número entero 
 * @param {number} num2 Segundo número entero
 * @throws {error} Si alguno de los parámetros no es un entero
 * @returns {number} Retorna un numero entero al azar entre `num1` y `num2`
 */
const numeroEnteroAlAzar = (num1, num2) => {
    if (num1 !== parseInt(num1) || num2 !== parseInt(num2)) throw new Error(`numeroEnteroAlAzar debe recibir dos números enteros. Se han recibido ${num1} (${typeof num1}) y ${num2} (${typeof num2})`)
    const numeroBuscado = Math.round(numeroAlAzar(num1, num2))
    return numeroBuscado === -0 ? 0 : numeroBuscado // Evitamos que el resultado pueda ser -0 en lugar de 0
}

/**
 * Recibe dos números. Si `num2` es divisor de `num1` entonces devuelve `true` (es decir, si `num1/num2` tiene resto cero) 
 * @param {number|string} num1 Primer número
 * @param {number|string} num2 Segundo número
 * @throws {TypeError} - Si alguno de los argumentos no es un número o una cadena de texto que represente a un número
 * @returns {boolean} Devuelve `true` si `num2` es divisor de `num1`, y `false` en caso contrario
 * @example
 * esDivisor(6, 3) // retorna true
 * esDivisor(7, 3) // retorna false
 * esDivisor('6', 3) // retorna true
 * esDivisor(6, '3') // retorna true
 * esDivisor("6", "3") // retorna true
 */
const esDivisor = (num1, num2) => {
    if (typeof num1 !== 'number' && typeof num1 !== 'string') throw new TypeError(`\`num1\` debe ser un número o una cadena de texto que represente a un número, pero se ha recibido ${JSON.stringify(num1)} (${typeof num1})`);
    if (typeof num2 !== 'number' && typeof num2 !== 'string') throw new TypeError(`\`num2\` debe ser un número o una cadena de texto que represente a un número, pero se ha recibido ${JSON.stringify(num2)} (${typeof num2})`)
    return num1 % num2 === 0
}

/**
 * Recibe un número entero y devuelve un array con todos sus divisores
 * @param {number|string} num Número al que se le quieren determinar los divisores
 * @throws {error} Si `num` no es un número entero
 * @returns {Array<number>} Un array con los divisores del número `num`
 * @example
 * divisores(12) // returns [1, 2, 3, 4, 6, 12]
 * divisores(-12) // returns [-1, -2, -3, -4, -6, -12]
 */
const divisores = (num) => {
    if (num != parseInt(num)) throw new Error('divisores debe recibir un número entero')
    if (num == 0) return Infinity
    const signoDen = num/Math.abs(num)
    num = Math.abs(num)
    let divisoresDeN = []
    for (let i = 1; i <= num/2; i++) {
        if (esDivisor(num, i)) {
            divisoresDeN.push(i*signoDen)
        }
    }
    divisoresDeN.push(num*signoDen)
    return divisoresDeN
}

/**
 * Recibe un número natural `n` y devuelve un array con dos valores `[a, b]` tal que `n=a*b`, donde `a` y `b` son los valores más cercanos posibles.
 * @param {number|string} n Número natural al que se le quieren determinar los factores más cercanos
 * @returns {Array<number>} Un array con dos elementos `[a, b]`, donde `a` y `b` son los factores de `n` más cercanos posibles 
 * @throws {Error} Si `n` no es un número natural
 * @example
 * factoresMasCercanos(12) // retorna [4, 3]
 * factoresMasCercanos(16) // retorna [4, 4]
 */
const factoresMasCercanos = (n) => {
    if (n != parseInt(n) || n <= 0) throw new Error('factoresMasCercanos debe recibir un número natural')
    let divisoresDeN = divisores(n)
    let res = divisoresDeN 
        
    if (divisoresDeN.length != 2){
        let factoresDeN = []
        let nCopia = n
        let i = 1
        while (nCopia != 1) { // Acá hago algo que en la secundaria a veces se nombraba como "método de factoreo"
            if (esDivisor(nCopia, divisoresDeN[i])) {
                factoresDeN.push(divisoresDeN[i])
                nCopia = nCopia/divisoresDeN[i]
            } else {
                i = i + 1
            }
        } // Llegados a este punto, si n=12, entonces factoresDeN = [2, 2, 3]. La idea es quedarse únicamente con dos factores en vez de tres.
        let factor1 = 1
        let factor2 = 1
        for (let i=0; i<factoresDeN.length; i++) {
            if (i < factoresDeN.length/2) {
                factor1 = factor1*factoresDeN[i]
            } else {
                factor2 = factor2*factoresDeN[i]
            }
        }
        res = [factor1, factor2]
    }
    return res // Si n=12, entonces retorna [4, 3]
}

/**
 * Recibe un número y lo devuelve redondeado a dos decimales. Fuente: https://www.delftstack.com/es/howto/javascript/javascript-round-to-2-decimal-places/#uso-de-la-funci%C3%B3n-personalizada-para-redondear-un-n%C3%BAmero-a-2-decimales-en-javascript
 * @param {number|string} n Número que se quiere redondear
 * @returns {number} Retorna el número redondeado a dos decimales
 * @throws {Error} - Si `n` no es un número
 * @example
 * redondear(12.3456) // retorna 12.35
 * redondear(16.998) // retorna 17
 */
const redondear = (n) => {
    if (n != parseFloat(n)) throw new Error('redondear debe recibir un número')
    return +(Math.round(n + "e+2") + "e-2")
};

/**
 * Recibe un número natural o cero. Devuelve el factorial de dicho número.
 * @param {number|string} n Número al que se le quiere calcular el factorial
 * @returns {number} Retorna el factorial de `n`
 * @throws {Error} Si `n` no es un número natural o es menor que cero
 * @example
 * factorial(1) // retorna 1
 * factorial(3) // retorna 6
 * factorial(4) // retorna 24
 */
const factorial = (n) => {
    if (n != parseInt(n) || n < 0) throw new Error('factorial debe recibir un número natural o cero')
    let r = 1
    for (let i = 1; i<=n; i++) {
        r = i*r
    }
    return r
}

/**
 * Recibe un número. Devuelve `true` si es par, pero `false` si es impar
 * @param {number|string} n Número que se quiere evaluar
 * @returns {boolean} Retorna `true` si `n` es par, o `false` si es impar.
 * @throws {Error} Si `n` no es un número o una cadena de texto que represente a un número
 * @example
 * esPar(2) // retorna true
 * esPar(3) // retorna false
 */
const esPar = (n) => {
    if (n != parseFloat(n)) throw new Error('esPar debe recibir un número')
    return n%2 === 0
}


//* ----- ARRAYS -----


/**
 * Recibe un array y retorna un elemento al azar
 * @param {Array} array Array del cual se quiere seleccionar un elemento al azar
 * @returns {any} Retorna un elemento al azar del array
 * @throws {TypeError} Si el argumento no es un array
 * @example
 * elementoAlAzar([1, 'b', 3, 4]) // Puede retornar cualquiera de los elementos del array
 * elementoAlAzar([]) // retorna `undefined`, ya que el array está vacío
 */
const elementoAlAzar = (array) => {
    if (!Array.isArray(array)) throw new TypeError('elementoAlAzar debe recibir un array')
    const random = Math.random() // Número al azar entre 0 y 1 (sin incluir el 1)
    const randomAmpliado = random*array.length // Número al azar entre 0 y array.length (sin incluir el array.length)
    const indexAlAzar = Math.floor(randomAmpliado) // Número entero al azar entre 0 y array.length-1. Observar que es una posición i-ésima al azar del array
    return array[indexAlAzar] // Gracias al indice al azar se devuelve un elemento al azar
}

/**
 * Recibe un array y lo devuelve mezclado
 * @param {array} array Array que se pretende mezclar
 * @returns {array} Retorna el array mezclado
 * @throws {TypeError} Si el argumento no es un array
 * @example
 * mezclarArray([1, 'b', 3, 4]) // Puede retornar cualquier combinación de los elementos del array
 * mezclarArray([]) // Retorna un array vacío, ya que el array de entrada estaba vacío
 */
const mezclarArray = (array) => {
    if (!Array.isArray(array)) throw new TypeError('mezclar debe recibir un array')
    const arrayMezclado = []
    while (array.length > 0) { // Elimino un elemento al azar del array original, y al mismo tiempo lo coloco en el "array mezclado". Repito el ciclo hasta que el array original quede vacío
        const indiceAzar = Math.floor(Math.random()*array.length)
        const elementoRandom = array.splice(indiceAzar, 1)[0]
        arrayMezclado.push(elementoRandom)
    }
    return arrayMezclado
}

/**
 * Recibe un array y un número natural `n`. Devuelve `n` elementos al azar del array
 * @param {Array} array Array del cual se quieren seleccionar los elementos
 * @param {number|string} n Cantidad de elementos del array que se quieren seleccionar
 * @returns {array} Retorna un array con `n` elementos seleccionados al azar del array de entrada
 * @throws {Error} Si el primer argumento no es un array o el segundo argumento no es un número natural y menor o igual a la longitud del array
 * @example
 * obtenerNElementos([1, 'b', 3, 4], 2) // Puede retornar cualquier combinación de dos elementos del array
 * obtenerNElementos(['a', 'b', 5], 1) // Puede retornar cualquier elemento del array
 * obtenerNElementos([], 3) // Lanza un error, ya que el array está vacío y no se pueden seleccionar 3 elementos 
 */
const obtenerNElementos = (array, n) => {
    if (!Array.isArray(array)) throw new TypeError('El primer parámetro de obtenerNElementos debe ser un array')
    if (n != parseInt(n) || n <= 0 || array.length < n) throw new Error('El segundo parámetro de obtenerNElementos debe ser un número natural mayor a la longitud del array del primer parámetro')
    const indicesUsados = []
    const nuevoArray = []
    while (nuevoArray.length < n) { // Agrega n elementos al azar en el nuevo array, siempre y cuando no hayan sido agregados anteriormente
        const indiceAzar = Math.floor(Math.random()*array.length)
        if (indicesUsados.includes(indiceAzar) === false) {
            nuevoArray.push(array[indiceAzar])
            indicesUsados.push(indiceAzar)
        }
    }
    return nuevoArray
}

/**
 * Recibe tres números. El tercero es opcional pero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final (sin incluir) solicitado, considerando el espaciado especificado
 * @param {number} origen Origen del array a retornar
 * @param {number} final Final (sin incluir) del array a retornar
 * @param {number} [espaciado=1] (opcional) Espacio/distancia entre los valores de los elementos del array a retornar. Su valor es 1 por defecto
 * @returns {Array<number>} Retorna un array de números equiespaciados con las condiciones especificadas en los parámetros
 * @throws {Error} Si `origen` o `final` no son números o si `espaciado` no es un número positivo.
 * @example
 * arange(0, 10, 2) // devuelve [0, 2, 4, 6, 8]
 * arange(1, 10) // devuelve [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const arange = (origen, final, espaciado = 1) => {
    if (origen !== parseFloat(origen) || final !== parseFloat(final)) throw new Error('arange debe recibir números')
    if (espaciado !== parseFloat(espaciado) || espaciado <= 0) throw new Error('El tercer parámetro de arange debe ser un número mayor a cero')
    const array = []
    for (let i=origen; i<final; i+=espaciado) {
        array.push(i)
    }
    return array
}

/**
 * Recibe tres números. Los primeros dos deben ser distintos. El tercero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final solicitado, considrando la densidad (cantidad) de valores especificados
 * @param {number} origen Origen del array a retornar
 * @param {number} final Final del array a retornar
 * @param {number} densidad Cantidad de valores equiespaciados en el array a retornar
 * @returns {Array<number>} Retorna un array de números equiespaciados con las condiciones especificadas en los parámetros
 * @throws {Error} Si alguno de los tres argumentos no es un número, si `origen` es igual a `final`, o si `densidad` es negativa.
 * @example
 * linspace(0, 10, 5) // devuelve [0, 2.5, 5, 7.5, 10]
 * linspace(-1, 1, 3) // devuelve [-1, 0, 1]
 */
const linspace = (origen, final, densidad) => {
    if (origen !== parseFloat(origen) || final !== parseFloat(final) || densidad !== parseFloat(densidad)) throw new Error('linspace debe recibir números')
    if (origen == final) throw new Error('Los primeros dos parámetros de linspace deben ser números distintos')
    if (densidad < 0) throw new Error('El tercer parámetro de linspace debe ser un número positivo')
    const espaciado = (final-origen)/(densidad-1)
    const array = []
    for (let i=origen; i<=final; i+=espaciado) {
        array.push(i)
    }
    return array
}


//* ----- STRINGS -----


/**
 * Recibe un número `n` natural, devuelve un string con carácteres aleatorios de longitud `n`
 * @param {number|string} n Longitud esperada del string a retornar. Debe ser un número natural (entero positivo)
 * @returns {string} Retorna un string aleatorio de longitud `n`
 * @throws {Error} Si `n` no es un número natural.
 */
const stringAleatorio = (n) => {
    if (n != parseInt(n) || n <= 0) throw new Error('stringAleatorio debe recibir número natural')
    const simbolos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789¡!¿?@#$%&()+-=*,.;:_"
    let stringRandom = ""
    for (let i=1; i<=n; i++) {
        stringRandom += simbolos[parseInt(simbolos.length*Math.random())]
    }
    return stringRandom
}


//* ----- OTROS -----


/**
 * Retorna un color RGB al azar
 * @returns {string} Retorna un string con el formato "rgb(red, green, blue)" donde red, green y blue son números enteros entre 0 y 255
 */
const colorRandom = () => {
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
    import codigosap from "codigos-utiles-ap"

    const funcionDeEjemplo = async () => {
        // Tarea 1
        // Tarea 2
        await codigosap.waitFor(3000) // Espera 3 segundos antes de ejecutar la tarea 3
        // Tarea 3
    }

    funcionDeEjemplo()
 */
const waitFor = (time) => {
    if (typeof time !== "number" || time < 0) throw new Error("waitFor debe recibir un número positivo (en milisegundos)")
    return new Promise((resolve, reject) => setTimeout(resolve, time))
}

export default {
    probabilidadDeN,
    numeroAlAzar,
    numeroEnteroAlAzar,
    esDivisor,
    divisores,
    factoresMasCercanos,
    redondear,
    factorial,
    esPar,
    elementoAlAzar,
    mezclarArray,
    obtenerNElementos,
    arange,
    linspace,
    stringAleatorio,
    colorRandom,
    waitFor
}
