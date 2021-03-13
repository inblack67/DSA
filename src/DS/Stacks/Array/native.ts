class MyNativeStack {
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
        return popped as number;
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

const mns1 = new MyNativeStack(5);
mns1.push(1);
mns1.push(2);
mns1.push(3);
mns1.push(4);
mns1.push(5);
mns1.pop();
mns1.display();
console.log(mns1.isFull());
console.log(mns1.getSize());