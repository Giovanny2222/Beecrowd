var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var idadeEmDias = parseInt(input);

var anos = Math.floor(idadeEmDias / 365);
idadeEmDias %= 365;

var meses = Math.floor(idadeEmDias / 30);
idadeEmDias %= 30;

var dias = idadeEmDias;

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");
