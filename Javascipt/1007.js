var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Leia os valores inteiros A,B,C e D
var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var C = parseInt(lines[2]);
var D = parseInt(lines[3]);

//Calucle a diferença do produto de A e B pelo produto de C e D 
var DIFERENCA = (A * B) -(C * D);

//Imprima o resultado formatado
console.log("DIFERENCA = " + DIFERENCA);
