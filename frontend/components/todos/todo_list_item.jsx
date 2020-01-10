import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggleTodo(e) {
        e.preventDefault();
        
        const toggledTodo = Object.assign(
            {},
            this.props.todo,
            { doitness: !this.props.todo.doitness }
        );
        this.props.receiveTodo(toggledTodo);
    }

    handleDelete() {
        const { todo } = this.props;
        const todoId = todo.id;
        this.props.removeTodo(todoId)
    }

    render() {
        const {todo} = this.props;
        const {title, doitness, id} = todo;
        const doitstatus = doitness? "status-do" : "status-not-do";
        return (
            <li className='todo-list-item'>
                <div className="todo-title">
                    {title}
                </div>
                <div className={doitstatus}>{doitness ? "Do" : "Not To Do"}</div>
                <div className="action-buttons">
                    <button
                        className={doitness ? "todo" : "not-to-do"}
                        onClick= {this.toggleTodo} >
                        Change Mind
                    </button>
                    <button
                        className="delete-button"
                        onClick={this.handleDelete}>
                        Delete
                    </button>
                </div>

            </li>
        )
    }


}

export default TodoListItem;