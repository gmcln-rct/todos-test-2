import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todo, removeTodo} = this.props;
        
        return (
            <li className='todo-list-item'>
                {todo.title}
                <button
                    className="delete-button"
                    onClick={removeTodo}>
                    Delete
                </button>
            </li>
        )
    }


}

export default TodoListItem;