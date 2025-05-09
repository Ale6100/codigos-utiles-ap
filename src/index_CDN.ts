// Link GitHub: https://github.com/Ale6100/codigos-utiles-ap.git
// Link npm: https://www.npmjs.com/package/codigos-utiles-ap

//? Este archivo está hecho para ser usado exclusivamente como etiqueta link CDN en archivos HTML. La etiqueta es la siguiente: <script src="https://cdn.jsdelivr.net/npm/codigos-utiles-ap/dist/index_CDN.min.js"></script>

//! ----- NÚMEROS -----

const probabilidadDeN = (n: number): boolean => {
    if (typeof n !== "number" || isNaN(n) || n < 0 || n > 100) throw new Error(`probabilidadDeN debe recibir un número entre 0 y 100. Se recibió ${n} (${typeof n})`);
    return Math.random() * 100 <= n;
}

const numeroAlAzar = (num1: number, num2: number): number => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) throw new Error(`numeroAlAzar requiere números válidos. Se recibió ${num1} y ${num2}`);
    if (num1 > num2) throw new Error(`num1 debe ser <= num2. Se recibió ${num1} y ${num2}`);
    return num1 + Math.random() * (num2 - num1);
}

const numeroEnteroAlAzar = (num1: number, num2: number): number => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) throw new Error(`numeroEnteroAlAzar debe recibir dos números enteros. Se ha recibido ${JSON.stringify(num1)} (${typeof num1}) y ${JSON.stringify(num2)} (${typeof num2})`)
    const numeroBuscado = Math.round(numeroAlAzar(num1-0.5, num2+0.5))
    return numeroBuscado === -0 ? 0 : numeroBuscado // Evitamos que el resultado pueda ser -0 en lugar de 0
}

