import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';


const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "bring lots of soap",
        done: false,
        doitness: true
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true,
        doitness: true
    }
};

const todosReducer = ( state= initialState, action) => {
    Object.freeze(state);
    let nextState = {};

    switch(action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach( todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        case RECEIVE_TODO:
            const newTodo = { [action.todo.id]: action.todo };
            return Object.assign({}, state, newTodo);
        default: 
            return state;
    }
}

export default todosReducer;