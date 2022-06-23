import {GovernmentBuildingType, HousesType} from "../02-objects/02-cityType";

export const addMoneyToBudget = (building: GovernmentBuildingType, money: number) => {
    building.budget += money;
}

export  const repairHouse = (house: HousesType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, people: number) => {
    building.staffCount -= people;
}

export  const toHireStaff = (building: GovernmentBuildingType, people: number) => {
    building.staffCount += people;
}