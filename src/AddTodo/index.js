import { AiOutlinePlus } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import './addTodo.scss';

function AddTodo({setShowTodoModal}) {
  return (
    <div className='todo__add-todo'>
      <Button 
        variant="primary"
        onClick={setShowTodoModal}
      > 
        <AiOutlinePlus /> 
      </Button>
    </div>
  )
}

export { AddTodo }