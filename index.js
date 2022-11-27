"use strict";
// Link GitHub: https://github.com/Ale6100/Funciones-utiles-de-javascript.git
// Link npm: https://www.npmjs.com/package/codigos-utiles-ap


//* ----- NÚMEROS -----


/**
 * Recibe un número entre ```0``` y ```100```. Devuelve ```true``` el ```n%``` de las veces
 * @param {number|string} n Número entre ```0``` y ```100``` 
 * @returns {boolean}
 */
const probabilidadDeN = (n) => {
    if (n != parseFloat(n) || n < 0 || n > 100) throw new Error('probabilidadDeN debe recibir un número entre 0 y 100')
    return Math.random()*100 <= n
}

/**
 * Recibe dos números ```num1``` y ```num2```. Devuelve un número al azar entre ellos (no incluye al ```num2```)
 * @param {number} num1 Primer número
 * @param {number} num2 Segundo número
 * @returns {number}
 */
 const numeroAlAzar = (num1, num2) => {
    if (num1 !== parseFloat(num1) || num2 !== parseFloat(num2)) throw new Error('numeroAlAzar debe recibir dos números')
    const random = Math.random()
    const randomAmpliado = random*(Math.abs(num2-num1)) //  Número al azar entre 0 y |num2-num1| (este último sin incluir)
    const numeroMasChico = num1 < num2 ? num1 : num2
    return numeroMasChico + randomAmpliado // Desplazo el rango para que inicie donde inicia el número más pequeño
}

/**
 * Recibe dos números enteros y devuelve un número entero al azar entre ellos
 * @param {number} num1 Primer número entero 
 * @param {number} num2 Segundo número entero
 * @returns {number} Retorna un numero entero al azar entre ```num1``` y ```num2```
 */
const numeroEnteroAlAzar = (num1, num2) => {
    if (num1 !== parseInt(num1) || num2 !== parseInt(num2)) throw new Error('numeroEnteroAlAzar debe recibir dos números enteros')
    const numeroBuscado = Math.round(numeroAlAzar(num1, num2))
    return numeroBuscado === -0 ? 0 : numeroBuscado // Tuve que hacer esta validación para que a veces no redondee como -0 en vez de 0
}

/**
 * Recibe dos números. Si ```num2``` es divisor de ```num1``` (es decir, si ```num1/num2``` tiene resto cero) entonces devuelve ```true```
 * @param {number|string} num1 Primer número
 * @param {number|string} num2 Segundo número
 * @returns {boolean}
 */
const esDivisor = (num1, num2) => { 
    return num1%num2 == 0
}

/**
 * Recibe un número entero y devuelve un array con todos sus divisores
 * @param {number|string} num Número al que queremos hallarle sus divisores
 * @returns {Array<number>}
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
    return divisoresDeN // Por ejemplo si num=12, divisoresDeN = [1, 2, 3, 4, 6, 12]
}

/**
 * Recibe un número natural ```n``` y devuelve un array con dos valores ```[a, b]``` tal que ```n=a*b```, donde ```a``` y ```b``` son los valores más cercanos posibles.
 * @param {number|string} n Número natural
 * @returns {Array<number>}
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
 * @param {number|string} n Número que queremos redondear
 * @returns {number}
 */
const redondear = (n) => {
    if (n != parseFloat(n)) throw new Error('redondear debe recibir un número')
    return +(Math.round(n + "e+2") + "e-2")
};

/**
 * Recibe un número natural o cero. Devuelve el factorial de dicho número.
 * @param {number|string} n Número al que queremos hallar su factorial
 * @returns {number}
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
 * Recibe un número. Devuelve ```true``` si es par, pero ```false``` si es impar
 * @param {number|string} n Número al que queremos preguntar si es par
 * @returns {boolean}
 */
const esPar = (n) => {
    if (n != parseFloat(n)) throw new Error('esPar debe recibir un número')
    return n%2 == 0
}


//* ----- ARRAYS -----


/**
 * Recibe un array y retorna un elemento al azar
 * @param {Array} array
 * @returns {any}
 */
