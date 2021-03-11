class MyStack {
    size: number;
    stack: number[];
    constructor () {
        this.stack = [];
        this.size = 0;
    }

    push (el: number) {
        this.stack.push(el);
        this.size++;
    }
    pop () {
        this.stack.pop();
        this.size--;
    }
    display () {
        console.log(this.stack);
    }
    getSize () {
        return this.size;
    }
}

const s1 = new MyStack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.push(5);
s1.pop();
s1.display();
console.log(s1.getSize());