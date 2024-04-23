function calculate(s) {
    if(s==""){
        return false
    }
    if(ischar(s)==false){
        return false
    }
    if(typeof s!="string"){
        return false
        
    }
    if(s.size>=300000 ||s.size<1 || s.size==undefined){
        return false
    }
    s = "(" + s + ")"
    let stack = [];
    let temp = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue;
        if (s[i] === ")") {
            while (stack[stack.length - 1] !== "(") temp.push(stack.pop());
            stack.pop();
            stack.push(count(temp));
            continue;
        }
        if (isNum(stack[stack.length - 1]) && isNum(s[i])) {
            stack[stack.length - 1] += s[i];
            continue;
        }
        if (s[i] === "-" || s[i] === "+") {
            if (stack.length === 0 || stack[stack.length - 1] === "(") stack.push("0");
        }
        stack.push(s[i]);
    }
    return parseInt(stack[0])
    
};

function count(temp) {
    temp = temp.reverse();
    while (temp.length !== 1) {
        if (temp[1] === "+"){
             temp[0] = (+temp[0]) + (+temp[2]);
        }else if (temp[1] === "-"){
            temp[0] = (+temp[0]) - (+temp[2]);
        }else{return null}
        temp.splice(1, 2);
    }
    return temp.pop();
}

function isNum(str) {
    return /[0-9]+/.test(str);
}
function ischar(str) {
    return /^[0-9()+-\s]+$/.test(str);
}

console.log(calculate(["1 + 2"]))

module.exports = { calculate, count };