const elementoAlAzar = (array) => {
    if (typeof array == "number" || typeof array == "string") throw new Error('elementoAlAzar debe recibir un array')
    const random = Math.random() // Número al azar entre 0 y 1 (sin incluir el 1)
    const randomAmpliado = random*array.length // Número al azar entre 0 y array.length (sin incluir el array.length)
    const indexAlAzar = parseInt(randomAmpliado) // Número entero al azar entre 0 y array.length-1. Observar que es una posición i-ésima al azar del array
    return array[indexAlAzar] // Gracias al indice al azar se devuelve un elemento al azar
}

/**
 * Recibe un array y un número natural ```n```. Devuelve ```n``` elementos al azar del array
 * @param {Array} array
 * @param {number|string} n Número natural
 * @returns {array}
 */
const obtenerNElementos = (array, n) => {
    if (typeof array == "number" || typeof array == "string") throw new Error('El primer parámetro de obtenerNElementos debe ser un array')
    if (n != parseInt(n) || n <= 0 || array.length < n) throw new Error('El segundo parámetro de obtenerNElementos debe ser un número natural mayor a la longitud del array en el primer parámetro')
    const elementos = []
    while (elementos.length < n) {
        const elementoRandom = elementoAlAzar(array)
        if (!elementos.includes(elementoRandom)) {
            elementos.push(elementoRandom)
        }
    }
    return elementos
}

/**
 * Recibe tres números. El tercero es opcional pero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final (sin incluir) solicitado, considerando el espaciado solicitado
 * @param {number} origen Origen del array a retornar
 * @param {number} final Final (sin incluir) del array a retornar
 * @param {number} [espaciado] (opcional) Espacio/distancia entre los valores de los elementos del array a retornar. Su valor es 1 por defecto
 * @returns {Array<number>} Retorna un array con las condiciones pedidas en los parámetros
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
 * Recibe tres números. Los primeros dos deben ser distintos. El tercero debe ser positivo. Devuelve un array de números equiespaciados desde el origen hasta el final solicitado, considrando la densidad (cantidad) de valores pedidos
 * @param {number} origen Origen del array a retornar
 * @param {number} final Final del array a retornar, debe ser distinto al primer parámetro
 * @param {number} densidad Cantidad de valores equiespaciados en el array a retornar
 * @returns {Array<number>} Retorna un array con las condiciones pedidas en los parámetros
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

/**
 * Recibe un array y lo devuelve mezclado
 * @param {array} array
 * @returns {array}
 */
const mezclarArray = (array) => {
    if (typeof array == "number" || typeof array == "string") throw new Error('mezclar debe recibir un array')
    const arrayMezclado = []
    array.forEach(() => {
        while (true) {
            const elemetoAlAzar_ = elementoAlAzar(array)
            if (arrayMezclado.includes(elemetoAlAzar_) === false) { // Si el elemento no está en el nuevo array entonces lo agrega, se deja de repetir el while, y se ejecuta de nuevo el for
                arrayMezclado.push(elemetoAlAzar_)
                break
            }
        }
    })
    return arrayMezclado
}


//* ----- STRINGS -----


/**
 * Recibe un número ```n``` natural, devuelve un string con carácteres aleatorios de longitud ```n```
 * @param {number|string} n Longitud esperada del string a retornar
 * @returns {string}
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
 * Retorna un color rgb al azar
 * @returns {string}
 */
const colorRandom = () => {
    const red = parseInt(Math.random()*256)
    const green = parseInt(Math.random()*256)
    const blue = parseInt(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`
}

/**
 * Hace que tu código asincrónico espere el tiempo (en milisegundos) que le pases como parámetro
 * @param {number} time Tiempo de espera en milisegundos 
 * @returns {promise<void>} Devuelve una promesa
 * @example <caption>Ejemplo de uso:</caption>
 * const funcionDeEjemplo = async () => {
    // Tarea 1
    // Tarea 2
    await waitFor(3000) // Espera 3 segundos antes de ejecutar la tarea 3
    // Tarea 3
    }

    funcionDeEjemplo()
 */
const waitFor = (time) => {
    if (typeof time !== "number" || time < 0) throw new Error("waitFor debe recibir un número positivo")
    return new Promise((res, rej) => setTimeout(() => {res()}, time))
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
    obtenerNElementos,
    arange,
    linspace,
    mezclarArray,
    stringAleatorio,
    colorRandom,
    waitFor
}
