import {CityType} from "../02/02_02";
import {
    addMoneyToBudget,
    createMessage,
    filterCourses,
    repairHouse,
    toFireStaff,
    toHireStaff,
    CourseType,
    filteredHouses,
    filteredFireStation,
    dimychTransformator,
    helloPhrase,
    getStreetCityTitle,
    createGreetingfMessages
} from "./03";

export type PeopleType = {
    name: string
    age: number
}
export type PeoplesType = Array<PeopleType>


let city: CityType;
let courses: Array<CourseType>;
let peoples: PeoplesType;
let phraseArr: Array<string>

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAt: 2012,
            repaired: true,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: 'Central Str'
                }
            }
        }, {
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
                street: {
                    title: 'South Str'
                }
            }
        }],
        citizensNumber: 1000000
    };
    courses = [
        {name: 'JS', price: 100},
        {name: 'TS', price: 150},
        {name: 'React', price: 180}
    ];
    peoples = [
        {name: 'Alex Batskalevich', age: 33},
        {name: 'Marry Batskalevich', age: 31},
        {name: 'Andrey Schitljak', age: 26},
        {name: 'Olga Romanenko', age: 25}
    ];
    phraseArr = [''];
});

test('create greeting messages for streets', () => {
    let messagesArr: Array<string> = createGreetingfMessages(city);

    expect(messagesArr.length).toBe(5);
})

test.skip('Street name should be in array', () => {
    let streetArr: Array<string> = getStreetCityTitle(city);
    expect(streetArr.length).toBe(3);
    expect(streetArr[0]).toBe('1. White street');
})

test.skip('Peoples should be HI', () => {
    phraseArr = helloPhrase(peoples);
    expect(phraseArr.length).toBe(4);
    expect(phraseArr[0].split(' ')[1]).toBe('Batskalevich');
})

test.skip('Peoples should be with skills', () => {
    let peoplesAfterSchool = dimychTransformator(peoples)
    expect(peoplesAfterSchool[0].stack.length).toBe(5);
    expect(peoplesAfterSchool[0].firstName).toBe('Alex');
    expect(peoplesAfterSchool.length).toBe(4);
})

test.skip('Array should be with fire-station', () => {
    let fireStationArray = filteredFireStation(city);
    expect(fireStationArray.length).toBe(1);
})

test.skip('houses should be repaired', () => {
    let repairedHousesCity = filteredHouses(city, false);
    expect(repairedHousesCity.houses.length).toBe(2);
})

test.skip('Price should be Ok', () => {
    let filteredCourses = filterCourses(courses, 150);
    expect(filteredCourses.length).toBe(2);
    expect(filteredCourses[0].name).toBe('JS');
});

test.skip('budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000)
});

test.skip('budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000)
});

test.skip('House should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});

test.skip('staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
});

test.skip('staff should be repaired', () => {
    toHireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(220)
});

test.skip('Greeting message should be correct', () => {
    const message = createMessage(city);
    expect(message).toBe("Hello New York! I want you be happy. All 1000000 men.")
})