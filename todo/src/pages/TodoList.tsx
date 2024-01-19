import React from 'react'
import './TodoList.scss'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
interface todos {
    text:string
}
interface Props {
    todos: todos[]
    setTodoList: (text:string) => void;
  }
  
const TodoList = ({todos,setTodoList}:Props)=> {
    
    return (
        
        <div className='list-wrapper'>
            <NewTodoForm setTodoList={setTodoList} />
            {todos.map(todo=> <TodoListItem todo={todo} setTodoList={setTodoList} />)}

        </div>
    )
}

export default TodoList