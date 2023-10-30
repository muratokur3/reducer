import React, { useReducer } from "react";
import reducer from "./Reducer";
import initialState from "./InitialState";
import TodoListing from "./TodoListing";
import AddTodo from "./AddTodo";
import Detail from "./Detail";
import './style.scss'
import Folders from "./Folders";

const TodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div id="container">
      <Folders folders={state.folders}/>
      <div id="contant">
      <AddTodo  state={state} dispatch={dispatch}/>
      <TodoListing state={state} todos={state.todos} dispatch={dispatch}/>
      <hr/>
     {state.activeTodo.isActive===true&&
     <Detail state={state} dispatch={dispatch} />} 
      </div>
    
    </div>
  );
};

export default TodoReducer;
