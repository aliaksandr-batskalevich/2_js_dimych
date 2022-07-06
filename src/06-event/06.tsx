import React, {useState} from "react";

export function User() {
    let [name, setName] = useState<string>('Alex')
    const eventHandler = (title: string) => {
        setName(title)
    }
    return (
        <div className={'userWrapper'}>
            <p>{name}</p>
            <button onClick={() => eventHandler('none')}>del</button>
            <button onClick={() => eventHandler('Alex')}>add</button>
        </div>
    )
}