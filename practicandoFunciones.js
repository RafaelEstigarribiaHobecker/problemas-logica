const space = function () {
    console.log("\n");
};

const square = function (x) {
    return x * x;
};

console.log(square(2));

space();

const makeNoise = function () {
    console.log("¡Pling!");
};

makeNoise();

space();

const roundTo = function (n, step) {
    let resto = n % step;
    /*
        resto<step/2 : Compara el resto con la mitad del step
        para saber si está más cerca del número anterior o del siguiente.

        ?: es como un if/else
        - Si la condición es verdadero(el resto es pequeño), suma 0.
        - Si la condición es falsa(el resto es grande), suma step para saltar al sgte múltiplo.


     */
    return n - resto + (resto < step / 2 ? 0 : step);
};

console.log(roundTo(28, 10));


