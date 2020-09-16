import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
   //1 Obtener ref al context (userContext)
   const {setUser} = useContext(UserContext)
   //2 extraer el setUser

   /** crear esta informacion con una funcion
    * {
    *    id: 23,
    *    name:'Mario'
    * }
    */
   
   return (
      <div>
         <h1>LogonScreen</h1>
         <hr/>
         <button 
            className="btn btn-primary"
            onClick={() => setUser({
               id: 23,
               name: 'mario'
            })}
            >
            Login
         </button>
      </div>
   )
}
