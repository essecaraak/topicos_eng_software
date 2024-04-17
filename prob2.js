//https://leetcode.com/problems/roman-to-integer/description/
// Define a function named roman_to_Int that converts a Roman numeral to an integer.
function roman_to_Int(str1) {
    // Check if str1 is null, if so, return -1.
    if(str1 == null) return "Não é um numero romano válido";
    // Initialize the variable num with the integer value of the first character in str1.
    var num = char_to_int(str1.charAt(0));
    var pre, curr;

    // Iterate through the characters of str1 starting from the second character.
    for(var i = 1; i < str1.length; i++){
        curr = char_to_int(str1.charAt(i)); // Get the integer value of the current character.
        pre = char_to_int(str1.charAt(i-1)); // Get the integer value of the previous character.
        // If the current character's value is less than or equal to the previous character's value, add it to num.
        if(curr==-1){
            return "Não é um numero romano válido"
        }
        if(curr <= pre){
            num += curr;
        } else {
            // If the current character's value is greater than the previous character's value, subtract twice the previous character's value and add the current character's value to num.
            num = num - pre*2 + curr;
        }
    }

    
        return num;
    
    
}

// Define a function named char_to_int that returns the integer value of a Roman numeral character.
function char_to_int(c){
    switch (c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1; // Return -1 for invalid characters.
    }
}

// Output the integer value of the Roman numeral 'XXVI' to the console.
console.log(roman_to_Int('XXVI'));
// Output the integer value of the Roman numeral 'CI' to the console.
console.log(roman_to_Int('CI'));
console.log(roman_to_Int('IM'));
console.log(roman_to_Int('AB'));