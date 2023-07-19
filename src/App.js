import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Test 1', completed: false },
    { id: 2, name: 'Test 2', completed: true }
  ])
  return (
    <Container>
      <Row>
        <Col>
          <Todos todos={ todos } />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
