import React,{useState} from 'react'
import './NewTodoForm.scss'
interface Props {
    setTodoList:(text:string)=> void
}
const NewTodoForm = ({setTodoList}:Props) => {
    const [inputValue, setInputValue] = useState<string>('')
    const submit = () => {
        setTodoList(inputValue);setInputValue('')
    }
    const keyPressed = (event:any) => {

        if (event.charCode === 13 || event.code === "Enter") {
            submit()
        }
    }
    return (
        <div className='new-todo-form'>
            <input className='new-todo-input' onKeyPress={keyPressed} placeholder='Type new todo here...' value={inputValue} onChange={e=> setInputValue(e.target.value)} type="text" />
            <button className='new-todo-button' onClick={submit}>Create Todo</button>
        </div>
    )
}
export default NewTodoForm