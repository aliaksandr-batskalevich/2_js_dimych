import {manType} from "./07";

let man: manType

beforeEach(() => {
    man = {
        name: 'Alex',
        age: 33,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'White street'
            }
        }
    }
})


test('man should be correct', () => {

    let manAge: number = man.age
    let {name, age} = man
    let {street} = man.address

    expect(manAge).toBe(33);
    expect(name).toBe('Alex')
    expect(age).toBe(33)
    expect(street.title).toBe('White street')
})