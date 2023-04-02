// @ts-check
// Link GitHub: https://github.com/Ale6100/codigos-utiles-ap.git
// Link npm: https://www.npmjs.com/package/codigos-utiles-ap
//? Este es el archivo principal del módulo.
//? Con el objetivo de hacer que la documentación funcione para ambas maneras de importar el módulo (importándolo todo a la vez o en partes específicas mediante desestructuración) tuve que duplicar la documentación de cada función
//! ----- NÚMEROS -----
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
    if (typeof n !== "number" || n < 0 || n > 100)
        throw new Error(`probabilidadDeN debe recibir un número entre 0 y 100. Se ha recibido ${JSON.stringify(n)} (${typeof n})`);
    return Math.random() * 100 <= n;
};
/**
 * Recibe dos números `num1` y `num2` donde `num1` <= `num2`. Devuelve un número al azar entre ellos (no incluye al `num2`)
 * @param {number} num1 Primer número
 * @param {number} num2 Segundo número (debe ser mayor o igual que el primero)
 * @throws {error} Si alguno de los parámetros no es un número
 * @returns {number} Un número al azar entre `num1` y `num2` (sin incluir al `num2`)
 */
export const numeroAlAzar = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        throw new Error(`numeroAlAzar debe recibir dos números. Se ha recibido ${JSON.stringify(num1)} (${typeof num1}) y ${JSON.stringify(num2)} (${typeof num2})`);
    if (num1 > num2)
        throw new Error(`El primer parámetro de numeroAlAzar debe ser menor o igual que el segundo. Se ha recibido ${JSON.stringify(num1)} y ${JSON.stringify(num2)}`);
    const randomAmpliado = Math.random() * (num2 - num1); //  Número al azar entre 0 y (num2-num1) (este último sin incluir)
    return num1 + randomAmpliado; // Desplazo el rango para que inicie donde inicia el número más pequeño (num1)
};
/**
 * Recibe dos números enteros y devuelve un número entero al azar entre ellos (incluyendo a ambos números)
 * @param {number} num1 Primer número entero
 * @param {number} num2 Segundo número entero
 * @throws {error} Si alguno de los parámetros no es un entero
 * @returns {number} Retorna un numero entero al azar entre `num1` y `num2`
 */
export const numeroEnteroAlAzar = (num1, num2) => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2))
        throw new Error(`numeroEnteroAlAzar debe recibir dos números enteros. Se ha recibido ${JSON.stringify(num1)} (${typeof num1}) y ${JSON.stringify(num2)} (${typeof num2})`);
    const numeroBuscado = Math.round(numeroAlAzar(num1 - 0.5, num2 + 0.5));
    return numeroBuscado === -0 ? 0 : numeroBuscado; // Evitamos que el resultado pueda ser -0 en lugar de 0
};
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
    if (typeof n !== "number")
        throw new Error(`esPar debe recibir un número. Se ha recibido ${JSON.stringify(n)} (${typeof n})`);
    return n % 2 === 0;
};
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
    if (typeof num1 !== "number" || typeof num2 !== "number")
        throw new TypeError(`esDivisor debe recibir números. Se ha recibido ${JSON.stringify(num1)} (${typeof num1}) y ${JSON.stringify(num2)} (${typeof num2})`);
    return num1 % num2 === 0;
};
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
export const divisores = (num) => {
    if (!Number.isInteger(num))
        throw new Error(`divisores debe recibir un número entero. Se ha recibido ${JSON.stringify(num)} (${typeof num})`);
    if (num === 0)
        return [Infinity, Infinity];
    const signoDeN = num / Math.abs(num);
    num = Math.abs(num);
    let divisoresDeN = [];
    for (let i = 1; i <= num / 2; i++) {
        if (esDivisor(num, i)) {
            divisoresDeN.push(i * signoDeN);
        }
    }
    divisoresDeN.push(num * signoDeN);
    return divisoresDeN;
};
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
export const factoresMasCercanos = (n) => {
    if (!Number.isInteger(n) || n <= 0)
        throw new Error(`factoresMasCercanos debe recibir un número natural. Se ha recibido ${JSON.stringify(n)} (${typeof n})`);
    let divisoresDeN = divisores(n); // Si n=12, entonces esto es [ 1, 2, 3, 4, 6, 12 ]. Para encontrar los factores más cercanos observo que se llega a 12 multiplicando el primero con el último, el segundo con el anteúltimo, etc.
    const divisoresDeNLength = divisoresDeN.length;
    if (divisoresDeNLength === 2)
        return divisoresDeN;
    let factor1, factor2;
    if (esPar(divisoresDeNLength)) {
        factor1 = divisoresDeN[divisoresDeNLength / 2 - 1];
        factor2 = divisoresDeN[divisoresDeNLength / 2];
    }
    else {
        factor1 = divisoresDeN[Math.floor(divisoresDeNLength / 2)];
        factor2 = factor1;
    }
    return [factor1, factor2]; // Si n=12, entonces retorna [3, 4]
};
/**
 * Recibe un número `n` y lo devuelve redondeado a `m` decimales
 * @param {number} n Número que se quiere redondear
 * @param {number} m Cantidad de decimales que se van a redondear
 * @returns {number} Retorna el número redondeado a `m` decimales
 * @throws {TypeError} - Si `n` o `m` no son números
 * @throws {Error} - Si `m` es menor que 0 o mayor que 100
 * @example
 * import codigosap from "codigos-utiles-ap"
 *
 * codigosap.round(12.3456, 2) // retorna 12.35
 * codigosap.round(16.9982, 3) // retorna 16.998
 */
