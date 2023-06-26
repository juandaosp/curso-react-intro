import { AiFillDelete, AiOutlineFileDone  } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

function TodoItem({text, completed, id, markAsCompleted, removeTodo}) {
  return (
  <li>
    <Button
      variant="light"
      onClick={() => markAsCompleted(id)}
    >
      <AiOutlineFileDone 
        style={{color:  `${completed ? '#4CAF50' : 'gray'}`}}
      />
    </Button>
    <p>
      {text}
    </p>
    <span>
    <Button 
        variant="secondary"
        onClick={() => removeTodo(id)}
      > 
        <AiFillDelete style={{color: '#FFFFFF'}} />
      </Button>
    </span>
  </li>
    )
}

export { TodoItem };
