var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines[0]);
var velocidadeMedia = parseInt(lines[1]);

var distancia = tempo * velocidadeMedia;

var litrosNecessarios = distancia / 12;

console.log(litrosNecessarios.toFixed(3));