export const round = (n, m) => {
    if (typeof n !== "number" || typeof m !== "number")
        throw new TypeError(`round debe recibir dos números. Se ha recibido ${JSON.stringify(n)} (${typeof n}) y ${JSON.stringify(m)} (${typeof m})`);
    if (m < 0 || 100 < m)
        throw new Error("El segundo parámetro de round debe ser un número entre 0 y 100");
    return parseFloat(n.toFixed(m));
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
    if (!Number.isInteger(n) || n < 0)
        throw new Error(`factorial debe recibir un número natural o cero. Se ha recibido ${JSON.stringify(n)} (${typeof n})`);
    let r = 1;
    for (let i = 1; i <= n; i++) {
        r = i * r;
    }
    return r;
};
//! ----- ARRAYS -----
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
export const elementoAlAzar = (array) => {
    if (!Array.isArray(array))
        throw new TypeError(`elementoAlAzar debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`);
    const randomAmpliado = Math.random() * array.length; // Número al azar entre 0 y array.length (sin incluir el array.length)
    const indexAlAzar = Math.floor(randomAmpliado); // Número entero al azar entre 0 y array.length-1. Observar que es una posición i-ésima al azar del array
    return array[indexAlAzar]; // Gracias al indice al azar se devuelve un elemento al azar
};
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
export const mezclarArray = (array) => {
    if (!Array.isArray(array))
        throw new TypeError(`mezclar debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`);
    const arraySplice = Array.from(array); // Necesito copiar para no modificar al original
    const arrayMezclado = [];
    while (arraySplice.length > 0) { // Elimino un elemento al azar del array original, y al mismo tiempo lo coloco en el "array mezclado". Repito el ciclo hasta que el array original quede vacío
        const indiceAzar = Math.floor(Math.random() * arraySplice.length);
        const elementoRandom = arraySplice.splice(indiceAzar, 1)[0];
        arrayMezclado.push(elementoRandom);
    }
    return arrayMezclado;
};
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
export const obtenerNElementos = (array, n) => {
    if (!Array.isArray(array))
        throw new TypeError(`El primer parámetro de obtenerNElementos debe ser un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`);
    if (!Number.isInteger(n) || n <= 0 || array.length < n)
        throw new Error(`El segundo parámetro de obtenerNElementos debe ser un número natural menor o igual a la longitud del array del primer parámetro. Se ha recibido ${JSON.stringify(n)} (${typeof n})`);
    const nuevoArray = mezclarArray(array);
    return nuevoArray.slice(0, n);
};
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
export const arange = (origen, final, espaciado = 1) => {
    if (typeof origen !== 'number' || typeof final !== 'number')
        throw new Error(`Los primeros dos parámetros de arange deben ser númericos. Se ha recibido ${JSON.stringify(origen)} (${typeof origen}) y ${JSON.stringify(final)} (${typeof final})`);
    if (typeof espaciado !== 'number' || espaciado <= 0)
        throw new Error(`El tercer parámetro de arange debe ser un número mayor a cero. Se ha recibido ${JSON.stringify(espaciado)} (${typeof espaciado})`);
    const array = [];
    for (let i = origen; i < final; i += espaciado) {
        array.push(i);
    }
    return array;
};
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
export const linspace = (origen, final, densidad) => {
    if (typeof origen !== 'number' || typeof final !== 'number' || typeof densidad !== 'number')
        throw new Error(`linspace debe recibir números. Se ha recibido ${JSON.stringify(origen)} (${typeof origen}), ${JSON.stringify(final)} (${typeof final}) y ${JSON.stringify(densidad)} (${typeof densidad})`);
    if (origen === final)
        throw new Error(`Los primeros dos parámetros de linspace deben ser números distintos. Ambos tienen el siguiente valor: ${JSON.stringify(origen)} (${typeof origen})`);
    if (densidad <= 0)
        throw new Error(`El tercer parámetro de linspace debe ser un número positivo. Se ha recibido ${JSON.stringify(densidad)} (${typeof densidad})`);
    if (densidad === 1)
        return [origen];
    const espaciado = (final - origen) / (densidad - 1);
    const array = [];
    for (let i = 0; i <= densidad - 2; i++) { // Se agrega desde el primer número hasta el anteúltimo
        array.push(origen + i * espaciado);
    }
    array.push(final); // Agrega el último
    return array;
};
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
export const ubicacionNElementosMasGrandes = (array, n) => {
    if (!Array.isArray(array) || !array.every(elemento => typeof elemento === "number"))
        throw new TypeError(`El primer parámetro de ubicacionNElementosMasGrandes debe ser un array de números. Se ha recibido ${JSON.stringify(array)} (${typeof array})`);
    if (!Number.isInteger(n) || n <= 0 || array.length < n)
        throw new Error(`El segundo parámetro de ubicacionNElementosMasGrandes debe ser un número natural menor o igual a la longitud del array del primer parámetro. Se ha recibido ${JSON.stringify(n)} (${typeof n})`);
    const arrayCopia = Array.from(array); // Necesito copiar para no modificar al original
    const valoresMasGrandes = arrayCopia.sort((a, b) => b - a).slice(0, n);
    const indices = []; // Ubicacion de los n elementos más grandes del array
    array.forEach((elemento, index) => {
        if (valoresMasGrandes.includes(elemento))
            indices.push(index);
    });
    return indices;
};
//! ----- STRINGS -----
/**
 * Recibe un número `n` natural, devuelve un string con carácteres aleatorios de longitud `n`
 * @param {number} n Longitud esperada del string a retornar. Debe ser un número natural (entero positivo)
 * @returns {string} Retorna un string aleatorio de longitud `n`
 * @throws {Error} Si `n` no es un número natural
 */
