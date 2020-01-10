import React from 'react';
import {setId} from '../../util/setId';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            done: false,
            doitness: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    update(property) {
        return e => this.setState( {[property]: e.target.value })
    }

    handleChange(e) {
        this.setState({doitness: event.target.doitness});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state, { id: setId()});
        this.props.receiveTodo(todo);
        this.setState({
            title: '',
            body: '',
            doitness: false
        });
    }


    render() {


        return (

            <form className='todo-form' onSubmit={this.handleSubmit}>
                <label> Todo Title <br/>
                    <input
                        className='input'
                        ref='title'
                        value={this.state.title}
                        placeholder='enter todo title here'
                        onChange={this.update('title')}
                        required
                    />
                </label>
                <label> Description <br/>
                    <textarea
                        className='input'
                        ref='body'
                        value={this.state.body}
                        placeholder='enter todo description here'
                        onChange={this.update('body')}
                        required></textarea>
                </label>

                <label>Do? <br />
                    <select value={this.state.doitness} onChange={this.handleChange}>
                        <option value="true">To Do</option>
                        <option value="false">Not To Do</option>
                    </select>

                </label>

                <button className='create-todo-button'>Add Todo</button>
            </form>
        );
    }
};

export default TodoForm;

