var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Leia os valores de ponto flutuantes A e B
var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);

//Atribua os pesos ás notas 
var pesoA =3.5;
var pesoB= 7.5;

//Calcule a média ponderada do aluno
var media = ((A *pesoA) + (B* pesoB)) / (pesoA + pesoB);

//Imprima o resultado formatado com 5 digitos após o ponto decimal 
console.log("MEDIA = " +media.toFixed(5));


