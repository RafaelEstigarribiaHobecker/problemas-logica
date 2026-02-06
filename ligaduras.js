const space = function () {
    console.log("\n");
}


let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(y);
}
space();

console.log(z);
space();

console.log(x);

space();

/*
    La excepción es cuando múltiples ligaduras tienen el mismo nombre,
    en ese caso, el código solo puede ver la más interna.

*/

const halve = function (n) {
    return n / 2;
}

let n = 10;

console.log(halve(100));
space();

console.log(n);

/*Ámbito Anidado
*      Función dentro de otra
*       Ingredientes necesarios para hacer un lote de hummus.

*/

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s"; /*Con esto plularizamos los ingredientes*/
        }

        console.log(`${ingredientAmount} ${unit} ${name}`);
    };

    ingredient(1, "lata", "garbanzos");
    ingredient(0.25, "taza", "tahini");
    ingredient(0.25, "taza", "jugo de limón");
    ingredient(1, "diente", "ajo");
    ingredient(2, "cucharada", "aceite de oliva");
    ingredient(0.5, "cucharadita", "comino");
};
hummus(1);
space();
hummus(2);
space();

function square(x) {
    return x * x;
}

console.log("El cuadrado de 2 es " + square(2) + ".");

space();

console.log("El futuro dice:", future());

function future() {
    return "Nunca tendrás autos voladores";
}

space();

const roundTo = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

/*  La flecha viene después de la lista de parámetros y es seguida por el cuerpo de la función.
    Expresa algo así como "esta entrada(los parámetros) produce este resultado(el cuerpo)".

*/

console.log(roundTo(23, 10));

space();

/* Estas dos definiciones de exponente hacen lo mismo */

const exponente1 = (x) => {
    return x * x
};
const exponente2 = x => x * x;

console.log(exponente1(2));

space();

console.log(exponente2(2));

space();

const cuerno = () => {
    console.log("Toot");
};

cuerno();


