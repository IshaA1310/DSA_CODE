// check parenthessis valid or not 
var isValid = function (str) {
    let arr = [...str];
    let stack = new Stack();
    for (let i = 0; i < arr.length; i++) {
        if (isOpen(arr[i])) {
            stack.push(arr[i]);
        } else {
            if (stack.isEmpty()) return false;
            const s1 = stack.pop();
            const value = validParentheses(s1, arr[i]);
            if (value === false) return false;
        }
    }
    return stack.isEmpty();
}

function isOpen(value) {
    return (value === '{' || value === '[' || value === '(');
}

function validParentheses(s1, s2) {
    return ((s1 === '{' && s2 === '}') || (s1 === '[' && s2 === ']') || (s1 === '(' && s2 === ')'));
}
