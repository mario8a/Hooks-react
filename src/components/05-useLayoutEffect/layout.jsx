import React, { useLayoutEffect, useRef } from 'react'
import './layout.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'


export const Layout = () => {

    const {counter, increment} =  useCounter(1)

    const {data} =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(state);
    //Evaluar cuando no hay data en la peticion
    //!! doble negacion para regersar false y no ejecute
    const {quote} = !!data && data[0];
     
    const pTag = useRef();
    // console.log(author, quote); 

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    },[quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>
                
            <blockquote className="blockquote text-right">
                <p 
                    ref={pTag}
                    className="m-b0">{quote}</p>
            </blockquote>

            <button onClick={increment} className="btn btn-primary">
                Siguiente frase
            </button>

        </div>
    )
}