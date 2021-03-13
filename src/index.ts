import { askQuestion, initConsole } from "./Utils/utils";

const main = async () => {
    const myConsole = initConsole();
    const ans1 = await askQuestion(myConsole, 'Your name?');
    console.log('ans1 = ', ans1);
    myConsole.close();
};

main().catch(err => console.error(err));