import TodoList from './todo_list';
import {connect} from 'react-redux';

//Actions and Selectors
import {allTodos} from '../../reducers/selectors';
import {receiveTodo, removeTodo} from '../../actions/todo_actions';

const msp = state => ({
    todos: allTodos(state),
    state

});

const mdp = (dispatch, {todo} ) => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: () => dispatch(removeTodo(todo))
});

export default connect(msp, mdp)(TodoList);