import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";
import {PeoplesType} from "./03-02.test";
import exp from "constants";

export type CourseType = {
    name: string
    price: number
}

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

export const filterCourses = (coursesArr: Array<CourseType>, deadLine: number) => coursesArr.filter(course => course.price <= deadLine);

export const filteredHouses = (city: CityType, isRepaired: boolean = true) => {
    return {...city, houses: city.houses.filter(house => house.repaired === isRepaired)};
}

export const filteredFireStation = (city: CityType) => {
    return city.governmentBuildings.filter(building => building.type === 'FIRE-STATION');
}

export const dimychTransformator = (arrayOfPeoples: PeoplesType) => arrayOfPeoples.map(item => ({stack: ['css', 'html', 'js', 'tdd', 'react'], firstName: item.name.split(' ')[0], lastName: item.name.split(' ')[1]}));

export const helloPhrase = (arrayOfPeople: PeoplesType) => arrayOfPeople.map(man => `Hello, ${man.name.split(' ').reverse().join(' ')}!!!`)

export const getStreetCityTitle = (city: CityType) => city.houses.map((house, index) => `${index + 1}. ${house.address.street.title}`);

export const createGreetingfMessages = (city: CityType) => {
    let streetHouseArr = city.houses.map(house => `Greeting peoples in ${house.address.street.title}`);
    let streetBuildingsArr = city.governmentBuildings.map(building => `Greeting peoples in ${building.address.street.title}`);
    return streetHouseArr.concat(streetBuildingsArr);
}