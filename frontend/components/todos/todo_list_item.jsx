import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    toggleTodo(e) {
        e.preventDefault();
        
        const toggledTodo = Object.assign(
            {},
            this.props.todo,
            { doitness: !this.props.todo.doitness }
        );
        alert('Really? Are you sure?? I mean, up to you.');
        this.props.receiveTodo(toggledTodo);
    }

    render() {
        const {todo, removeTodo} = this.props;
        const {title, doitness, id} = todo;
        
        return (
            <li className='todo-list-item'>
                <div className="todo-title">
                    {title}
                </div>
                <div className="do-it-status">{doitness ? "Do" : "Not To Do"}</div>
                <button
                    className={doitness ? "todo" : "not-to-do"}
                    onClick= {this.toggleTodo} >
                    Change Mind
                </button>
                {/* <button
                    className="delete-button"
                    onClick={removeTodo}>
                    Delete
                </button> */}
            </li>
        )
    }


}

export default TodoListItem;