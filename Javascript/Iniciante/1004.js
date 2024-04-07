var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Leia os valores inteiros A e B
var A = parseInt(lines[0]);
var B = parseInt(lines[1]);

// Calcule o produto de A e B
var PROD = A * B;

// Imprima o resultado formatado
console.log("PROD = " + PROD);
