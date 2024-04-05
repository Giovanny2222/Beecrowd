var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valor = parseFloat(input);

console.log("NOTAS:");
var notas = [100, 50, 20, 10, 5, 2];
for (var nota of notas) {
    var qtdNotas = Math.floor(valor / nota);
    console.log(qtdNotas + " nota(s) de R$ " + nota.toFixed(2));
    valor %= nota;
}

console.log("MOEDAS:");
var moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
for (var moeda of moedas) {
    var qtdMoedas = Math.floor(valor / moeda);
    console.log(qtdMoedas + " moeda(s) de R$ " + moeda.toFixed(2));
    valor = (valor % moeda).toFixed(2); // Corrigindo o arredondamento para duas casas decimais
}
