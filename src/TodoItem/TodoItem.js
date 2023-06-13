import { AiFillDelete, AiOutlineFileDone } from "react-icons/ai";

function TodoItem({text, completed}) {
  return (
  <li>
    { completed && 
      <AiOutlineFileDone style={{color: '#4CAF50'}}/>
    }
    <p>
      {text}
    </p>
    <span>
      <AiFillDelete style={
        {color: '#FF4136'}
      }/>
    </span>
  </li>
    )
}

export { TodoItem };
