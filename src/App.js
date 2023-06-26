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
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const defaultTodos = [
  {id: 1, text: 'cortar cebolla', completed: false}, 
  {id: 2, text: 'Llorar con la llorona', completed: false}, 
  {id: 3, text: 'Llorar con la llorona', completed: false}, 
  {id: 4, text: 'Tomar curso 1', completed: true}, 
  {id: 5, text: 'Usar Estados Derivados', completed: true}, 
]

function App() {
  //const parsedTodos = localStorage.getItem()
  const [todoList, setTodoList] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [showTodoModal, setShowTodoModal] = React.useState(false);
  const completedTodos = todoList.filter((todo) => todo.completed).length;
  const totalTodos = todoList.length;
  const searchedTodos = todoList.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  const [newTodoText, setNewTodoText] = React.useState('');
  const toggleTodoModal = () => {
    setShowTodoModal(!showTodoModal);
    setNewTodoText('');
  }
  const addTodo = () => {
    const todos = todoList;
    todos.push({
      id: todos.length,
      text: newTodoText,
      completed: false
    })
    setTodoList(todos);
    setNewTodoText('newTodoText', newTodoText);
    setShowTodoModal(false);
  }
const markAsCompleted = (id) => {
  const newTodos = [...todoList];
  newTodos.forEach((todo) => {
    if(todo.id === id) {
      todo.completed=true;
    }
  })
  setTodoList(newTodos);
}

const removeTodo = (id) => {
  let newTodos = todoList.slice(0, id - 1).concat(todoList.slice(id));
  if(todoList.length <= 1) {
    newTodos = [];
  }
  setTodoList(newTodos);
}
  
  return (
    <>
    <Container as='main'>
      <Row className='justify-content-center'>
          <Col className='todo' xs={8}>
            <TodoCount
              completed={completedTodos}
              total={totalTodos}
            />
            <TodoFilter 
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
            />
            <TodoList 
              searchValue={searchValue}
            >
              {searchedTodos.map((todo) => (
                <TodoItem 
                  key={`todo-${todo.id}`}
                  id={todo.id}
                  text={todo.text} 
                  completed={todo.completed}
                  markAsCompleted={markAsCompleted}
                  removeTodo={removeTodo}
                />
              ))}
            </TodoList>
            <AddTodo setShowTodoModal={toggleTodoModal}/>
          </Col>
      </Row>
    </Container>
    <Modal show={showTodoModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add To Do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Description: </span>
          <input 
            type='text' 
            placeholder="Filter your todos"
            value={newTodoText} 
            onChange={($event) => setNewTodoText($event.target.value)}>
          </input>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleTodoModal} variant="secondary">
            Close
          </Button>
          <Button onClick={addTodo} variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
