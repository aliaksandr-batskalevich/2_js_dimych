type AddressType = {
    country: string
    city: string
    street: string
}
type TechnologiesArrayType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    lastName: string
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesArrayType>
}

export const student: StudentType = {
    id: 1,
    name: 'Aliaksandr',
    lastName: 'Batskalevich',
    isActive: true,
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
    ]
}

console.log(student.address.city);
console.log(student.technologies[1].title);