const fs = require('fs');
const path = require('path');

// Gera um número aleatório entre min e max (ambos incluídos)
function romanize (num) {
    if (!+num) return false;
    var digits = String(+num).split('');
    var key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
               '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
               '','I','II','III','IV','V','VI','VII','VIII','IX'];
    var roman = '', i = 3;
    while (i--) roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    return Array(+digits.join('') + 1).join('M') + roman;
  }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gera um objeto de teste com um número aleatório e a saída esperada sendo true se o número é um palíndromo
function generateTestCase() {
    const expectedOutput = getRandomInt(1, 3999);
    return {
        input:  romanize(expectedOutput),
        expectedOutput,
    };
}

// Gera um array de casos de teste
const testCases = Array.from({ length: 980 }, generateTestCase);

// Escreve o array de casos de teste em um arquivo JSON
fs.writeFileSync(path.resolve('testProb2.json'), JSON.stringify(testCases, null, 2));


