//https://leetcode.com/problems/basic-calculator/?envType=study-plan-v2&envId=top-interview-150
const convertToInt = (char) => {
    switch (char) {
        case '0': return 0;
        case '1': return 1;
        case '2': return 2;
        case '3': return 3;
        case '4': return 4;
        case '5': return 5;
        case '6': return 6;
        case '7': return 7;
        case '8': return 8;
        case '9': return 9;
        default: return NaN;
    }
};
var calculate = function (s) {
    let ans = 0;
    let num = 0;
    let sign = 1;
    let stack = [sign];

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!isNaN(convertToInt(c))) {
            num = num * 10 + (convertToInt(c));
        } else if (c === '(') {
            stack.push(sign);
        } else if (c === ')') {
            stack.pop();
        } else if (c === '+' || c === '-') {
            ans += sign * num;
            sign = (c === '+' ? 1 : -1) * stack[stack.length - 1];
            num = 0;
        }
    }

    return ans + sign * num;
}

console.log(calculate('+1'))
console.log(calculate('2+1'))
console.log(calculate('+1+3'))
console.log(calculate('-(3+4)'))
console.log(calculate('9007199254740991+10000000000000000000000'))
console.log()



