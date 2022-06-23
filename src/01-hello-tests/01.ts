export const sum = (a: number, b: number) => {
    return a + b;
}

export const multiply = (a: number, b: number) => {
    return a * b;
}

export const splitIntoWords = (sentence: string) => {
    const words: Array<string> = sentence.toLowerCase().split(' ');

    return words.filter( w => w !== '' && w !== '.' && w !== '!' && w !== '?' && w !== '-')
            .map( w => w
                .replace(',', '')
                .replace('.', '')
                .replace('!', '')
                .replace('?', ''));
}