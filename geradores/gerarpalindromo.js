const fs = require('fs');
const path = require('path');

// Gera um número aleatório entre min e max (ambos incluídos)
function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gera um objeto de teste com um número aleatório e a saída esperada sendo true se o número é um palíndromo
function generateTestCase() {
    const input = getRandomInt(10, 10000);
    return {
        input,
        expectedOutput: isPalindrome(input)
    };
}

// Gera um array de casos de teste
const testCases = Array.from({ length: 980 }, generateTestCase);

// Escreve o array de casos de teste em um arquivo JSON
fs.writeFileSync(path.resolve('testCases.json'), JSON.stringify(testCases, null, 2));


