//https://leetcode.com/problems/roman-to-integer/description/
function getValue(char) {
    switch(char) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1; // Retorna -1 se o caractere não for reconhecido como numeral romano válido
    }
}

function romanToInt(s) {
    let result = 0;
    let prevValue = 0;

    for (let i = 0; i < s.length; i++) {
        const value = getValue(s[i]);
        if (value == -1 ) {
            return "não é um numero romano válido"; // Retorna uma mensagem indicando que o numeral romano é inválido
        }
        
        if (value < prevValue) {
            result -= value;
        } else if(value > prevValue ) {    
            result += value;
        }
        prevValue = value;
    }

    return result;
}

// Testando com "IM"
console.log(romanToInt("IMA")); // Output: "não é um numero romano válido"
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
