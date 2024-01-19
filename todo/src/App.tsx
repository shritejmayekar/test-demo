import React, { useState } from 'react';
import './App.css';
import TodoList from './pages/TodoList';

function App() {
  interface todoI {
    text:string,
    isCompleted:false
  }
  const [todos,setTodos] = useState<todoI[]>([])
  const setTodoList = (text:string) => {
    setTodos([...todos,{'text':text,isCompleted:false}])
  }
  return (
    <div className="App">
     <TodoList todos={todos} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
