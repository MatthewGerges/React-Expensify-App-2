//.test.js lets jest to detect this is a test file

const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;
//setting anonymous as default value if no argument is passed in

//global vars provided by jest
//name of test followed by arrow function of test
test('should add two numbers', () => {
    const result  = add(3, 4);

    //the following if statement is an assertion
    //jest has an assertion library
    // if (result !== 7){
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`)
    // }
    expect(result).toBe(7);
})

test('Should greet person with name', () => {
    const result = generateGreeting("Matthew");
    expect(result).toBe("Hello Matthew!");
})

test('Should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!')
})