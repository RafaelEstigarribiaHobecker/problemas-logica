// Pila de Llamadas

function saludar(who) {
    console.log("Hola " + who);
}

saludar("Harry");
console.log("Adiós");

// Pila Infinita

/*

function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log(chicken() + " salió primero.")

*/

//Argumentos Opcionales

function square(x) {
    return x * x;
}

/*square de define con solo un parámetro. Sin embargo, cuando lo llamamos con tres,
el lenguaje no se queja. Ignora los argumentos adicionales y calcula el cuadrado del primero*/
console.log(square(4, true, "erizo"));


function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));


console.log(minus(10, 5));

function roundTo(n, step = 1) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(roundTo(4.5));

console.log(roundTo(4.5,2));

function wrapValue(n){
    let local =n;
    return()=>local;
}

let wrap1=wrapValue(1);

let wrap2=wrapValue(2);

console.log(wrap1());

console.log(wrap2());


function multiplier(factor){
    return number => number*factor;
}

let twice=multiplier((2));

console.log(twice(5));

