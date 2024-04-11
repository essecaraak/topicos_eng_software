//https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x) {
    // Convert integer to string
    const str = x.toString();
    // Use the helper function to check if the string is a palindrome
    return checkPalindrome(str);
}

// Helper function to check if a string is a palindrome
function checkPalindrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false