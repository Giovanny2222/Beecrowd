var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Constante π
const PI = 3.14159;

// Converter a entrada para um valor de ponto flutuante
var raio = parseFloat(lines[0]);

// Calcular a área da circunferência
var area = PI * Math.pow(raio, 2);

// Imprimir o resultado formatado com 4 casas decimais
console.log("A=" + area.toFixed(4));
