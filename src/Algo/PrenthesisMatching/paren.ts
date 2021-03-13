export const isMatched = (str: string) => {
    const paren: any = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    const stack: string[] = [];
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        const el = strArr[ i ];
        if (paren[ el ]) {
            stack.push(el);
        } else {
            const top = stack.length - 1;
            console.log(el);
            if (el === paren[ stack[ top ] ]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isMatched('(([]))[]'));