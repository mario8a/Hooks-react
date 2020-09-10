import { useState } from "react"

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState); //10

    const increment = () => {
        // setState(state + 1)
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initialState)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
