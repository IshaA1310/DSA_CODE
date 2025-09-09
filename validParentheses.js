// check parenthessis valid or not 

function validParentheses(str) {
  let arr = [..str];
  let stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    if(isOpen(arr[i])) {
      stack.push(arr[i]);
    } else {
      if (stack.isEmpty()) return false;
      const value = isValid(stack.pop(), arr[i]);
      if(value === false) return false;
    }
  }
  return true;
}

function isOpen(value) {
  return (value === '{' || value === '[' || value === '(');
}

function isValid(s1, s2) {
  return ((s1 === '{' && s2 === '}') || (s1 === '[' && s2 === ']') || (s1 === '(' && s2 === ')'));
}
