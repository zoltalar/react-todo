import 'bootstrap/dist/css/bootstrap.min.css'

import { useEffect, useState, useRef } from 'react'
import { Col, Container, Row, Button, Form, InputGroup } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const newTodo = useRef()

  function addNewTodo(e) {
      const name = newTodo.current.value
      if (name) {
          setTodos(oldTodos => {
              return [...oldTodos, { id: uuidv4(), name, completed: false }]
          })
          newTodo.current.value = ''
      }
  }

  function clearCompletedTodos(e) {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  function randomTodos() {
    const names = [
      'Fill up the car',
      'Walk the dog',
      'Buy groceries',
      'Learn React',
      'Learn Nuxt 3',
      'Learn Symfony',
      'Write better code'
    ]
    const todos = names
      .map(name => ({ id: uuidv4(), name, completed: false, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .slice(0, 5)
    setTodos(todos)
  }

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mt-5">
              <input type="text" className="form-control" placeholder="Add new todo" ref={ newTodo } />
              <Button variant="primary" onClick={ addNewTodo }>
                  Add
              </Button>
              <Button variant="secondary" onClick={ clearCompletedTodos }>
                  Clear Completed
              </Button>
              <Button variant="secondary" onClick={ randomTodos }>
                  Random Todos
              </Button>
          </InputGroup>
          <Form.Text muted>
              You have { todos.filter(todo => !todo.completed).length } todos left.
          </Form.Text>        
          <TodoList todos={ todos } toggleTodo={ toggleTodo } />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
