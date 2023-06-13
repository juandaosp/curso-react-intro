function TodoList(props) {
  return (
    <ul className='todo__list'>
      {props.children}
    </ul>
  )
}

export { TodoList };
