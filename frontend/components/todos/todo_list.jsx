import React from 'react';

// Components
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

// const TodoList = () => <h3>Todo List goes here!</h3>;

class TodoList extends React.Component {
    
    render() {
        const {todos, receiveTodo} = this.props;
        const todoItems = todos.map( todo => (
            < TodoListItem
                key={todo.id}
                todo= {todo}
                receiveTodo= {receiveTodo}
            />

        ));

        return (
            <div>
                <ul className='todo-list'>
                    {todoItems}
                </ul>
                <TodoForm receiveTodo = {receiveTodo} />
            </div>


        )
    }

}

export default TodoList;