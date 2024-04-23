function calculate(s) {
    
    if(s=="" ||s==null){
        return false
    }
    if(!ischar(s)){
        return false
    }
   
    if(s.length>=300000 ||s.length<1 || s.length==undefined ){
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
    if(parseInt(stack[0])<2147483648){
        return parseInt(stack[0])
    }else return false
    
    
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
    text=["1","2","3","4","5","6","7","8","9","0","(",")"," ","+","-"]

    for (let i = 0; i < str.length; i++) {
        if (!text.includes(str[i])) {
            
            return false;
        } 
    }
    return true;

    
}



module.exports = { calculate, count };