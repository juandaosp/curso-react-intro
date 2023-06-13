import './App.scss';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoCount } from './TodoCount/TodoCount';
import { TodoFilter } from './TodoFilter/TodoFilter';
import { TodoList } from './TodoList/TodoList';
import { AddTodo } from './AddTodo/AddTodo'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const defaultTodos = [
  {id: 1, text: 'cortar cebolla', completed: false}, 
  {id: 2, text: 'Llorar con la llorona', completed: false}, 
  {id: 3, text: 'Tomar curso 1', completed: true}, 
  {id: 4, text: 'Tomar curso 2', completed: true}, 
]

function App() {
  return (
    <Container as='main'>
      <Row className='justify-content-center'>
          <Col className='todo' xs={8}>
            <TodoCount
              completed={3}
              total={5}
            />
            <TodoFilter />
            <TodoList>
              {defaultTodos.map((todo) => (
                <TodoItem key={`todo-${todo.id}`} text={todo.text} completed={todo.completed}/>
              ))}
            </TodoList>
            <AddTodo />
          </Col>
      </Row>
    </Container>
  );
}

export default App;
