/*
*   Mínimo
*   Define la función min que toma dos argumentos y devuelve su mínimo
*/
function min(a, b) {
    return a < b ? a : b;
}


console.log("El minímo número entre los dos argumentos es el " + min(7, 7) + "!!")


/* Recursion
    Hemos visto que podemos usar % para verificar si un núero es par o impar al usar % 2 para
    ver si es divisible por dos. Aquí hay otra forma de definir si un núemro entero positivo
    es par o impar.
        - El cero es par.
        - El uno es impar.
        - Para cualquier otro número N, su paridad es la misa que N-2.
    Define una función recursiva isEven que corresponda a esta descripción.

 */

function isEven(a) {
    if (a === 0) {
        return true;

    } else if (a === 1) {
        return false;
    } else if (a < 0) {
        return isEven(a + 2);
    } else {
        return isEven(a - 2);
    }
}

const resultado = isEven(-1);

if (resultado) {
    console.log("El número es par!!!");
} else {
    console.log("El número es impar!!!");
}


/*Contando Frijoles
    Puedes obtener el *ésimo carácter, o letra, de una cadena escribiendo [N] después
    de la cadena (por ejemplo, cadena[2]). El valor resultante será una
    cadena que contiene solo un carácter (por ejemplo, "b"). El primer carácter
    tiene la posición 0, lo que hace que el último se encuentre en la posición cadena
    .length - 1. En otras palabras, una cadena de dos caracteres tiene longitud
    2, y sus caracteres tienen posiciones 0 y 1.
    Escribe una función contarBs que tome una cadena como único argumento
    y devuelva un número que indique cuántos caracteres B en mayúscula hay en
    la cadena.
    A continuación, escribe una función llamada contarCaracter que se comporte
    como contarBs, excepto que toma un segundo argumento que indica el
    carácter que se va a contar (en lugar de contar solo caracteres B en mayúscula).

*/

function contarBs(string) {
    let count = 0;
    for (let x = 0; x < string.length; x++) {
        if (string[x] === "B") {
            count++;
        }
    }
    return count;
}

apariciones = contarBs("BeBe de la Casa Bordó")
console.log(`La cantidad de apariciones de la B en esta palabra es de ${apariciones}`);


function contarCaracter(string, letter) {
    let count = 0;
    for (let x = 0; x < string.length; x++) {
        if (string[x] === letter) {
            count++;
        }
    }
    return count;
}

contadorApariciones = contarCaracter("Perro hambriento y sudado", "a");
console.log(`La cantidad de apariciones de la letra a es de ${contadorApariciones}`);

//Reescribe contarBs para hacer uso de esta nueva función.

function remasteredContarBs(string) {
    return contarCaracter(string, "B");
}

apariciones = remasteredContarBs("BeBe de la Casa Bordó");
console.log(`Usando funciones anidadas, la cantidad de apariciones de la letra B es de ${apariciones}`);

