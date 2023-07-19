import { ListGroup } from 'react-bootstrap';
import Todo from '../components/Todo'

export default function TodoList({ todos }) {
    return (
        <ListGroup className="mt-4">
            {
                todos.map(todo => 
                    <ListGroup.Item><Todo todo={ todo } /></ListGroup.Item>
                )
            }
        </ListGroup>
    )
}