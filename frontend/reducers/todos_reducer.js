import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {
    1: {
        id: 1,
        title: "lick lead paint daily",
        body: "bring lots of soap",
        done: false,
        doitness: false
    },
    2: {
        id: 2,
        title: "Wash hands regularly",
        body: "with shampoo",
        done: true,
        doitness: true
    },
    3: {
        id: 3,
        title: "Eat kale",
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
        case REMOVE_TODO:
            nextState = Object.assign({}, state);
            delete nextState[action.todo.id];
            return nextState;
        default: 
            return state;
    }
};

export default todosReducer;