import {objArrType} from "./08";

let objArr: objArrType;

beforeEach(() => {
    objArr = {
        123: {id: '123', name: 'Alex'},
        1234: {id: '1234', name: 'Alex'},
        12345: {id: '12345', name: 'Alex'},
    }
});

test('name should be correct', () => {
    objArr['1234'].name = 'Aliaksandr';
    objArr[144] = {id: '144', name: 'Olga'}

    expect(objArr['1234']).toEqual({id: '1234', name: 'Aliaksandr'});
    expect(objArr['144'].name).toBe('Olga');
});
