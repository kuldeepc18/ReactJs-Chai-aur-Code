import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [count, setCount] = useState(1);

    return(
        <CounterContext.Provider value={{count, name: 'Kuldeep', setCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}
