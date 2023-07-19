import { Form } from 'react-bootstrap'; 

export default function Todo({ todo, toggleTodo }) {
    
    function toggle() {
        toggleTodo(todo.id)
    }

    return (
        <Form.Label className="mb-0">
            <Form.Check type="checkbox" id={'input-todo-' + todo.id} label={ todo.name } checked={ todo.completed } onChange={ toggle } />
        </Form.Label>
    )
}