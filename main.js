const sumar = require('./suma');

const restar = require('./resta');

const multiplicar = require('./multiplicacion');

console.log("Calculadora iniciada");

let num1= 5;
let num2= 3;

console.log("Resultado de la suma: "+sumar(num1,num2));
console.log("Resultado de la resta: " +restar(num1,num2));
console.log("Resultado de la multiplicacion: " +multiplicar(num1, num2));