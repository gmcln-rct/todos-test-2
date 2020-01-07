import React from 'react';

// Components
import TodoListItem from './todo_list_item';

// const TodoList = () => <h3>Todo List goes here!</h3>;

class TodoList extends React.Component {
    
    render() {
        const {todos} = this.props;
        const todoItems = todos.map( todo => (
            < TodoListItem
                key={todo.id}
                todo= {todo}


            />

        ));

        return (
            <div>
            <ul>
                {todoItems}
            </ul>

            </div>


        )
    }

}

export default TodoList;