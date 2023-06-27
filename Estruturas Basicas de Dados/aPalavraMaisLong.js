
/* Desafio - Encontre a palavra mais longa em uma string

REQUISITOS:
Deve retornar o comprimento da palavra mais longa na frase fornecida.
Sua resposta deve ser um número.

*/

function findLongestWordLength(str) {
    let txtToArray = str.split(' ').map(item => item.split('').length);
    let wordMax = Math.max(...txtToArray)
    return wordMax;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));