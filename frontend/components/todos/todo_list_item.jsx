import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todo} = this.props;
        return (
            <li className='todo-list-item'>
                {todo.title}
                </li>
        )
    }


}

export default TodoListItem;