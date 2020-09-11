import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputref = useRef();

    const handleClick = () => {
        inputref.current.select();
    }

    return (
        <div>
            <h1>Focsu</h1>
            <hr/>

            <input type="text"
                ref={inputref}
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
                >
                Foccus
            </button>
        </div>
    )
}
