//https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x) {
    // Convert integer to 
    const str = x.toString();

    if( str == "" || 
        str == null || 
        str.length < 2 || 
        str == 0 ||
        Array.isArray(str) || 
        isNaN(str)){  
        return false
    }
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

module.exports = { isPalindrome, checkPalindrome };
