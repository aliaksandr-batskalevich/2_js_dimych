import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, toBeActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Aliaksandr',
        lastName: 'Batskalevich',
        isActive: false,
        address: {
            country: 'Belarus',
            city: 'Brest',
            street: 'Rokossovskogo'
        },
        technologies: [
            {id: 11, title: 'html'},
            {id: 12, title: 'CSS'},
            {id: 13, title: 'JS'},
            {id: 14, title: 'REACT'}
        ]}
})

test('technologies should be correct', () => {
    addSkill(student, 'TS');
    expect(student.technologies[student.technologies.length - 1].title).toBe('TS');
});

test('student should be active', () => {
    toBeActive(student);
    expect(student.isActive).toBe(true);
})

test('does student live in city?', () => {
    expect(doesStudentLiveIn(student, 'Moscow')).toBe(false)
})