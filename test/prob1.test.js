//https://leetcode.com/problems/palindrome-number/description/

const { default: expect } = require("expect");

const fs = require('fs');
const path = require('path');
const prob1 = require('../prob1'); // Importe suas funções aqui
prob1.checkPalindrome = jest.fn();
// Lendo o arquivo JSON com os casos de teste
const testCases = JSON.parse(fs.readFileSync(path.resolve('testProb1.json'), 'utf-8'));

describe('Testando as funções isPalindrome e checkPalindrome', () => {
    
    testCases.forEach((testCase, index) => {
        const { input, expectedOutput } = testCase;

        test(`Teste ${index + 1}: isPalindrome(${input}) deve retornar ${expectedOutput}`, () => {
            expect(prob1.isPalindrome(input)).toBe(expectedOutput);
        });

        // test(`Teste ${index + 1}: checkPalindrome(${input}) deve retornar ${expectedOutput}`, () => {
        //     expect(checkPalindrome(input.toString())).toBe(expectedOutput);
        // });
    });

});


