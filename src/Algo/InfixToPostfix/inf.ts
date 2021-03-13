const isOperand = (char: string) => char.match(/[+|\-|/|*]/gi);

const infixToPostfix = (str: string): string => {
    const strArr = str.split('');
    console.log(strArr);
    const stack: string = [];
    let res: string[] = [];
    for (let i = 0; i < strArr.length; i++) {
        const el = str[ i ];
        if (isOperand(el)) {
            res.push(el);
        } else {

        }
    }
    return res.join('');
};

console.log(infixToPostfix('a+b*c-d/e'));