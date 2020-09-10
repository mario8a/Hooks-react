import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

   // const [{counter1, counter2}, setCounter] = useState({
   //    counter1: 10,
   //    counter2: 20
   // })

   const [state, setState] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 30
   })

   const {counter1, counter2} = state;

   // console.log(counter);
   
   return (
       <>
         {/* <h1>Couter {counter}</h1> */}
         <h1> Counter 1 {counter1} </h1>
         <h1> Counter 2 {counter2} </h1>
         <hr/>

         <button 
            onClick={() => {
               // setcounter(counter + 1)
               // setCounter({counter1: counter1 +1, counter2})
               setState({
                  ...state,
                  counter1: counter1 +1
               })
            }}
            className="btn btn-primary">
            +1
         </button>  
        </>
   )
}
