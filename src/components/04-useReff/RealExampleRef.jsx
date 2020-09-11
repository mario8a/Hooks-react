import React, { useState, useRef, useEffect } from 'react'
import '../02-useEffect/effects.css';
import {MultipleCustomHooks} from '../03-Examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    //Estado para ocultar y mostrar el componente multiple
    const [show, setShow] = useState(false);
    
    return (
        <div>
            <h1>Real example</h1>
            <hr/>

            {show && <MultipleCustomHooks/>}

            <button className="btn btn-danger mt-5" onClick={() => {
                setShow(!show)
            }}>
                Show/hde
            </button>

        </div>
    )
}
