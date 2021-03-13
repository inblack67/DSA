class MyStack {
    size: number;
    length: number;
    stack: number[];
    constructor (size: number) {
        this.stack = [];
        this.size = size;
        this.length = 0;
    }
    push (el: number): number {
        if (this.length === this.size) {
            throw new Error('Stack Overflow');
        }
        this.stack.push(el);
        return ++this.length;
    }
    pop (): number {
        if (this.length === 0) {
            throw new Error('Stack Underflow');
        }
        const popped = this.stack.pop();
        this.length--;
        return popped;
    }
    display () {
        console.log(this.stack);
    }
    getSize () {
        return this.length;
    }
    isFull () {
        return this.length === this.size;
    }
}

const s1 = new MyStack(5);
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.push(5);
s1.pop();
s1.display();
console.log(s1.isFull());
console.log(s1.getSize());