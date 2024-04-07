var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var distancia = parseInt(input);

var tempo = 2 * distancia;

console.log(tempo + " minutos");
