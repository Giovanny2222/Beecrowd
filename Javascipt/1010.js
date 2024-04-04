var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var peca1 = lines[0].split(' ');
var codigoPeca1 = parseInt(peca1[0]);
var numeroPecas1 = parseInt(peca1[1]);
var valorUnitarioPeca1 = parseFloat(peca1[2]);

var peca2 = lines[1].split(' ');
var codigoPeca2 = parseInt(peca2[0]);
var numeroPecas2 = parseInt(peca2[1]);
var valorUnitarioPeca2 = parseFloat(peca2[2]);

var valorTotal = (numeroPecas1 * valorUnitarioPeca1) + (numeroPecas2 * valorUnitarioPeca2);

console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2));