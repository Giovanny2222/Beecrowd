var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Leia os vlaores inteiros A e B
var A = parseInt(lines[0]);
var B = parseInt(lines[1]);

//Calcule a soma de A e B
var SOMA = A + B;

//Imprima o resultado formatado
console.log("SOMA = " +SOMA);