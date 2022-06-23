
type cityType = {
    title: string
    countryTitle: string
}
type addressType = {
    streetTitle: string
    city: cityType
}
type technologiesType = {
    id: number
    title: string
}
type studentType = {
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: Array<technologiesType>
}

export const student: studentType = {
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Surganova, 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'REACT'
        },
    ]
}