export const stringAleatorio = (n) => {
    if (!Number.isInteger(n) || n <= 0)
        throw new Error(`stringAleatorio debe recibir número natural. Se ha recibido ${JSON.stringify(n)} (${typeof n})`);
    const simbolos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789¡!¿?@#$%&()+-=*,.;:_";
    let stringRandom = "";
    for (let i = 1; i <= n; i++) {
        stringRandom += simbolos[Math.floor(simbolos.length * Math.random())];
    }
    return stringRandom;
};
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
export const superTrim = (string) => {
    if (typeof string !== "string")
        throw new TypeError(`superTrim debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`);
    string = string.trim();
    while (string.includes("  ")) {
        string = string.replaceAll("  ", " ");
    }
    return string;
};
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
export const tieneMayuscula = (string) => {
    if (typeof string !== "string")
        throw new TypeError(`tieneMayuscula debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`);
    return /\p{Lu}/u.test(string);
};
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
export const tieneCaracterEspecial = (string) => {
    if (typeof string !== "string")
        throw new TypeError(`tieneCaracterEspecial debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`);
    return /[\p{P}\p{S}\p{M}\p{C}\p{Cf}]/gu.test(string);
};
/**
 * Recibe un string. Devuelve true si el string tiene algún número y false en caso contrario
 * @param string {string} String que se desea analizar
 * @returns {boolean} Retorna un booleano que indica si el argumento contiene algún caracter numérico
 * @throws {TypeError} Si el argumento no es un string
 */
export const tieneNumero = (string) => {
    if (typeof string !== "string")
        throw new TypeError(`tieneNumero debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`);
    return /\d+/u.test(string);
};
//! ----- OBJETOS -----
/**
 * Recibe dos arrays `claves` y `valores`, retorna un objeto cuyas claves son los elementos de `claves` y los valores son los elementos de `valores`
 * @param {any[]} claves Array cuyos elementos serán las claves del objeto
 * @param {any[]} valores Array cuyos elementos serán los valores del objeto
 * @throws {TypeError} Si los parámetros no son arrays, o si el primer array contiene algún elemento de tipo object
 * @throws {Error} Si los parámetros no son arrays de igual longitud
 * @returns Retorna un objeto literal con las características mencionadas
 */
export const crearObjeto = (claves, valores) => {
    if (!Array.isArray(claves) || !Array.isArray(valores))
        throw new TypeError(`crearObjeto debe recibir dos arrays. Se ha recibido ${JSON.stringify(claves)} (${typeof claves}) y ${JSON.stringify(valores)} (${typeof valores})`);
    if (claves.length !== valores.length)
        throw new Error(`Los parámetros de crearObjeto deben ser arrays de igual longitud`);
    if (claves.some(clave => typeof clave === "object"))
        throw new TypeError(`El primer parámetro de crearObjeto debe ser un array cuyos elementos no deben ser de tipo object`);
    const obj = {};
    claves.forEach((clave, i) => obj[clave] = valores[i]);
    return obj;
};
/**
 * Recibe un elemento de cualquier tipo. Devuelve true si es un objeto literal y false en caso contrario
 * @param {any} param Valor a analizar
 * @returns Retorna un valor booleano
 */
