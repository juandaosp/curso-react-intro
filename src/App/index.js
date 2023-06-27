import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppWrapper } from './AppWrapper';
import { TodoProvider } from './TodoContext'

function App() {
  return ( 
    <TodoProvider>
      <AppWrapper />
    </ TodoProvider>
  )
}

export default App;
