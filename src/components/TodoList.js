import { ListGroup } from 'react-bootstrap';
import Todo from '../components/Todo'

export default function TodoList({ todos, toggleTodo }) {

    function variant(todo) {
        return (todo.completed ? 'success' : 'light')
    }

    return (
        todos.length > 0 && <ListGroup className="mt-4">
            {
                todos.map(todo => 
                    <ListGroup.Item key={ todo.id } variant={ variant(todo) }><Todo todo={ todo } toggleTodo={ toggleTodo } /></ListGroup.Item>
                )
            }
        </ListGroup>
    )
}