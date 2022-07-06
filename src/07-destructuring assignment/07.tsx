import React from "react";

type lessonType = { title: string }
type lessonsType = Array<lessonType>
type streetType = {
    title: string
}
type addressType = {
    street: streetType
}
export type manType = {
    name: string
    age: number
    lessons: lessonsType
    address: addressType
}

type PropsType = {
    title: string
    man: manType
}

export const ManComponent: React.FC<PropsType> = (props) => {
    let {title, man: {name}} = props
    return (
        <div>
            <h1>{title}</h1>
            <p>{name}</p>
        </div>
    )
}

let arr = [{title: '1'}, {title: '2'}, {title: '3'}];
let [ls1,,ls3,...restArr] = arr;
let ls2 = restArr[0];