var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split(' ').map(value => parseInt(value));

var a = valores[0];
var b = valores[1];
var c = valores[2];

// Encontra o maior entre a e b
var maiorAB = (a + b + Math.abs(a - b)) / 2;

// Encontra o maior entre o resultado anterior e c
var maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(maiorABC + " eh o maior");
