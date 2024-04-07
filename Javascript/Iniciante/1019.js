var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var segundos = parseInt(input);

var horas = Math.floor(segundos / 3600);
segundos %= 3600;

var minutos = Math.floor(segundos / 60);
segundos %= 60;

console.log(horas + ":" + minutos + ":" + segundos);