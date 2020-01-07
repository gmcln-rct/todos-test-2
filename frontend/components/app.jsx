import React from 'react';
import TodoListContainer from './../components/todos/todo_list_container';

const App = () => (
    <div className="app">
        <h1>Todo Or Not Todo List</h1>
        <p>Because indecisiveness isn't just for Danish princes anymore.</p>
        < TodoListContainer />
    </div>
);

export default App;
