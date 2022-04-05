import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

export const toBeActive = (st: StudentType) => {
    st.isActive = true;
}

export const doesStudentLiveIn = (st:StudentType, city: string) => {
    return st.address.city === city;
}

export const addMoneyToBudget = (governmentBuilding: GovernmentBuildingsType, num: number) => {
    governmentBuilding.budget +=num;
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true;
}

export const toFireStaff = (governmentBuilding: GovernmentBuildingsType, number: number) => {
    governmentBuilding.staffCount -= number;
}

export const toHireStaff = (governmentBuilding: GovernmentBuildingsType, number: number) => {
    governmentBuilding.staffCount += number;
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title}! I want you be happy. All ${city.citizensNumber} men.`
}