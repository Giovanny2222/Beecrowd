var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines[0];
var salarioFixo = parseFloat(lines[1]);
var totalVendas = parseFloat(lines[2]);

var comissao = 0.15 * totalVendas;

var totalReceber = salarioFixo + comissao;

console.log("TOTAL = R$ " + totalReceber.toFixed(2));