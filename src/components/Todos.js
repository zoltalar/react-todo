import { Button, Form, InputGroup } from 'react-bootstrap';
import TodoList from '../components/TodoList';

export default function Todos() {
    return (
        <>
            <InputGroup className="mt-5">
                <Form.Control placeholder="Add new todo" aria-label="Add todo" />
                <Button variant="primary">
                    Add
                </Button>
                <Button variant="secondary">
                    Clear Completed
                </Button>
            </InputGroup>            
            <TodoList />
            <Form.Text className="d-block mt-4" muted>
                You have 0 todos left.
            </Form.Text>
        </>
    )
}