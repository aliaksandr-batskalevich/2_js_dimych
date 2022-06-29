import {CityType} from "../02-objects/02-cityType";

export const destroy = (city: CityType, street: string) => {
    return (
        {...city, houses: city.houses.filter(house => house.address.street.title !== street)}
    )
}