import {sum, multiply, splitIntoWords} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach( () => {
    a = 1;
    b = 2;
    c = 3;
})

test.skip('sum should be correct', () => {

    //active
    const result1 = sum(a, b);
    const result2 = sum(a, c);

    //expect
    expect(result1).toBe(3);
    expect(result2).toBe(4);
});

test.skip('mult should be correct', () => {

    const result1 = multiply(a, b);
    const result2 = multiply(a, c);

    expect(result1).toBe(2);
    expect(result2).toBe(3);
});

test.skip('splite should be correct', () => {
    let sentence1 = 'Hello WORLD!';
    let sentence2 = 'JS - best. computers language!'

    let result1: Array<string> = splitIntoWords(sentence1);
    let result2: Array<string> = splitIntoWords(sentence2);

    expect(result1.length).toBe(2);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('world');

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('best');
    expect(result2[2]).toBe('computers');
    expect(result2[3]).toBe('language');
})