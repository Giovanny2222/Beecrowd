var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Leia os valores de ponto flutuante A, B e C
var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

// Atribua os pesos às notas
var pesoA = 2;
var pesoB = 3;
var pesoC = 5;

// Calcule a média ponderada do aluno
var media = ((A * pesoA) + (B * pesoB) + (C * pesoC)) / (pesoA + pesoB + pesoC);

// Imprima o resultado formatado com 1 dígito após o ponto decimal
console.log("MEDIA = " + media.toFixed(1));
