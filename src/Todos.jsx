import React, { useState } from "react";

const Todos = () => {
const [todos,setTodos]=useState(["asd","dsa"]);
const [todo,setTodo]=useState('');

  const addToDo = () => {
    setTodos([...todos,todo]);
    setTodo('')
  };
  return (
    <>
      <input onChange={(e)=>setTodo(e.target.value)} value={todo} type="text"></input>
      <button onClick={addToDo}> Ekle </button>

      <ul>
        {todos.map((todo,index)=>
        <li key={index}>{todo}</li>)
        }
      </ul>
    </>
  );
};

export default Todos;
