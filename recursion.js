const space = function () {
    console.log("\n");
};


/*Esta función power, que hace lo ismo que el operadpr **(exponenciación)
*/


function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3));

space();

/*Al comenzar desde el número 1 y repetidamente sumar 5 o multiplicar 3, se puede producir un conjunto infinito
* de números. Por ejemplo, el número 13 podría alcanzarse al multiplicar por 3 y luego sumar 5 dos veces , mientras que
* el número 15 no podría alcanzarse en absoluto*/


function findSolution(objetivo) {
    function find(actual, historial) {
        if (actual === objetivo) {
            return historial;
        } else if (actual > objetivo) {
            return null;
        } else {
            return find(actual + 5, `(${historial}+5)`) ??
                find(actual * 3, `(${historial}*3)`);
        }
    }

    return find(1, "1");
}

console.log(findSolution(24));

space();

//Crecimiento de funciones

/*
   Queremos escribir un programa que imprima dos números: el número de vacas y de pollos en una granja, con las palabras
   Vacas y Pollos después de ellos y 0's rellenados antes de ambos números para que siempre tengan
   tres dígitos.
*/

/*
*   007 Vacas
*   011 Pollos
*
*/

function imprimirInventarioGranja(vacas, pollos) {
    let cadenaVaca = String(vacas);
    while (cadenaVaca.length < 3) {
        cadenaVaca = "0" + cadenaVaca;
    }

    console.log(`${cadenaVaca} Vacas`);

    let cadenaPollo = String(pollos);
    while (cadenaPollo.length < 3) {
        cadenaPollo = "0" + cadenaPollo;
    }
    console.log(`${cadenaPollo} Pollos`);
}

imprimirInventarioGranja(7, 11);

space();


/* Podríamos extender el software para imprimir más animales ?*/

function rellenarConCeros(numero, ancho) {
    let cadena = String(numero);
    while (cadena.length < ancho) {
        cadena = "0" + cadena;
    }
    return cadena;
}

space();


function imprime(vacas, pollos, cerdos) {
    console.log(`${rellenarConCeros(vacas, 3)} Vacas`);
    console.log(`${rellenarConCeros(pollos, 3)} Pollos`);
    console.log(`${rellenarConCeros(cerdos, 3)} Cerdos`);

}

imprime(7, 11, 3);

/*
* Pero el nombre iprimir, es un poco inómodo.Confluye tres cosas:Imprimir,rellenar con ceros y añadir una etiqueta,,
* en una sola función.
*/


//Funciones y Efectos Secundarios

/*Las funciones pueden dividirse aproximadammente en aquellas que se llaman por sus efectos
* secundarios y aquellas que se llaman por su valor de retorno(aunque tabién es posible tener efectos secundarios
* y devolver un valor).
*
*
*
*
* */