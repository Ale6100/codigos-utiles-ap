// @ts-check

// Link GitHub: https://github.com/Ale6100/codigos-utiles-ap.git
// Link npm: https://www.npmjs.com/package/codigos-utiles-ap

//* ----- NÚMEROS -----

/**
 * Recibe un número `n` entre `0` y `100`. Devuelve `true` el `n%` de las veces
 * @param {number} n Número entre `0` y `100` que representa la probabilidad de que la función devuelva `true`
 * @returns {boolean} Valor booleano que representa si se ha cumplido la probabilidad dada por `n`
 * @example
 * import codigosap from "codigos-utiles-ap"
 * 
 * codigosap.probabilidadDeN(40) // devuelve true o false con una probabilidad del 40%
 */
export const probabilidadDeN = (n) => {
    if (typeof n !== "number" || n < 0 || n > 100) throw new Error(`probabilidadDeN debe recibir un número entre 0 y 100. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    return Math.random()*100 <= n
}

/**
 * Recibe dos números `num1` y `num2`. Devuelve un número al azar entre ellos (no incluye al `num2`)
 * @param {number} num1 Primer número
 * @param {number} num2 Segundo número
 * @throws {error} Si alguno de los parámetros no es un número
 * @returns {number} Un número al azar entre `num1` y `num2` (sin incluir al `num2`)
 */
export const numeroAlAzar = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new Error(`numeroAlAzar debe recibir dos números. Se ha recibido ${JSON.stringify(num1)} (${typeof num1}) y ${JSON.stringify(num2)} (${typeof num2})`)
    const randomAmpliado = Math.random()*(Math.abs(num2-num1)) //  Número al azar entre 0 y |num2-num1| (este último sin incluir)
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
export const numeroEnteroAlAzar = (num1, num2) => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) throw new Error(`numeroEnteroAlAzar debe recibir dos números enteros. Se ha recibido ${JSON.stringify(num1)} (${typeof num1}) y ${JSON.stringify(num2)} (${typeof num2})`)
    const numeroBuscado = Math.round(numeroAlAzar(num1-0.5, num2+0.5))
    return numeroBuscado === -0 ? 0 : numeroBuscado // Evitamos que el resultado pueda ser -0 en lugar de 0
}

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
export const esDivisor = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") throw new TypeError(`esDivisor debe recibir números. Se ha recibido ${JSON.stringify(num1)} (${typeof num1}) y ${JSON.stringify(num2)} (${typeof num2})`)
    return num1 % num2 === 0
}

/**
 * Recibe un número entero y devuelve un array con todos sus divisores
 * @param {number} num Número al que se le quieren determinar los divisores
 * @throws {error} Si `num` no es un número entero
 * @returns {Array<number>} Un array con los divisores del número `num`
 * @example
 * import codigosap from "codigos-utiles-ap"
 * 
 * codigosap.divisores(12) // returns [1, 2, 3, 4, 6, 12]
 * codigosap.divisores(-12) // returns [-1, -2, -3, -4, -6, -12]
 */
export const divisores = (num) => {
    if (!Number.isInteger(num)) throw new Error(`divisores debe recibir un número entero. Se ha recibido ${JSON.stringify(num)} (${typeof num})`)
    if (num == 0) return [Infinity, Infinity]
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
 * Recibe un número natural `n` y devuelve un array con dos valores `[a, b]` tal que `n=a*b`, donde `a` y `b` son los valores más cercanos posibles
 * @param {number} n Número natural al que se le quieren determinar los factores más cercanos
 * @returns {Array<number>} Un array con dos elementos `[a, b]`, donde `a` y `b` son los factores de `n` más cercanos posibles 
 * @throws {Error} Si `n` no es un número natural
 * @example
 * import codigosap from "codigos-utiles-ap"
 * 
 * codigosap.factoresMasCercanos(12) // retorna [4, 3]
 * codigosap.factoresMasCercanos(16) // retorna [4, 4]
 */
export const factoresMasCercanos = (n) => {
    if (!Number.isInteger(n) || n <= 0) throw new Error(`factoresMasCercanos debe recibir un número natural. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
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
 * @param {number} n Número que se quiere redondear
 * @returns {number} Retorna el número redondeado a dos decimales
 * @throws {Error} - Si `n` no es un número
 * @example
 * import codigosap from "codigos-utiles-ap"
 * 
 * codigosap.redondear(12.3456) // retorna 12.35
 * codigosap.redondear(16.998) // retorna 17
 */
export const redondear = (n) => {
    if (typeof n !== "number") throw new Error(`redondear debe recibir un número. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    return +(Math.round(parseFloat(n.toString() + "e+2")) + "e-2")
};

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
export const factorial = (n) => {
    if (!Number.isInteger(n) || n < 0) throw new Error(`factorial debe recibir un número natural o cero. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    let r = 1
    for (let i = 1; i<=n; i++) {
        r = i*r
    }
    return r
}

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
export const esPar = (n) => {
    if (typeof n !== "number") throw new Error(`esPar debe recibir un número. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    return n%2 === 0
}


//* ----- ARRAYS -----


/**
 * Recibe un array y retorna un elemento al azar
 * @param {Array} array Array del cual se quiere seleccionar un elemento al azar
 * @returns {any} Retorna un elemento al azar del array
 * @throws {TypeError} Si el argumento no es un array
 * @example
 * import codigosap from "codigos-utiles-ap"
 * 
 * codigosap.elementoAlAzar([1, 'b', 3, 4]) // Puede retornar cualquiera de los elementos del array
 * codigosap.elementoAlAzar([]) // retorna `undefined`, ya que el array está vacío
 */
export const elementoAlAzar = (array) => {
    if (!Array.isArray(array)) throw new TypeError(`elementoAlAzar debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
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
 * import codigosap from "codigos-utiles-ap"
 * 
 * codigosap.mezclarArray([1, 'b', 3, 4]) // Puede retornar cualquier combinación de los elementos del array
 * codigosap.mezclarArray([]) // Retorna un array vacío, ya que el array de entrada estaba vacío
 */
export const mezclarArray = (array) => {
    if (!Array.isArray(array)) throw new TypeError(`mezclar debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
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
 * @param {number} n Cantidad de elementos del array que se quieren seleccionar
 * @returns {array} Retorna un array con `n` elementos seleccionados al azar del array de entrada
 * @throws {Error} Si el primer argumento no es un array o el segundo argumento no es un número natural y menor o igual a la longitud del array
 * @example
 * import codigosap from "codigos-utiles-ap"
 * 
 * codigosap.obtenerNElementos([1, 'b', 3, 4], 2) // Puede retornar cualquier combinación de dos elementos del array
 * codigosap.obtenerNElementos(['a', 'b', 5], 1) // Puede retornar cualquier elemento del array
 * codigosap.obtenerNElementos([], 3) // Lanza un error, ya que el array está vacío y no se pueden seleccionar 3 elementos 
 */
export const obtenerNElementos = (array, n) => {
    if (!Array.isArray(array)) throw new TypeError(`El primer parámetro de obtenerNElementos debe ser un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    if (!Number.isInteger(n) || n <= 0 || array.length < n) throw new Error(`El segundo parámetro de obtenerNElementos debe ser un número natural menor o igual a la longitud del array del primer parámetro. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    const indicesUsados = []
    const nuevoArray = []
    while (nuevoArray.length < n) { // Agrega n elementos al azar en el nuevo array, siempre y cuando no hayan sido agregados anteriormente
        const indiceAzar = Math.floor(Math.random()*array.length)
        if (!indicesUsados.includes(indiceAzar)) {
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
 * import codigosap from "codigos-utiles-ap"
 * 
 * codigosap.arange(0, 10, 2) // Retorna [0, 2, 4, 6, 8]
 * codigosap.arange(1, 10) // Retorna [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
export const arange = (origen, final, espaciado = 1) => {
    if (typeof origen !== 'number' || typeof final !== 'number') throw new Error(`Los primeros dos parámetros de arange deben ser númericos. Se ha recibido ${JSON.stringify(origen)} (${typeof origen}) y ${JSON.stringify(final)} (${typeof final})`)
    if (typeof espaciado !== 'number' || espaciado <= 0) throw new Error(`El tercer parámetro de arange debe ser un número mayor a cero. Se ha recibido ${JSON.stringify(espaciado)} (${typeof espaciado})`)
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
 * import codigosap from "codigos-utiles-ap"
 * 
 * codigosap.linspace(0, 10, 5) // Retorna [0, 2.5, 5, 7.5, 10]
 * codigosap.linspace(-1, 1, 3) // Retorna [-1, 0, 1]
 */
export const linspace = (origen, final, densidad) => {
    if (typeof origen !== 'number' || typeof final !== 'number' || typeof densidad !== 'number') throw new Error(`linspace debe recibir números. Se ha recibido ${JSON.stringify(origen)} (${typeof origen}), ${JSON.stringify(final)} (${typeof final}) y ${JSON.stringify(densidad)} (${typeof densidad})`)
    if (origen == final) throw new Error(`Los primeros dos parámetros de linspace deben ser números distintos. Ambos tienen el siguiente valor: ${JSON.stringify(origen)} (${typeof origen})`)
    if (densidad < 0) throw new Error(`El tercer parámetro de linspace debe ser un número positivo. Se ha recibido ${JSON.stringify(densidad)} (${typeof densidad})`)
    const espaciado = (final-origen)/(densidad-1)
    const array = []
    for (let i=origen; i<=final; i+=espaciado) {
        array.push(i)
    }
    return array
}

/**
 * Recibe un array de números y un número natural `n`. Devuelve un array de números enteros con las posiciones de los `n` elementos más grandes del array original, o más si hay un empate en los últimos puestos
 * @param {Array<number>} array Array de números
 * @param {number} n Número natural. Cantidad de posiciones a seleccionar del array
 * @returns {Array<number>} Retorna un array de números enteros con las posiciones de los `n` elementos más grandes del array original
 * @throws {TypeError} Si el primer argumento no es un array de números
 * @throws {Error} Si el segundo argumento no es un número natural menor o igual a la longitud del array
 * @example
 * import codigosap from "codigos-utiles-ap"
 * 
 * codigosap.ubicacionNElementosMasGrandes([5, 3, 8, 1, 9, 6], 3) // Retorna [2, 4, 5]
 * codigosap.ubicacionNElementosMasGrandes([1, 3, 4, 0, 3], 2) // Retorna [1, 2, 4]
 */
export const ubicacionNElementosMasGrandes = (array, n) => {
    if (!Array.isArray(array) || !array.every(elemento => typeof elemento === "number")) throw new TypeError(`El primer parámetro de ubicacionNElementosMasGrandes debe ser un array de números. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    if (!Number.isInteger(n) || n <= 0 || array.length < n) throw new Error(`El segundo parámetro de ubicacionNElementosMasGrandes debe ser un número natural menor o igual a la longitud del array del primer parámetro. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    const arrayCopia = []
    array.forEach(elemento => arrayCopia.push(elemento))
    const valoresMasGrandes = array.sort((a, b) => b-a).slice(0, n)

    const indices = [] // Ubicacion de los n elementos más grandes del array
    arrayCopia.forEach((elemento, index) => {
        if (valoresMasGrandes.includes(elemento)) indices.push(index)
    })
    return indices
}


//* ----- STRINGS -----


/**
 * Recibe un número `n` natural, devuelve un string con carácteres aleatorios de longitud `n`
 * @param {number} n Longitud esperada del string a retornar. Debe ser un número natural (entero positivo)
 * @returns {string} Retorna un string aleatorio de longitud `n`
 * @throws {Error} Si `n` no es un número natural.
 */
export const stringAleatorio = (n) => {
    if (!Number.isInteger(n) || n <= 0) throw new Error(`stringAleatorio debe recibir número natural. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    const simbolos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789¡!¿?@#$%&()+-=*,.;:_"
    let stringRandom = ""
    for (let i=1; i<=n; i++) {
        stringRandom += simbolos[Math.floor(simbolos.length*Math.random())]
    }
    return stringRandom
}


//* ----- OBJETOS -----


/**
 * Recibe un array cuyos elementos son arrays dobles con claves y valores, y retorna un objeto cuyas propiedades son las claves y sus valores son los valores correspondientes de los arrays dobles del array de entrada (ver ejemplo)
 * @param {Array} array Array de entrada cuyos elementos deben ser arrays dobles con claves y valores
 * @returns {Object} Retorna un objeto cuyas propiedades son las claves y sus valores son los valores correspondientes de los arrays dobles del array de entrada
 * @throws {TypeError} Si el argumento no es un array o no cumplen con la estructura de arrays dobles con claves y valores
 * @throws {Error} Si las claves del objeto a construir son objetos
 * @example
 * import codigosap from "codigos-utiles-ap"
 * 
 * const array = [["clave1", "valor1"], ["clave2", "valor2"], ["clave3", "valor3"]]
 * codigosap.arrayAObjeto(array) // Retorna { clave1: 'valor1', clave2: 'valor2', clave3: 'valor3' }
 */
export const arrayAObjeto = (array) => {
    if (!Array.isArray(array)) throw new TypeError(`arrayAObjeto debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    if (!array.every(element => element.length === 2 )) throw new TypeError(`arrayAObjeto debe recibir un array cuyos elementos son arrays dobles con elementos clave/valor del objeto a construir. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    if (array.some(element => typeof element[0] === "object")) throw new Error(`Parámetro incorrecto colocado en arrayAObjeto: Las claves del objeto a construir (primer elemento de cada array doble) no deben ser objetos. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    const objeto = {}
    array.forEach(([key, value]) => objeto[key] = value) // Construyo el objeto usando la sintaxis de destructuring
    return objeto
}


//* ----- OTROS -----


/**
 * Retorna un color RGB al azar
 * @returns {string} Retorna un string con el formato "rgb(red, green, blue)" donde red, green y blue son números enteros entre 0 y 255
 */
export const colorRandom = () => {
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
export const waitFor = (time) => {
    if (typeof time !== "number" || time < 0) throw new Error(`waitFor debe recibir un número positivo (en milisegundos). Se ha recibido ${JSON.stringify(time)} (${typeof time})`)
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
    ubicacionNElementosMasGrandes,
    stringAleatorio,
    arrayAObjeto,
    colorRandom,
    waitFor
}
