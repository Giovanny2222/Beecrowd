var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pontos1 = lines[0].split(' ').map(value => parseFloat(value));
var pontos2 = lines[1].split(' ').map(value => parseFloat(value));


var x1 = pontos1[0];
var y1 = pontos1[1];
var x2 = pontos2[0]
var y2 = pontos2[1]

var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distancia.toFixed(4));