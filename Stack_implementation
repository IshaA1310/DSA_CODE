class Stack {
    constructor() {
        this.items = new Array(4);
        this.topIndex = -1;
    }
    push(value) {
        if (this.topIndex === this.items.length - 1) {
            console.log('Stack Overflow');
            return;
        }
        this.topIndex++;
        this.items[this.topIndex] = value;
    }
    pop() {
        if (this.topIndex === -1) {
            console.log('stack underflow');
            return;
        }
        let value = this.items[this.topIndex];
        this.items[this.topIndex] = undefined;
        this.topIndex--;
        console.log(value, 'value of pop element');
    }
    peek() {
        if (this.topIndex === -1) {
            console.log('stack is empty');
            return;
        }
        console.log(this.items[this.topIndex], 'It is the first element of stack');
    }
    displayStack() {
        if (this.topIndex === -1) {
            console.log('stack is empty');
            return;
        }
        for (let i = this.topIndex; i >= 0; i--) {
            console.log(this.items[i], ' ');
        }
    }
    IsEmpty() {
        return console.log(this.topIndex === -1);
    }
    IsFull() {
        return console.log(this.topIndex === this.items.length - 1);
    }
    size() {
        return console.log(this.topIndex + 1);
    }
    clearStack() {
        if (this.topIndex === -1) {
            console.log('stack is empty');
            return;
        }
        for (let i = this.topIndex; i >= 0; i--) {
            this.items[i] = undefined;
            this.topIndex--;
        }
    }
}
let stack = new Stack();
while (true) {
    console.log('press 0 for exit');
    console.log('press 1 for push data into stack');
    console.log('press 2 for pop elemnt into stack');
    console.log('press 3 for peek element into stack');
    console.log('press 4 for display elemnts of stack');
    console.log('press 5 for check IsEmpty stack');
    console.log('press 6 for check IsFull of stack');
    console.log('press 7 for size of stack');
    console.log('press 8 for clear elemnts of stack');
    let num = parseInt(prompt('Enter your choice: '));
    if (num === 0) {
        break;
    } else if (num === 1) {
        let data = parseInt(prompt('Enter value for stack: '));
        stack.push(data);
    } else if (num === 2) {
        stack.pop();
    } else if (num === 3) {
        stack.peek();
    } else if (num === 4) {
        stack.displayStack();
    } else if (num === 5) {
        stack.IsEmpty();
    } else if (num === 6) {
        stack.IsFull();
    } else if (num === 7) {
        stack.size();
    } else if (num === 8) {
        stack.clearStack();
    } else {
        console.log('Invalid Choice!')
    }
}
