import { Button, Form, InputGroup } from 'react-bootstrap';

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
        </>
    )
}