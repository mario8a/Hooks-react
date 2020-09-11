import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css'
import {useCounter} from '../../hooks/useCounter'
import { procesoEstado } from '../helpers/procesoPesado';

export const MemoHook = () => {

    const {counter, increment} = useCounter(3000);
    const [show, setShow] = useState(true);
    
    

    const memoProcesoPesado = useMemo(() => procesoEstado(counter), [counter])
    
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small> {counter}</small> </h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>

            <button
                className="btn btn-danger ml-3"
                onClick={() => {
                     setShow(!show);
                }}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
