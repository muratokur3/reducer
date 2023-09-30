import React, { useReducer } from "react";
import reducer from "./Reducer";
import initialState from "./InitialState";
import TodoListing from "./TodoListing";
import AddTodo from "./AddTodo";
import Detail from "./Detail";
import './style.scss'

const TodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div id="container">
     <AddTodo  state={state} dispatch={dispatch}/>
      <TodoListing todos={state.todos} dispatch={dispatch}/>
      <hr/>
      
     {state.activeTodo.isActive===true&&<Detail state={state} dispatch={dispatch} />} 
    </div>
  );
};

export default TodoReducer;
