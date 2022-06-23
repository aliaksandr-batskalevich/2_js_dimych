type StreetType = {
    title: string
}
type AddressType = {
    number: number
    street: StreetType
}
export type HousesType = {
    buildAt: number
    repaired: boolean
    address: AddressType
}
export type GovernmentBuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION',
    budget: number,
    staffCount: number,
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}


export const city: CityType = {
    title: "New York",
    houses: [
        {
            buildAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },
        {
            buildAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        },
        {
            buildAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: 'Happy street'
                }
            }
        },
    ],
    governmentBuildings: [
        {
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            address: {
                number: 1,
                street: {
                    title: 'Central Str'
                }
            }
        },
        {
            type: 'FIRE-STATION',
            budget: 500000,
            staffCount: 1000,
            address: {
                number: 2,
                street: {
                    title: 'South Str'
                }
            }
        }
    ],
    citizensNumber: 1000000
}