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
    }

    update(property) {
        return e => this.setState( {[property]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
    }


    render() {


        return (

            <form className='todo-form' onSubmit={this.handleSubmit}>
                <label> Todo Title
                    <input
                        className='input'
                        ref='title'
                        value={this.state.title}
                        placeholder='enter todo title here'
                        onChange={this.update('title')}
                        required
                    />
                </label>
                <label> Description
                    <textarea
                        className='input'
                        ref='body'
                        value={this.state.body}
                        placeholder='enter todo description here'
                        onChange={this.update('body')}
                        required></textarea>
                </label>
                <button className='create-todo-button'>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;

