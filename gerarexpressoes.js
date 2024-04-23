var TreeNode = function(left, right, operator) {
    this.left = left;
    this.right = right;
    this.operator = operator;
    
    this.toString = function() {
        return '(' + left + ' ' + operator + ' ' + right + ')';
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var x = ['-','+'];

function buildTree(numNodes) {
    if (numNodes === 1)
        return getRandomInt(1, 1000);
    
    var numLeft = Math.floor(numNodes / 2);
    var leftSubTree = buildTree(numLeft);
    var numRight = Math.ceil(numNodes / 2);
    var rightSubTree = buildTree(numRight);
    
    var m = getRandomInt(0, x.length-1);
    var str = x[m];
    return new TreeNode(leftSubTree, rightSubTree, str);
}

const fs = require('fs');
const path = require('path');




// Gera um objeto de teste com um número aleatório e a saída esperada sendo true se o número é um palíndromo
function generateTestCase() {
    const expectedOutput = getRandomInt(1,6);
    tree=buildTree(expectedOutput)
    entrada=tree.toString();
    saida=eval(tree.toString());
    return {
        input:  entrada,
        expectedOutput: saida,
    };
}

// Gera um array de casos de teste
const testCases = Array.from({ length: 980 }, generateTestCase);

// Escreve o array de casos de teste em um arquivo JSON
fs.writeFileSync(path.resolve('testProb3.json'), JSON.stringify(testCases, null, 2));


