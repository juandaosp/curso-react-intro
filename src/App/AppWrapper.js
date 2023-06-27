import { TodoItem } from '../TodoItem';
import { TodoCount } from '../TodoCount';
import { TodoFilter } from '../TodoFilter';
import { TodoList } from '../TodoList';
import { AddTodo } from '../AddTodo'
import { TodoLoading } from '../TodoLoading'
import { TodoError } from '../TodoError'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AppWrapper(
  {
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    markAsCompleted,
    removeTodo,
    toggleTodoModal,
    showTodoModal,
    newTodoText,
    setNewTodoText,
    addTodo,
    loading,
    error
  }) {
  return (
    <>
      <Container className='todo-wrapper' as='main'>
        <Row className='todo-row justify-content-center'>
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
                {loading && <TodoLoading />}
                {error && <TodoError />}
                {!loading && searchedTodos.length <= 0 && <p>Crea tu primer todo</p>}
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

export { AppWrapper };