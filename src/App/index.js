import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LOCAL_STORAGE_ITEM_NAME } from '../constants'
import { useLocalStorage } from './useLocalStorage'
import { AppWrapper } from './AppWrapper';

function App() {
  const {item: todoList, saveItem: saveTodos, loading, error} = useLocalStorage(LOCAL_STORAGE_ITEM_NAME, []);
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
    });
    saveTodos(todos);
    setNewTodoText('newTodoText', newTodoText);
    setShowTodoModal(false);
  }
  const markAsCompleted = (id) => {
    const newTodos = todoList;
    newTodos.forEach((todo) => {
      if(todo.id === id) {
        todo.completed=true;
      }
    })
    saveTodos(newTodos);
  }

  const removeTodo = (id) => {
    let newTodos = todoList.slice(0, id).concat(todoList.slice(id+1));
    if(todoList.length <= 1) {
      newTodos = [];
    }
    saveTodos(newTodos);
  }
  return ( 
    <AppWrapper
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      markAsCompleted={markAsCompleted}
      removeTodo={removeTodo}
      toggleTodoModal={toggleTodoModal}
      showTodoModal={showTodoModal}
      newTodoText={newTodoText}
      setNewTodoText={setNewTodoText}
      addTodo={addTodo}
      loading={loading}
      error={error}
    />
  )
}

export default App;
