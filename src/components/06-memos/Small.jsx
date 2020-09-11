import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('Me volvi a llmar :(');
    //Cada vez que se llama se vuelve a renderizar este componente
    /**Si hubiera una peticion aqui, se llamaria cada vez */

    //Lo que va hacer memo es que se va renderzizar solo si las props cambian
    return (
        <div>
            <small>{value}</small>
        </div>
    )
})
