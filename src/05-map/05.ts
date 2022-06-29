import {CityType} from "../02-objects/02-cityType";

export const madeGreetings = (city: CityType) => {

    let streetArr:Array<string> = city.houses.map(el => el.address.street.title).sort((a, b) => a < b ? 1 : a > b ? -1 : 0)

    let streetOnesArr: Array<string> = []

    for (let i = 0; i < streetArr.length; i++) {
        if (i === streetArr.length - 1 || streetArr[i].toLowerCase() !== streetArr[i + 1].toLowerCase()) {
            streetOnesArr.push(streetArr[i])
        }
    }
    return streetOnesArr.map( el => `Hi people from ${el}!!!`)
}