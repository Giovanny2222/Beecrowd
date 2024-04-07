var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Leia os números inteiros e o número com duas casas decimais
var numero = parseInt(lines[0]);
var horasTrabalhadas = parseInt(lines[1]);
var valorPorHora = parseFloat(lines[2]);

// Calcule o salário do funcionário
var salario = horasTrabalhadas * valorPorHora;

// Imprima o número do funcionário
console.log("NUMBER = " + numero);

// Imprima o salário do funcionário com duas casas decimais e formato de moeda
console.log("SALARY = U$ " + salario.toFixed(2));
