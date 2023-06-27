import React from 'react';
import './todoFilter.scss'
import { TodoContext } from '../App/TodoContext';

function TodoFilter() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const searchInputChangeHandler = async(event) => {
    setSearchValue(event.target.value);
  }
  return (
    <section className='todo__filter'>
      <input 
        type='text' 
        placeholder="Filter your todos"
        value={searchValue} 
        onChange={searchInputChangeHandler}></input>
    </section>
  )
}

export { TodoFilter };
