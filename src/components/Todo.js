import { Form } from 'react-bootstrap'; 

export default function Todo({ todo }) {
    return (
        <Form.Label className="mb-0">
            <Form.Check type="checkbox" label={ todo.name } />
        </Form.Label>
    )
}