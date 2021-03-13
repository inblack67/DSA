class MyStack {
    stack: number[];
    top: number;
    size: number;
    constructor (size: number) {
        this.stack = new Array(size);
        this.top = -1;
        this.size = size;
    }
    push (el: number): number {
        if (this.isFull()) {
            throw new Error('Stack Overflow');
        }
        this.stack[ this.top + 1 ] = el;
        return ++this.top;
    }
    pop (): number {
        if (this.isEmpty()) {
            throw new Error('Stack Underflow');
        }
        const popped = this.stack[ this.top ];
        delete this.stack[ this.top ];
        this.top--;
        return popped;
    }
    display (): void {
        for (let i = 0; i < this.stack.length; i++) {
            const el = this.stack[ i ];
            if (el) {
                console.log(el);
            }
        }
    }
    getSize (): number {
        return this.top + 1;
    }
    isFull (): boolean {
        return this.top === this.size - 1;
    }
    isEmpty (): boolean {
        return this.top === -1;
    }
}

const s1 = new MyStack(5);
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.push(5);
s1.pop();
s1.pop();
s1.display();
console.log(s1.isFull());
console.log(s1.isEmpty());
console.log(s1.getSize());