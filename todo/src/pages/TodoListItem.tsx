import React from 'react'
import './TodoListItem.scss'
interface Props {
   todo:{
    text:string
   }
   setTodoList:(item:any)=>void
}

const TodoListItem = ({todo}:Props) =>{
    return(
        <div className='todo-item-container' key={todo.text}>
            <h3>{todo.text}</h3>
            <div className='buttons-container'>
            <button className='completed-button'>Mark As Completed</button>
            <button className='remove-button'>Remove</button>
            </div>

        </div>
    )
}

export default TodoListItem