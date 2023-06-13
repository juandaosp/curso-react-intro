function TodoCount({total, completed}) {
  return (
    <header className='todo__counter'>
      <h1>
        Completaste <strong>{completed}</strong> de <strong>{total}</strong>
      </h1>
    </header>
  )
}

export { TodoCount }