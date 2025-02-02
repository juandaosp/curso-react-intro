import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { LOCAL_STORAGE_ITEM_NAME } from "./constants";

const TodoContext = React.createContext();
const TodoProvider = ( {children} ) => {
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

  const context = {
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
  };

  return (
    <TodoContext.Provider value={context}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider}