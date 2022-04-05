export const sum = (a: number, b: number) => {
    return a + b;
}

export const splitSentence = (sentence: string) => {
    return sentence
        .toLowerCase()
        .split(" ")
        .filter(word => word !== '-' && word !== '')
        .map(word => word
            .replace('.', '')
            .replace('!', ''));
}