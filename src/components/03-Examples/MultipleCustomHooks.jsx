import React from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'


export const MultipleCustomHooks = () => {

    const {counter, increment} =  useCounter(1)

    const {loading, data} =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(state);
    //Evaluar cuando no hay data en la peticion
    //!! doble negacion para regersar false y no ejecute
    const {author, quote} = !!data && data[0];
    console.log(author, quote); 

    return (
        <div>
            <h1>BreakingBad API</h1>
            <hr/>

            {
                loading ? (

                <div className="alert alert-info text-center">
                                Loading..
                </div>
                ) : (
                    <blockquote className="blockquote text-right">
                        <p className="m-b0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }

            <button onClick={increment} className="btn btn-primary">
                Siguiente frase
            </button>

        </div>
    )
}