import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

//Declarando el init, lo que retornte esta funcion va hacer el initiaState
const init = () => {

    //Pasando el string a un objeto con .parse
    //Si el objeto es null, regresa un arreglo vacio
    return JSON.parse(localStorage.getItem('todos')) || []

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender react',
    //     done: false
    // }]
}

export const TodoApp = () => {

    // const [state, dispatch] = useReducer(reducer, initialState)
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    //Effecto encargado de guardar los cambios en todos
    useEffect(() => {
        //Guardar en LS, convirtiendo en string el objeto
        localStorage.setItem('todos', JSON.stringify(todos))
        //Si los todos cambian, guardar el localstorage
    }, [todos]);

    const handleDelete = (todoId) => {
        // console.log(todoId);
        //llamar la funcion o case delete del reducer
        //Aegurar que venga el id
        //crear la action
        const action = {
            type: 'delete',
            payload: todoId
        }
        //dispatch
        dispatch(action)
    }

    //Funcion para marcar tarea como completada
    const handleToggle = (todoId) => {
        
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        //Mandando la action mediante el dispatch
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }


    return (
        <div>
            <h1>Todo App: ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    {/* TodoList, todos, handleDelete,handleT */}
                    <TodoList
                        {...{
                            todos,
                            handleDelete,
                            handleToggle
                        }}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
