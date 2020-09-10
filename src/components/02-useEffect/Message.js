import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setcoors] = useState({x:0, y:0})
    const {x,y} = coors;

    useEffect(() => {


        const mauseMove = (e) => {
            const coors =  {x: e.x, y: e.y};
            // console.log(coors);
            console.log(':D');
            setcoors(coors)
        }

        window.addEventListener('mousemove', mauseMove)
        
        console.log('Componente montado');

        return () => {
            window.removeEventListener('mousemove', mauseMove)
        }
    }, [])

    return (
        <div>
            <h3>Eres Genial :)</h3>
            <p>
               x: {x} , y: {y}
            </p>
        </div>
    )
}