export const esObjetoLiteral = (param) => {
    return (typeof param === "object" && !Array.isArray(param) && param !== null);
};
//! ----- OTROS -----
/**
 * Retorna un color RGB al azar
 * @returns {string} Retorna un string con el formato "rgb(red, green, blue)" donde red, green y blue son números enteros entre 0 y 255
 */
export const colorRandom = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};
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
    if (typeof time !== "number" || time < 0)
        throw new Error(`waitFor debe recibir un número positivo (en milisegundos). Se ha recibido ${JSON.stringify(time)} (${typeof time})`);
    return new Promise((resolve, reject) => setTimeout(resolve, time));
};
export default {
    /**
     * Recibe un número `n` entre `0` y `100`. Devuelve `true` el `n%` de las veces
     * @param {number} n Número entre `0` y `100` que representa la probabilidad de que la función devuelva `true`
     * @returns {boolean} Valor booleano que representa si se ha cumplido la probabilidad dada por `n`
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.probabilidadDeN(40) // devuelve true o false con una probabilidad del 40%
     */
    probabilidadDeN,
    /**
     * Recibe dos números `num1` y `num2`. Devuelve un número al azar entre ellos (no incluye al `num2`)
     * @param {number} num1 Primer número
     * @param {number} num2 Segundo número
     * @throws {error} Si alguno de los parámetros no es un número
     * @returns {number} Un número al azar entre `num1` y `num2` (sin incluir al `num2`)
     */
    numeroAlAzar,
    /**
     * Recibe dos números enteros y devuelve un número entero al azar entre ellos (incluyendo a ambos números)
     * @param {number} num1 Primer número entero
     * @param {number} num2 Segundo número entero
     * @throws {error} Si alguno de los parámetros no es un entero
     * @returns {number} Retorna un numero entero al azar entre `num1` y `num2`
     */
    numeroEnteroAlAzar,
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
    esPar,
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
    esDivisor,
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
    divisores,
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
    factoresMasCercanos,
    /**
     * Recibe un número `n` y lo devuelve redondeado a `m` decimales
     * @param {number} n Número que se quiere redondear
     * @param {number} m Cantidad de decimales que se van a redondear
     * @returns {number} Retorna el número redondeado a `m` decimales
     * @throws {TypeError} - Si `n` o `m` no son números
     * @throws {Error} - Si `m` es menor que 0 o mayor que 100
     * @example
     * import codigosap from "codigos-utiles-ap"
     *
     * codigosap.round(12.3456, 2) // retorna 12.35
     * codigosap.round(16.9982, 3) // retorna 16.998
     */
    round,
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
    factorial,
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
    elementoAlAzar,
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
    mezclarArray,
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
    obtenerNElementos,
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
    arange,
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
    linspace,
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
    ubicacionNElementosMasGrandes,
    /**
     * Recibe un número `n` natural, devuelve un string con carácteres aleatorios de longitud `n`
     * @param {number} n Longitud esperada del string a retornar. Debe ser un número natural (entero positivo)
     * @returns {string} Retorna un string aleatorio de longitud `n`
     * @throws {Error} Si `n` no es un número natural
     */
    stringAleatorio,
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
    superTrim,
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
    tieneMayuscula,
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
    tieneCaracterEspecial,
    /**
     * Recibe un string. Devuelve true si el string tiene algún número y false en caso contrario
     * @param string {string} String que se desea analizar
     * @returns {boolean} Retorna un booleano que indica si el argumento contiene algún caracter numérico
     * @throws {TypeError} Si el argumento no es un string
     */
    tieneNumero,
    /**
     * Recibe dos arrays `claves` y `valores`, retorna un objeto cuyas claves son los elementos de `claves` y los valores son los elementos de `valores`
     * @param {any[]} claves Array cuyos elementos serán las claves del objeto
     * @param {any[]} valores Array cuyos elementos serán los valores del objeto
     * @throws {TypeError} Si los parámetros no son arrays, o si el primer array contiene algún elemento de tipo object
     * @throws {Error} Si los parámetros no son arrays de igual longitud
     * @returns Retorna un objeto literal con las características mencionadas
     */
    crearObjeto,
    /**
     * Recibe un elemento de cualquier tipo. Devuelve true si es un objeto literal y false en caso contrario
     * @param {any} param Valor a analizar
     * @returns Retorna un valor booleano
     */
    esObjetoLiteral,
    /**
     * Retorna un color RGB al azar
     * @returns {string} Retorna un string con el formato "rgb(red, green, blue)" donde red, green y blue son números enteros entre 0 y 255
     */
    colorRandom,
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
    waitFor
};
