import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    //Este hook va permitir ejecutar algun efecto secundario cuando algo suceda en el comonente

    useEffect( () => {
        // console.log('Hey');
    }, []);

    useEffect( () => {
        // console.log('formstate cambio');
    }, [formState]);

    ///Solo cuando el email cambia

    useEffect( () => {
        // console.log('email cambio');
    }, [email]);

    const handleInputChange = ({target}) => {
        // console.log(target.name);
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}    
                />
            </div>


            <div className="form-group">
                <input 
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}    
                />
            </div>

            {(name === '123') && <Message/>}
        </>
    )
}
