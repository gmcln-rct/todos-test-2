import TodoList from './todo_list';
import {connect} from 'read-redux';

//Actions and Selectors
import {allTodos} from '../../reducers/selectors';
import {receiveTodo} from '../../actions/todo_actions';

const msp = state => ({
    todos: allTodos(state)

});

const mdp = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(msp, mdp)(TodoList);