const esPar = (n: number): boolean => {
    if (typeof n !== "number") throw new Error(`esPar debe recibir un número. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    return n%2 === 0
}

const esDivisor = (num1: number, num2: number): boolean => {
    if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) throw new TypeError(`esDivisor requiere dos números. Se recibió ${num1} (${typeof num1}) y ${num2} (${typeof num2})`);
    if (num2 === 0) throw new Error("num2 no puede ser cero");
    return num1 % num2 === 0;
}

const divisores = (num: number): number[] => {
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

const factoresMasCercanos = (n: number): number[] => {
    if (!Number.isInteger(n) || n <= 0) throw new Error(`factoresMasCercanos debe recibir un número natural. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    let divisoresDeN = divisores(n) // Si n=12, entonces esto es [ 1, 2, 3, 4, 6, 12 ]. Para encontrar los factores más cercanos observo que se llega a 12 multiplicando el primero con el último, el segundo con el anteúltimo, etc.
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

const round = (n: number, m: number): number => {
    if (typeof n !== "number" || typeof m !== "number") throw new TypeError("round requiere números");
    if (m < 0 || m > 100 || !Number.isInteger(m)) throw new Error("m debe ser entero entre 0 y 100");
    const factor = Math.pow(10, m);
    return Math.round((n + Number.EPSILON) * factor) / factor;
}

const factorial = (n: number): number => {
    if (!Number.isInteger(n) || n < 0) throw new Error(`factorial debe recibir un número natural o cero. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    let r = 1
    for (let i=1; i<=n; i++) {
        r = i*r
    }
    return r
}


//! ----- ARRAYS -----


const elementoAlAzar = (array: any[]): any => {
    if (!Array.isArray(array)) throw new TypeError(`elementoAlAzar debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    return array[Math.floor(Math.random()*array.length)]
}

const mezclarArray = <T>(array: T[]): T[] => {
    if (!Array.isArray(array)) throw new TypeError(`mezclar debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) { // Algoritmo de Fisher-Yates
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
    }
    return shuffled;
}

const obtenerNElementos = (array: any[], n: number): any[] => {
    if (!Array.isArray(array)) throw new TypeError(`El primer parámetro de obtenerNElementos debe ser un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    if (!Number.isInteger(n) || n <= 0 || array.length < n) throw new Error(`El segundo parámetro de obtenerNElementos debe ser un número natural menor o igual a la longitud del array del primer parámetro. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    const nuevoArray = mezclarArray(array)
    return nuevoArray.slice(0, n)
}

const arange = (origen: number, final: number, espaciado: number = 1): number[] => {
    if (typeof origen !== 'number' || typeof final !== 'number') throw new Error(`Los primeros dos parámetros de arange deben ser númericos. Se ha recibido ${JSON.stringify(origen)} (${typeof origen}) y ${JSON.stringify(final)} (${typeof final})`)
    if (typeof espaciado !== 'number' || espaciado <= 0) throw new Error(`El tercer parámetro de arange debe ser un número mayor a cero. Se ha recibido ${JSON.stringify(espaciado)} (${typeof espaciado})`)
    if ((final - origen) / espaciado <= 0) return [];
    const steps = Math.ceil((final - origen) / espaciado);
    return Array.from({length: steps}, (_, i) => origen + i * espaciado);
}

const linspace = (origen: number, final: number, densidad: number): number[] => {
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

const ubicacionNElementosMasGrandes = (array: number[], n: number): number[] => {
    if (!Array.isArray(array) || !array.every(elemento => typeof elemento === "number")) throw new TypeError(`El primer parámetro de ubicacionNElementosMasGrandes debe ser un array de números. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    if (!Number.isInteger(n) || n <= 0 || array.length < n) throw new Error(`El segundo parámetro de ubicacionNElementosMasGrandes debe ser un número natural menor o igual a la longitud del array del primer parámetro. Se ha recibido ${JSON.stringify(n)} (${typeof n})`)
    const valoresMasGrandes = array.toSorted((a, b) => b-a).slice(0, n)

    const indices: number[] = [] // Ubicacion de los n elementos más grandes del array
    array.forEach((elemento, index) => {
        if (valoresMasGrandes.includes(elemento)) indices.push(index)
    })
    return indices
}

const eliminarNumerosYStringsRepetidos = (array: (string | number)[]): (string | number)[] => {
    if (!Array.isArray(array)) throw new TypeError(`eliminarNumerosYStringsRepetidos debe recibir un array. Se ha recibido ${JSON.stringify(array)} (${typeof array})`)
    if (array.some(e => !(typeof e === "string" || (typeof e === "number" && !isNaN(e))))) throw new TypeError(`El array de eliminarNumerosYStringsRepetidos sólo debe contener elementos de tipo string y number (y sin NaN). Se ha recibido ${JSON.stringify(array)}`)
    return [...new Set(array)];
}

//! ----- STRINGS -----


const stringAleatorio = (a: number, b: number): string => {
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

const superTrim = (string: string): string => {
    if (typeof string !== "string") throw new TypeError(`superTrim debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`)
    return string.trim().replace(/\s+/g, ' ');
}

const tieneMayuscula = (string: string): boolean => {
    if (typeof string !== "string") throw new TypeError(`tieneMayuscula debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`)
    return /\p{Lu}/u.test(string);
}

const tieneCaracterEspecial = (string: string): boolean => {
    if (typeof string !== "string") throw new TypeError(`tieneCaracterEspecial debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`)
    return /[\p{P}\p{S}\p{M}\p{C}\p{Cf}]/gu.test(string)
}

const tieneNumero = (string: string): boolean => {
    if (typeof string !== "string") throw new TypeError(`tieneNumero debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`)
    return /\d+/u.test(string)
}

const esStringNumerico = (string: string): boolean => {
    if (typeof string !== "string") throw new TypeError(`esStringNumerico debe recibir un string. Se ha recibido ${JSON.stringify(string)} (${typeof string})`)
    return string !== "" && !string.includes(" ") && !isNaN(Number(string));
}

const unirStrings = (arrayAUnir: (string | null | undefined)[], nonValue: string): string => {
    if (!Array.isArray(arrayAUnir)) throw new TypeError(`unirStrings debe recibir un array. Se ha recibido ${JSON.stringify(arrayAUnir)} (${typeof arrayAUnir})`);
    if (typeof nonValue !== 'string') throw new TypeError(`El segundo parámetro de unirStrings debe ser un string. Se ha recibido ${JSON.stringify(nonValue)} (${typeof nonValue})`);
    if (arrayAUnir.length === 0 || arrayAUnir.every(s => typeof s !== 'string' || s === '')) return nonValue;
    return arrayAUnir.filter(s => typeof s === 'string' && s != '').join(' ');
}


//! ----- OBJETOS -----


const crearObjeto = (claves: any[], valores: any[]): Object => {
    if (!Array.isArray(claves) || !Array.isArray(valores)) throw new TypeError(`crearObjeto debe recibir dos arrays. Se ha recibido ${JSON.stringify(claves)} (${typeof claves}) y ${JSON.stringify(valores)} (${typeof valores})`)
    if (claves.length !== valores.length) throw new Error(`Los parámetros de crearObjeto deben ser arrays de igual longitud`)
    if (claves.some(clave => typeof clave === "object")) throw new TypeError(`El primer parámetro de crearObjeto debe ser un array cuyos elementos no deben ser de tipo object`)

    const obj: Record<string, any> = {}

    claves.forEach((clave: string, i: number) => obj[clave] = valores[i])
    return obj
}

const esObjetoLiteral = (param: any): boolean => {
    return (typeof param === "object" && !Array.isArray(param) && param !== null)
}

const tieneLasPropiedadesObligatorias = (objeto: {[key: string]: any}, propiedadesObligatorias: string[]): boolean => {
    if (!esObjetoLiteral(objeto) || !Array.isArray(propiedadesObligatorias) || propiedadesObligatorias.some(prop => typeof prop !== "string" || !prop.trim())) throw new Error(`tieneLasPropiedadesObligatorias debe recibir un objeto literal y un array de strings no vacío. Se ha recibido ${JSON.stringify(objeto)} (${typeof objeto}) y ${JSON.stringify(propiedadesObligatorias)} (${typeof propiedadesObligatorias})`)
    return propiedadesObligatorias.every(prop => objeto.hasOwnProperty(prop));
}

const tieneSoloLasPropiedadesPermitidas = (objeto: {[key: string]: any}, propiedadesPermitidas: string[]): boolean => {
    if (!esObjetoLiteral(objeto) || !Array.isArray(propiedadesPermitidas) || propiedadesPermitidas.some(prop => typeof prop !== "string" || !prop.trim())) throw new Error(`tieneSoloLasPropiedadesPermitidas debe recibir un objeto literal y un array de strings no vacío. Se ha recibido ${JSON.stringify(objeto)} (${typeof objeto}) y ${JSON.stringify(propiedadesPermitidas)} (${typeof propiedadesPermitidas})`)
    return Object.keys(objeto).every(prop => propiedadesPermitidas.includes(prop))
}


//! ----- OTROS -----


const colorRandom = (): `rgb(${number}, ${number}, ${number})` => {
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`
}


const waitFor = (time: number): Promise<void> => {
    if (typeof time !== "number" || time < 0) throw new Error(`waitFor debe recibir un número positivo (en milisegundos). Se ha recibido ${JSON.stringify(time)} (${typeof time})`)
    return new Promise(resolve => setTimeout(resolve, time))
}

const colorBasadoEnString = (input: string, max: number): `rgb(${number}, ${number}, ${number})` => {
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
