import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWidthCustomHook = () => {

    const {state,increment,decrement,reset} = useCounter(100);

    return (
        <>
         <h1>Counter with Hook: {state}</h1>
         <hr/>

        {/* sin argunmentos */}
         {/* <button onClick={increment} className="btn"> +1</button>
         <button onClick={decrement} className="btn"> -1</button> */}

         {/* Con argumentos */}
         <button onClick={ () => increment(2)} className="btn"> +1</button>
         <button onClick={ () => decrement(2)} className="btn"> -1</button>
         <button onClick={ reset} className="btn"> Reset</button>
        </>
    )
}