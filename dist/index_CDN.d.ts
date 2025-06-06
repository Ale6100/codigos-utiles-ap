declare const probabilidadDeN: (n: number) => boolean;
declare const numeroAlAzar: (num1: number, num2: number) => number;
declare const numeroEnteroAlAzar: (num1: number, num2: number) => number;
declare const esPar: (n: number) => boolean;
declare const esDivisor: (num1: number, num2: number) => boolean;
declare const divisores: (num: number) => number[];
declare const factoresMasCercanos: (n: number) => number[];
declare const round: (n: number, m: number) => number;
declare const factorial: (n: number) => number;
declare const elementoAlAzar: (array: any[]) => any;
declare const mezclarArray: <T>(array: T[]) => T[];
declare const obtenerNElementos: (array: any[], n: number) => any[];
declare const arange: (origen: number, final: number, espaciado?: number) => number[];
declare const linspace: (origen: number, final: number, densidad: number) => number[];
declare const ubicacionNElementosMasGrandes: (array: number[], n: number) => number[];
declare const eliminarNumerosYStringsRepetidos: (array: (string | number)[]) => (string | number)[];
declare const stringAleatorio: (a: number, b: number) => string;
declare const superTrim: (string: string) => string;
declare const tieneMayuscula: (string: string) => boolean;
declare const tieneCaracterEspecial: (string: string) => boolean;
declare const tieneNumero: (string: string) => boolean;
declare const esStringNumerico: (string: string) => boolean;
declare const unirStrings: (arrayAUnir: (string | null | undefined)[], nonValue: string) => string;
declare const crearObjeto: (claves: any[], valores: any[]) => Object;
declare const esObjetoLiteral: (param: any) => boolean;
declare const tieneLasPropiedadesObligatorias: (objeto: {
    [key: string]: any;
}, propiedadesObligatorias: string[]) => boolean;
declare const tieneSoloLasPropiedadesPermitidas: (objeto: {
    [key: string]: any;
}, propiedadesPermitidas: string[]) => boolean;
declare const colorRandom: () => `rgb(${number}, ${number}, ${number})`;
declare const waitFor: (time: number) => Promise<void>;
declare const colorBasadoEnString: (input: string, max: number) => `rgb(${number}, ${number}, ${number})`;
