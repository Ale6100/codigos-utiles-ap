"use strict";

// Recibe un número entre 0 y 100. Devuelve true el n% de las veces
const probabilidadDeN = (n) => {
    return Math.random()*100 <= n
}

// Recibe dos números enteros y de vuelve un número entero al azar entre ellos
const numeroEnteroAlAzar = (a, b) => {
    const random = Math.random() // Número al azar entre 0 y 1 (sin incluir el 1)
    const randomAmpliado = random*(Math.abs(b-a)+1) // Entre 0 y |b-a|+1 (sin incluir el |b-a|+1). Aumento el rango
    const randomEntero = parseInt(randomAmpliado) // Número entero entre 0 y |b-a|
    const numeroMasChico = a < b ? a : b
    return randomEntero + numeroMasChico // Desplazo el rango para que inicie donde inicia el número más pequeño
}

// Recibe dos números enteros y devuelve un número al azar entre ellos
const numeroAlAzar = (a, b) => {
    const random = Math.random()
    const randomAmpliado = random*(Math.abs(b-a)) //  Entre 0 y |b-a|. En este caso no es necesario sumar 1
    const numeroMasChico = a < b ? a : b
    return randomAmpliado + numeroMasChico
}

// Recibe un array y devuelve un elemento al azar
const elementoAlAzar = (array) => {
    const random = Math.random() // Número al azar entre 0 y 1 (sin incluir el 1)
    const randomAmpliado = random*array.length // Número al azar entre 0 y array.length (sin incluir el array.length)
    const indexAlAzar = parseInt(randomAmpliado) // Número entero al azar entre 0 y array.length-1. Observar que es una posición i-ésima al azar del array
    return array[indexAlAzar] // Gracias al indice al azar se devuelve un elemento al azar
}

// Si N es divisor de n, devuelve true
const esDivisor = (n, N) => { 
    return n%N == 0 ? true : false
}

// Recibe un número entero y devuelve un array con todos sus divisores
const divisores = (n) => {
    const signoDen = n/Math.abs(n)
    n = Math.abs(n)
    let divisoresDeN = []
    for (let i = 1; i <= n/2; i++) {
        if (esDivisor(n, i)) {
            divisoresDeN.push(i*signoDen)
        }
    }
    divisoresDeN.push(n*signoDen)
    return divisoresDeN // Por ejemplo si n=12, divisoresDeN = [1, 2, 3, 4, 6, 12]
}

// Recibe un número natural y devuelve un array con dos valores [a, b] tal que n=a*b, donde a y b son los valores más cercanos posibles
const factoresMasCercanos = (n) => {
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

// Redondea a dos decimales. Fuente: https://www.delftstack.com/es/howto/javascript/javascript-round-to-2-decimal-places/#uso-de-la-funci%C3%B3n-personalizada-para-redondear-un-n%C3%BAmero-a-2-decimales-en-javascript
const redondear = (num) => {
    return +(Math.round(num + "e+2")  + "e-2")
};

// Recibe tres números. Devuelve un array de números desde el origen hasta el final (sin incluir) solicitado, considerando un espaciado entre valores consecutivos
// Si no se pide el espaciado se sobreentiende que es de 1
const arange = (origen, final, espaciado = 1) => {
    const array = []
    for (let i=origen; i<final; i+=espaciado) {
        array.push(i)
    }
    return array
}

// Recibe tres números. Devuelve un array de números equiespaciados desde el origen hasta el final solicitado, considrando la densidad (cantidad) de valores pedidos
const linspace = (origen, final, densidad) => {
    const espaciado = (final-origen)/(densidad-1)
    const array = []
    for (let i=origen; i<=final; i+=espaciado) {
        array.push(i)
    }
    return array
}

// Recibe un array y lo devuelve mezclado
const mezclar = (array) => {
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

// Recibe un número entero mayor o igual a cero. Devuelve el factorial de dicho número.
const factorial = (num) => {
    let r = 1
    for (let i = 1; i<=num; i++) {
        r = i*r
    }
    return r
}

// Recibe un número. Devuelve true si es par, pero falso si es impar
const esPar = (num) => {
    return num%2 == 0
}
