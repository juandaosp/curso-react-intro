import React from 'react';
import { TodoContext } from '../App/TodoContext';
import './todoCount.scss'

function TodoCount() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <header className='todo__counter'>
      <h1>
        Completaste <strong>{completedTodos}</strong> de <strong>{totalTodos}</strong>
      </h1>
    </header>
  )
}

export { TodoCount }