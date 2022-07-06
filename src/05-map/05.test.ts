import {CityType} from "../02-objects/02-cityType";
import {madeGreetings} from "./05";

let city: CityType

beforeEach( () => {
    city = {
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
})

test.skip('Greetings should be correct', () => {
    let answerArr: Array<string> = madeGreetings(city);

    expect(answerArr.length).toBe(2);
    expect(answerArr[0]).toBe('Hi people from White street!!!');
})