import readline from 'readline';

export const initConsole = () => {
    const myConsole = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    myConsole.on('close', () => {
        process.exit(0);
    });

    return myConsole;
};

export const askQuestion = (myConsole: readline.Interface, qn: string): Promise<string> => new Promise((resolve) => {
    myConsole.question(qn, res => resolve(res));
});