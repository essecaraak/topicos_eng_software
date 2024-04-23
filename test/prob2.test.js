//https://leetcode.com/problems/palindrome-number/description/

const { default: expect } = require("expect");

const fs = require('fs');
const path = require('path');
const { roman_to_Int, char_to_int } = require('../prob2'); // Importe suas funções aqui

// Lendo o arquivo JSON com os casos de teste
const testCases = JSON.parse(fs.readFileSync(path.resolve('testProb2.json'), 'utf-8'));

describe('Testando as funções roman_to_int e Char_to_int', () => {

    testCases.forEach((testCase, index) => {
        const { input, expectedOutput } = testCase;

        test(`Teste ${index + 21}: roman_to_Int(${input}) deve retornar ${expectedOutput}`, () => {
            expect(roman_to_Int(input)).toBe(expectedOutput);
        });

        // test(`Teste ${index + 1}: checkPalindrome(${input}) deve retornar ${expectedOutput}`, () => {
        //     expect(checkPalindrome(input.toString())).toBe(expectedOutput);
        // });
    });
    
});


