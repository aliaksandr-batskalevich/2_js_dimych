import React from "react";

type objType = {
    id: string
    name: string
}
export type objArrType = {
    [key: string]: objType
}

export const Lesson08 = () => {

    return (
        <div>
            <hr/>
            <h1>Lesson 08</h1>
            <p>Open console!</p>
        </div>
    )
}