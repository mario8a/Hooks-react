//Establecer estado inicial
const initialState = [{
    id: '1',
    todo: 'Comprar Cereal',
    done: false
}];

//creando el reducer
const todoReducer = (state = initialState, action) => {
    //Las actions van a modificar el estado
    //Evaluando type de agregarTodoAction
    if(action?.type === 'agregar') {
        //Agregando el payload al estado
        //Primero crear una copia del estado con el spread operator y mandar el payload
        return [...state, action.payload];
    }
    //debe regresar un estado
    return state
}
//
let todos = todoReducer();

//Añador nuevos elementos al todo
const newTodo = {
    id: '2',
    todo: 'Comprar leche',
    done: false
}

//Creando la action para modificar el state del todo y añadir el nuevo
//El valor del type sera el que se evalue el el reducer
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos)