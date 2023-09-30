import React, { useState } from "react";
import "./todo.scss";
import { BsFillTrashFill } from "react-icons/bs";
const Todos = () => {
  const [todos, setTodos] = useState([
   
  ]);
  const deleteTodo = (todo) => {
    setTodos(todos.filter((tod) => tod !== todo));
  };
  const [todoInput, setTodoInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos,{id:Date.now(),text:todoInput,completed:false}]);
    setTodoInput("");
  };

  const todoTamamla=(id)=>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo))
  }
  return (
    <div className="todo-container">
      <h1>Yapılacaklar Listesi</h1>
      <form onSubmit={addTodo}>
        <input
          value={todoInput}
          type="text"
          onChange={(event) => setTodoInput(event.target.value)}
          required
        />
        <input type="submit" value="Ekle" />
      </form>
      <hr />
      <ul style={{ display: "flex", flexDirection: "column-reverse" }}>
        {todos.map((todo) => 
          todo.completed===false&&
            <li key={todo.id}>
            <input onChange={()=>todoTamamla(todo.id)}  checked={todo.completed} type="checkbox" />
         {todo.text}
            <BsFillTrashFill className="btn" onClick={() => deleteTodo(todo)} />
          </li>
        )}
      </ul>
      <h1>Completed</h1>
      <ul style={{ display: "flex", flexDirection: "column-reverse" }}>
        {todos.map((todo) => 
          todo.completed===true&&
            <li key={todo.id}>
            <input onChange={()=>todoTamamla(todo.id)}  checked={todo.completed} type="checkbox" />
            {todo.text}
            <BsFillTrashFill className="btn" onClick={() => deleteTodo(todo)} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Todos;
