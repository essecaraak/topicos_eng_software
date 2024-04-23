//https://leetcode.com/problems/palindrome-number/description/

const { default: expect } = require("expect");

const fs = require('fs');
const path = require('path');
const { calculate, count } = require('../prob3'); // Importe suas funções aqui

// Lendo o arquivo JSON com os casos de teste
const testCases = JSON.parse(fs.readFileSync(path.resolve('testProb3.json'), 'utf-8'));

describe('Testando as funções calculate e count', () => {
    testCases.forEach((testCase, index) => {
        const { input, expectedOutput } = testCase;

        test(`Teste ${index + 1}: calculate(${input}) deve retornar ${expectedOutput}`, () => {
            expect(calculate(input)).toBe(expectedOutput);
        });

        // test(`Teste ${index + 1}: checkPalindrome(${input}) deve retornar ${expectedOutput}`, () => {
        //     expect(checkPalindrome(input.toString())).toBe(expectedOutput);
        // });
    });
    
});


